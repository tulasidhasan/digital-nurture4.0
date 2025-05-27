public class OperatorPrecedence {
    public static void main(String[] args) {
        int result = 10 + 5 * 2; // Multiplication has higher precedence
        System.out.println("Result: " + result); // Output: 20

        int withParentheses = (10 + 5) * 2;
        System.out.println("With parentheses: " + withParentheses); // Output: 30
    }
}
