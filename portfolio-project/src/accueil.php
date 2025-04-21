<?php
// filepath: c:\wamp64\www\Portfolio\src\accueil.php

include 'includes/header.php';
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="assets/css/styles.css">
    <title>Portfolio - Home</title>
</head>
<body>
    <main>
        <h1>Welcome to My Portfolio</h1>
        <p>This portfolio showcases my skills, experiences, and certifications. Explore the sections below to learn more about me.</p>
        
        <nav>
            <ul>
                <li><a href="presentation.php">Presentation</a></li>
                <li><a href="stage.php">Stage</a></li>
                <li><a href="certifications.php">Certifications</a></li>
                <li><a href="veilles-informatiques.php">Veilles Informatiques</a></li>
            </ul>
        </nav>
    </main>

<?php
include 'includes/footer.php';
?>