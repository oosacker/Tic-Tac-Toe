<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
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
        --><li><a href="upload-img.php">Upload</a></li><!--
        --><li><a href="settings.php">Settings</a></li><!--
        --><li><a class="active" href="info.php">Info</a></li>
    </ul>
</div>

<h3>This game was written by Natsuki Hasegawa in September 2019 for assignment 2 of SWEN 502 in 2019.</h3>
<p>It was coded in about 4 days. We don't get much time here in the Master of Software Development course.</p>
<p>It uses a lot of JavaScript to run the game. The game grid is represented by a 2d array of 'box' objects, which
    contain the 'name' (like box-a - the top left one) and 'state' (neutral/player1/player2) of each box.</p>
<p>The CPU opponent uses just a random number generator so it's really dumb.</p>
<p>The layout was done with HTML and CSS. Email and image uploads are handled with PHP. I used IntelliJ write code in
    HTML, CSS, JavaScript and PHP. </p>
<p>Possible improvements include making the squares images and allowing it to be changed (like the background),
    adding proper AI in CPU mode, adding a mobile mode, etc. I would also like to try making a memory game (
    pictures are hidden and you have to match up 2 same ones by clicking on them) based on a similar grid layout.</p>

<h3>Questions/comments? Send me an email!</h3>
<div class="mail-container">

    <form action="sendmail.php" method="post">

            <div class="mail-input-field">
                <label for="from">From:</label>
                <br/>
                <input type="text" name="from" id="mail-from" size="50"/>
                <br/>
            </div>

            <div class="mail-input-field">
                <label for="subject">Subject:</label>
                <br/>
                <input type="text" name="subject" id="mail-subject" size="50"/>
                <br/>
            </div>

            <div class="mail-input-field">
            <label for="message">Message:</label>
                    <br/>
                    <textarea name="message" id="mail-message" rows="10" cols="50"></textarea>
                    <br/>
            </div>

        <input type="submit" value="Send" />

    </form>

</div>

</body>
</html>