import java.io.*;
import java.util.*;
import javax.sql.*;
import javax.servlet.*;
import javax.servlet.http.*;
import java.sql.*;
public class display extends HttpServlet{
	public void doGet(HttpServletRequest request,HttpServletResponse response)
	throws IOException,ServletException{
		response.setContentType("text/html");
		PrintWriter out=response.getWriter();
		out.println("<head>");
		out.println("<body>");
		//Connection con=null;
		Statement stmt=null;
		ResultSet rs=null;
		try{
			Class.forName("com.mysql.jdbc.Driver");
			Connection con=DriverManager.getConnection("jdbc:mysql://localhost:3306/hospital","root","sujai");
			out.println("connected");
			stmt=con.createStatement();
			rs=stmt.executeQuery("select * from form");
			out.println("<center>Displaying list of previous appointments</center><br><center>");
			out.println("<table cellpadding='20px' border='1px solid'>");
			out.println("<tr>");
			//	out.println(firstname+lastname+regno+address+email+age);
				out.println("<th>firstname</th>");
				out.println("<th>lastname</th>");
				out.println("<th>regno</th>");
				out.println("<th>address</th>");
				out.println("<th>email</th>");
				out.println("<th>age</th>");
				out.println("</tr>");
			while(rs.next()){
				String firstname=rs.getString("firstname");
				String lastname=rs.getString("lastname");
				int regno=rs.getInt("regno");
				String address=rs.getString("address");
				String email=rs.getString("email");
				int age=rs.getInt("age");
				out.println("<tr>");
			//	out.println(firstname+lastname+regno+address+email+age);
				out.println("<td>"+firstname+"</td>");
				out.println("<td>"+lastname+"</td>");
				out.println("<td>"+regno+"</td>");
				out.println("<td>"+address+"</td>");
				out.println("<td>"+email+"</td>");
				out.println("<td>"+age+"</td>");
				out.println("</tr>");
			}
			out.println("</table></center>");
			out.println("</body></html>");
		}catch(Exception e){
			out.println("error");
			out.println(e);
		}
		//out.close();
	}
}