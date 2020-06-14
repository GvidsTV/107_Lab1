module.exports = {
    isEven: function(num){
        var res = num % 2;
        if(res == 0) {
            return true;
        }
        else {
            return false;
        }
    }, 
    sum: function (num1, num2){
        return num1 + num2;
    },
    greater: function(num1, num2){
        if(num1>num2){           return num1;
        }
  
            return num2;  

    },
    smaller: function(num1, num2){
        if(num1 < num2)
    
        return num1;

        return num2;
    },
    divide: function(num1, num2){
        // if division by 0:
        // show an error
        // return 0

        // return result
    }
};