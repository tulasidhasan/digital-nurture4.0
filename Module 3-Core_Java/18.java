class Animal {
    void makeSound() {
        System.out.println("Some generic sound...");
    }
}

class Dog extends Animal {
    void makeSound() {
        System.out.println("Bark");
    }

    public static void main(String[] args) {
        Animal a = new Animal();
        a.makeSound();

        Dog d = new Dog();
        d.makeSound();
    }
}
