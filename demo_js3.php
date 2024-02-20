<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Demo Js3</title>
    <?php include("html/css.html");?>
</head>
<body>
    <main class="section_main">
        <div class="container">
            <button type="button" onclick="stopFan()">Stop</button>
            <button type="button" onclick="fan()">01</button>
            <button type="button" onclick="fan()">02</button>
            <button type="button" onclick="fan()">03</button>
            <div id="fan" onmouseenter="fan()" onmouseleave="stopFan()"></div>
        </div>
    </main>
    <script type="text/javascript" src="js/demo3.js"></script>
    <style>
        #fan{
            width: 450px;
            height: 450px;
            float: left;
            margin: 200px;
            background-image: url("images/GArNzIFWsAAYqm4.jpg");
            background-size: cover;
        }
    </style>
</body>
</html>