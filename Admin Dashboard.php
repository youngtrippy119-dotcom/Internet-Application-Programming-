<?php

session_start();

if($_SESSION['role'] != 'admin'){
header("Location: ../login.html");
exit();
}
?>

<h1>Admin Dashboard</h1>

<ul>
<li>Manage Users</li>
<li>Manage Events</li>
<li>Manage Lost & Found Posts</li>
<li>Manage Bookings</li>
</ul>
