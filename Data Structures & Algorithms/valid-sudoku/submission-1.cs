public class Solution {
    public bool IsValidSudoku(char[][] board) {
        // use static Array of set on 9 space
        HashSet<char>[] rows = new HashSet<char>[9];
        HashSet<char>[] cols = new HashSet<char>[9];
        HashSet<char>[] boxes = new HashSet<char>[9];

        // initialize the array of set on loop
        for(int i = 0; i < 9; i++){
            rows[i] = new HashSet<char>();
            cols[i] = new HashSet<char>();
            boxes[i] = new HashSet<char>();
        }

        for(int row = 0; row < 9; row++){
            for(int col = 0; col < 9; col++){
                // get the current char
                char val = board[row][col];
                if(val == '.')
                    continue;
            
                // check on the rows
                bool rowHas = rows[row].Contains(val);
                if(!rowHas){
                    rows[row].Add(val);
                }
                // check on the cols
                bool colHas = cols[col].Contains(val);
                if(!colHas){
                    cols[col].Add(val);
                }
                // check on the boxes
                // calc the row on 3x3 position
                int rowBox = row/3;
                // calc the col on 3x3 position
                int colBox = col/3;
                // flattening teh 2d into 1d array by using this formula
                int boxIndex = (rowBox * 3) + colBox;
                bool boxesHas = boxes[boxIndex].Contains(val);
                if(!boxesHas){
                    boxes[boxIndex].Add(val);
                }

                if(rowHas || colHas || boxesHas){
                     Console.WriteLine(rows[row].Contains(val));
                    Console.WriteLine(cols[col].Contains(val));
                    Console.WriteLine(boxes[boxIndex].Contains(val));
                    return false;
                }
            
            }
        }
        return true;
    }
}
