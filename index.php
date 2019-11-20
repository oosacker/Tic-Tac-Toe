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
        <li><a class="active" href="index.php">Home</a></li><!--
        --><li><a href="upload-img.php">Upload</a></li><!--
        --><li><a href="settings.php">Settings</a></li><!--
        --><li><a href="info.php">Info</a></li>
    </ul>
</div>

<p id="msg">Click on a square to play!</p>

<label for="mode-select">
    Play against:
</label>
<select id="mode-select">
    <option value="human" selected>Human</option>
    <option value="cpu">CPU</option>
</select>

<div class="grid">
    <div class="box a" id="box-a">A</div>
    <div class="box b" id="box-b">B</div>
    <div class="box c" id="box-c">C</div>
    <div class="box d" id="box-d">D</div>
    <div class="box e" id="box-e">E</div>
    <div class="box f" id="box-f">F</div>
    <div class="box d" id="box-g">G</div>
    <div class="box e" id="box-h">H</div>
    <div class="box f" id="box-i">I</div>
</div>

<input type="button" value="Reset" id="reset-btn">

<p>Previous result: <span id="result" name="result">None</span>.</p>

</body>
<script src="main-script.js" type="text/javascript"></script>
</html>