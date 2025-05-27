import java.util.*;
import java.util.stream.Collectors;

record Person(String name, int age) {}

public class RecordExample {
    public static void main(String[] args) {
        List<Person> people = List.of(
            new Person("Tulasi", 22),
            new Person("Ravi", 30),
            new Person("Anu", 17)
        );

        System.out.println("People 18+ years old:");
        people.stream()
              .filter(p -> p.age() >= 18)
              .forEach(System.out::println);
    }
}
