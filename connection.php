<?php

    // Server info here
    $server = "localhost"; // Probably will remain the same, if saving DB locally with this file
    $username = "root"; // Get from hosting CO
    $password = "root"; // Get from hosting CO
    $db = "website_test"; // Name of DB

    // Connecting to DB within server
    $conn = mysqli_connect( $server, $username, $password, $db );

    // Checking for a connection
    if ( !$conn ) {
        die( "Connection failed: " . mysqli_connect_error() );
    }


?>
