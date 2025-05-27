import java.io.*;
import java.net.*;

public class ChatClient {
    public static void main(String[] args) throws IOException {
        Socket socket = new Socket("localhost", 1234);
        BufferedReader in = new BufferedReader(new InputStreamReader(socket.getInputStream()));
        PrintWriter out = new PrintWriter(socket.getOutputStream(), true);

        BufferedReader consoleInput = new BufferedReader(new InputStreamReader(System.in));
        String userInput;
        while (true) {
            System.out.print("Client: ");
            userInput = consoleInput.readLine();
            out.println(userInput);
            System.out.println("Server: " + in.readLine());
        }
    }
}
