import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;
import java.sql.*;
public class form extends HttpServlet{
	public void doGet(HttpServletRequest request,HttpServletResponse response)throws ServletException,IOException{
		response.setContentType("text/html");
		PrintWriter out=response.getWriter();
		String firstname=request.getParameter("first_name");
		String lastname=request.getParameter("last_name");
		int regno=Integer.parseInt(request.getParameter("reg_no"));
		String address=request.getParameter("address");
		String email=request.getParameter("email");
		int age=Integer.parseInt(request.getParameter("age"));
		boolean s=true;
		int t=0;
		try{
			Class.forName("com.mysql.jdbc.Driver");
			Connection con=DriverManager.getConnection("jdbc:mysql://localhost:3306/hospital","root","sujai");
			//String Query="insert into form values(?,?,?,?,?,?)";
			String Query="insert into form values(?,?,?,?,?,?)";
			PreparedStatement ps=con.prepareStatement(Query);
			ps.setString(1,firstname);
			ps.setString(2,lastname);
			ps.setInt(3,regno);
			ps.setString(4,address);
			ps.setString(5,email);
			ps.setInt(6,age);
			//ps.execute(Query);
			int i=ps.executeUpdate();
			out.print(i+"records affected");
			t=i;
			
			
			ps.close();
			con.close();
			
		}catch(Exception e)
		{
			out.print(e);
		}
/*		if(t==0)
			{
				out.println("Welcome");
				
				RequestDispatcher rs=request.getRequestDispatcher("welcome");
				
				rs.forward(request,response);
			}*/
	}
}	