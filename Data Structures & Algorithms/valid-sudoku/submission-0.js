class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        // use set for check the record
        // use array to store the set in it
        let rows = []
        let cols = []
        let boxes = []
        // initialize the array of set with the loop
        for(let i = 0; i < 9; i++){
            rows.push(new Set)
            cols.push(new Set)
            boxes.push(new Set)
        }

        for(let row = 0; row < 9; row++){
            for(let col = 0; col < 9; col++){
                let val = board[row][col]
                // check the . so its got skip
                if(val === ".")
                    continue

                // check for the row
                let currRowHas = rows[row].has(val)
                if(!currRowHas)
                    rows[row].add(val) 
                // check for the col
                let currColHas = cols[col].has(val)
                if(!currColHas)
                    cols[col].add(val)
                // check for the box 3x3
                let rowBox = Math.floor( row / 3)
                let colBox = Math.floor( col / 3)
                // make the boxes index
                let boxIndex = rowBox * 3 + colBox
                let currBoxHas = boxes[boxIndex].has(val)
                if(!currBoxHas)
                    boxes[boxIndex].add(val)
                if(currRowHas || currColHas || currBoxHas)
                    return false
            }
        }
        return true
    }
}
