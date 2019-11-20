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
        <!--NEED TO ADD COMMENTS BETWEEN LIST ITEMS OR GET STUPID SPACES!!!!!-->
        <li><a href="index.php">Home</a></li><!--
        --><li><a  href="upload-img.php">Upload</a></li><!--
        --><li><a href="settings.php">Settings</a></li><!--
        --><li><a href="info.php" class="active">Info</a></li>
    </ul>
</div>

<br>

<?php

$to = "haseganats@myvuw.ac.nz";
$subject = $_REQUEST['subject'];
$txt = $_REQUEST['message'];
$from = $_REQUEST['from'];

$headers = "MIME-Version: 1.0" . PHP_EOL . "Content-type:text/plain;charset=UTF-8" . PHP_EOL . "From: $from";

mail($to, $subject, $txt, $headers); ?>

<p>
        Email sent to:
            <?php
            echo $to
            ?>
        <br><br>
        Subject:
            <?php
            echo $subject
            ?>
        <br><br>
        Message:
            <?php
            echo $txt
            ?>
        <br><br>
        From:
            <?php
            echo $from
            ?>
</p>

</body>
<!--<script src="main-script.js" type="text/javascript"></script>-->
</html>
