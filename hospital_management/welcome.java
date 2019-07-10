import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;
import java.sql.*;
public class welcome extends HttpServlet{
	public void doGet(HttpServletRequest request,HttpServletResponse response)throws ServletException,IOException{
		response.setContentType("text/html");
		PrintWriter out=response.getWriter();
		out.println("Welcome user");
		//out.println("<a href='/project.html'>"+"click here!"+"</a>");
		response.sendRedirect("/examples/htmlproject/project.html");
	}
}