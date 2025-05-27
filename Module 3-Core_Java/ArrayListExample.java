import java.util.ArrayList;
import java.util.Scanner;

public class ArrayListExample {
    public static void main(String[] args) {
        ArrayList<String> students = new ArrayList<>();
        Scanner sc = new Scanner(System.in);

        System.out.print("How many names to enter? ");
        int count = sc.nextInt();
        sc.nextLine(); // consume leftover newline

        for (int i = 0; i < count; i++) {
            System.out.print("Enter name #" + (i + 1) + ": ");
            String name = sc.nextLine();
            students.add(name);
        }

        System.out.println("Student names:");
        for (String name : students) {
            System.out.println(name);
        }
    }
}
