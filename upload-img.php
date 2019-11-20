<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <title>My Project 2019</title>
    <link rel="stylesheet" href="style.css" type="text/css" />
</head>
<body>

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

<h3>You can upload your own background to use on this website.</h3>
<p>Note that the current background will be overwritten on the server.</p>
<form action="upload.php" method="post" enctype="multipart/form-data">
    <p>Select image:</p>
    <input type="file" name="fileToUpload" id="fileToUpload" accept="image/jpeg">
    <input type="submit" value="Upload Image" name="submit">
</form>


</body>
</html>