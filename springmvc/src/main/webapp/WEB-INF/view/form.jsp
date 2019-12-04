<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>My Form</title>
</head>
<body>
<form action="./form" method="post" style="margin-left: 450px;margin-top: 100px;">
id:<br><input type="text" name="id" placeholder="enter Id"><br>
name:<br><input type="text" name="name" placeholder="Enter Name"><br>
Password:<br><input type="password" name="password" placeholder="Enter Password"><br>
gender<br><input type="text" name="gender" placeholder="Enter gender"><br>
DOJ<br><input type="date" name="doj"><br>
<button type="reset">Reset</button>
<button type="submit">Submit</button>
</form>
</body>
</html>