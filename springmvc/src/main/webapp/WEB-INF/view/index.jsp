<%
String s=(String)request.getAttribute("msg");
%>
<html>
<body>
<h2 style="color: green;">${msg}</h2>
<h2 style="color: red;"><%=s %></h2>
<h2>${name}</h2>
<h2>${id}</h2>
</body>
</html>
