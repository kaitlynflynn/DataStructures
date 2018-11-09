// Given two strings, write a method to decide if one is a permutation of the other. 

// SOLUTION #1 - Sort the Strings
// Some good questions to ask before proceeding: 
// Should this be case sensitive? (is God a permutation of dog?)
// Is whitespace significant? For this scenario we will assume that both are significant. 

String sort(String s) {
    char[] content = s.toCharArray();
    java.util.Arrays.sort(content); 
    return new String(content);
}

boolean permutation(String s, String t) {
    if (s.length() != t.length()) {
        return false;
    }
    return sort(s).equals(sort(t));
}

// SOLUTION #2 - Check if the two string have identical character counts. 
boolean permutation(String s, String t) {
    if (s.length() != t.length()) return false; // Permutations must be same length

    int[] letters = new int[128]; // Assumption: ASCII
    for (int i = 0; i < s.length(); i++) {
        letters[s.charAt(i)]++;
    }

    for (int i = 0; i < t.length(); i++) {
        letters[t.charAt(i)]--;
        if (letters[t.chatAt(i)] < 0) {
            return false;
        }
    }
    return true; // letters has no neg values, and therefore no pos values either
}
