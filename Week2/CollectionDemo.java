import java.util.*;

public class CollectionDemo {

    
    public List<String> listExample() {


        System.out.println("=========================================================================================================================================");
        List<String> student = new ArrayList<>();
        // adding elements to the list
        student.add("praveen");
        student.add("Vijay");
        student.add("Allu arjun");
        student.add("Ram charan"); 

        // removing an element from the list
        student.remove("praveen");

        // searching for an element in the list
        boolean hasVijay = student.contains("Vijay");

        System.out.println("List Example: " + student);
        System.out.println("does the list contain 'Vijay'? " + hasVijay);

   

        return student;
    }





    // Demonstrate on set method
    public Set<String> setExample() {


        System.out.println("=========================================================================================================================================");
        Set<String> fruits = new HashSet<>();
        // adding elements to the set
        fruits.add("apple");
        fruits.add("banana");
        fruits.add("orange");
        fruits.add("banana"); // duplicates are not allowed in set

        // removing an element from the set
        fruits.remove("orange");

        // searching for an element in the set
        boolean hasapple = fruits.contains("apple");

        System.out.println("set example: " + fruits);
        System.out.println("does the set contain 'apple'? " + hasapple);


    
        return fruits;
    }

    // Map method
    public Map<Integer, String> mapExample() {

        System.out.println("=========================================================================================================================================");
        Map<Integer, String> studentMap = new HashMap<>();
        // adding elements to the map
        studentMap.put(3, "praveen");
        studentMap.put(21, "rohit");
        studentMap.put(38, "saikrishna");
        studentMap.put(21, "pramod"); // overwriting the value for key 21

        // removing an element from the map
        studentMap.remove(3);

        // searching for an element in the map
        boolean hasKey1 = studentMap.containsKey(38);
        boolean hasvaluepraveen = studentMap.containsValue("praveen");

        System.out.println("map example: " + studentMap);
        System.out.println("does the map contain key '1'? " + hasKey1);
        System.out.println("Does the map contain value 'praveen'? " + hasvaluepraveen);
     
        return studentMap;
    }

    public static void main(String[] args) {
        CollectionDemo demo = new CollectionDemo();

        
        demo.listExample();

       
        demo.setExample();

      
        demo.mapExample();
    }
}