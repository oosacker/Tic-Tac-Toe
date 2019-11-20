<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <title>My Project 2019</title>
    <link rel="stylesheet" href="style.css" type="text/css" />
</head>
<img>

<div class="main-heading">
    <a href="index.php"><h1>TIC-TAC-TOE</h1></a>
</div>

<div class="navbar">
    <ul>
        <!--NEED TO ADD COMMENTS BETWEEN LIST ITEMS OR GET DUMB SPACES!!!!!-->
        <li><a href="index.php">Home</a></li><!--
        --><li><a class="active" href="upload-img.php">Upload</a></li><!--
        --><li><a href="settings.php">Settings</a></li><!--
        --><li><a href="info.php">Info</a></li>
    </ul>
</div>

<br>

<?php
$target_file = "uploads/background.jpg";    // Renames the file on the server to this after upload
$upload_OK = true;      // Default
$fileSave_OK = false;   // Default

/* Check if HTML POST operation (upload) was OK */
if (!isset($_POST['submit'])){
    $upload_OK = false;
    ?><p><?php
        echo "There was an error uploading your file!";
    ?></p><?php
}

/*
*    $_FILES["fileToUpload"]["tmp_name"] is the temporary name of the image file on the server
*    $_FILES[][] is an array that contains the info of the uploaded file (name, size, format etc)
*/

/* Check the file size */
if($_FILES["fileToUpload"]["size"] > 5000000){
    $upload_OK = false;
    ?><p><?php
        echo "File is too large!";
    ?></p><?php
}

/* Check the file type */
if($_FILES["fileToUpload"]["type"] !== "image/jpeg"){
    $upload_OK = false;
    ?><p><?php
        echo "File is not a jpg!";
    ?></p><?php
}

/* If no errors then continue */
if ($upload_OK) {

    /* Rename and then move the image to the target directory */
    $fileSave_OK = move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $target_file);

    if($fileSave_OK) {
        /* basename function removes the file path */
        ?><p><?php
            echo basename($target_file) . " has been uploaded successfully!";
        ?></p><?php
    }

    else{
        ?><p><?php
            echo "There was an error saving your file!";
        ?></p><?php
    }
}
?>

<br>
<div class="uploaded-img">
    <img width="500" alt="Uploaded image goes here" src="<?php echo $target_file; ?>"/>
</div>
<p>You may need to refresh the page for changes to take effect.</p>

</body>
</html>