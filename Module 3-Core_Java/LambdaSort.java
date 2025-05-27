import java.util.*;

public class LambdaSort {
    public static void main(String[] args) {
        List<String> names = Arrays.asList("Tulasi", "Priya", "Anil", "Karthik");
        names.sort((a, b) -> a.compareToIgnoreCase(b));
        System.out.println("Sorted names:");
        names.forEach(System.out::println);
    }
}
