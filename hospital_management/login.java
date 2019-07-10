import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;
import java.sql.*;
public class login extends HttpServlet{
	public void doGet(HttpServletRequest request,HttpServletResponse response)throws ServletException,IOException{
		response.setContentType("text/html");
		PrintWriter out=response.getWriter();
		String uname=request.getParameter("user_name");
		String pass=request.getParameter("password");
		boolean s=true;
		try{
			Class.forName("com.mysql.jdbc.Driver");
			Connection con=DriverManager.getConnection("jdbc:mysql://localhost:3306/hospital","root","sujai");
			String Query="select * from users where username=? and password=?";
			PreparedStatement ps=con.prepareStatement(Query);
			ps.setString(1, uname);
			ps.setString(2, pass);
			ResultSet rs=ps.executeQuery();
			
			s=rs.next();
			
			rs.close();
			ps.close();
			con.close();
			
		}catch(Exception e)
		{
			e.printStackTrace();
		}
		
		if(s)
			{
				out.println("Welcome");
				
				RequestDispatcher rs=request.getRequestDispatcher("welcome");
				
				rs.forward(request,response);
				
			}
		else
			{
				out.println("Username or password incorrect");
				RequestDispatcher rs=request.getRequestDispatcher("index.html");
				rs.include(request,response);
			}
	}
}