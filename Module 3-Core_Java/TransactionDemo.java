import java.sql.*;

public class TransactionDemo {
    public static void main(String[] args) throws SQLException {
        Connection conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/your_database", "user", "pass");
        conn.setAutoCommit(false);

        try {
            PreparedStatement debit = conn.prepareStatement("UPDATE accounts SET balance = balance - ? WHERE id = ?");
            debit.setInt(1, 100);
            debit.setInt(2, 1);
            debit.executeUpdate();

            PreparedStatement credit = conn.prepareStatement("UPDATE accounts SET balance = balance + ? WHERE id = ?");
            credit.setInt(1, 100);
            credit.setInt(2, 2);
            credit.executeUpdate();

            conn.commit();
            System.out.println("Transaction successful.");
        } catch (SQLException e) {
            conn.rollback();
            System.out.println("Transaction failed. Rolled back.");
            e.printStackTrace();
        } finally {
            conn.close();
        }
    }
}
