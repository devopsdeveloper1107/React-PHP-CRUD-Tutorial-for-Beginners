<?php
error_reporting(E_ALL);
ini_set('display_errors',1);
header("Access-Control-Allow-Origin:* ");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");

$db_conn= mysqli_connect("localhost","root", "", "reactphp");
if($db_conn===false)
{
  die("ERROR: Could Not Connect".mysqli_connect_error());
}

$method = $_SERVER['REQUEST_METHOD'];
//echo "test----".$method; die;
switch($method)
{
    case "GET": 
      echo "Get Api"; die;
       
    break;

    case "POST":

      if(isset($_FILES['pfile']))
      {
      
        $ptitle= $_POST['ptitle'];
        $pprice= $_POST['pprice'];
        $pfile= time().$_FILES['pfile']['name'];
        $pfile_temp= $_FILES['pfile']['tmp_name'];
        $destination= $_SERVER['DOCUMENT_ROOT'].'/reactcrudphp'."/".$pfile;

        $result= mysqli_query($db_conn,"INSERT INTO tbl_product (ptitle, pprice,pfile, pstatus)
        VALUES('$ptitle','$pprice','$pfile','1')");

        if($result)
        { 
          move_uploaded_file($pfile_temp, $destination);
          echo json_encode(["success"=>"Product Inserted Successfully"]);
           return;
        } else{
          echo json_encode(["success"=>"Product Not Inserted!"]);
           return;
        }

      } else{
        echo json_encode(["success"=>"Data not in Correct Format"]);
        return;
      }
        
    break;

    case "DELETE":
           
    break;

          

}


?>
