/************************************************************
 * 
 * Purpose      :   To have all the functionalities of Functional Programs.
 * 
 * @description
 * 
 * @file        :   Utility.js
 * @overview    :   Export the functionalities to developers for reuseability,
 *                  simplification of coding.
 * @author      :   Vivek D Chenimane <vivekdchenimane@gmail.com>
 * @version     :   1.0
 * @since       :   09-01-2019
 * 
 * **********************************************************/

/**
* 'readline'helps to have conversation with the user via a console,
* '-sync' helps readline to sync even when the input/output stream is redirected.
*/

const readline = require('readline-sync');
module.exports = {

    flipCoin(times) {
        var tails = 0, heads = 0;
        for (let index = 0; index < times; index++) {
            var value = Math.random();
            if (value < 0.5)
                tails++;
            else
                heads++;
        }
        console.log("The percentage of heads is :" + (heads / times) * 100 + "%");
        console.log("The percentage of tails is :" + (tails / times) * 100 + "%");
    },

    /**
     * @description   To check wheather the Entered year is a leap year or not.
     * 
     * @param {Integer} year
     */

    leap(year) {
        /**
         * checks the constraints as year should be divisible of 4 and 
         * should not be multiple of 100 and multiple of 400 as a exception.
         */
        if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0)
            console.log(year + " is a leap year");
        else
            console.log(year + " is not a leap year");
    },

    /**
     * @description To print the powers of two till the range.
     * 
     * @param {Integer} range 
     */

    powerOfTwo(range) {

        for (let index = 1; index <= range; index++) {
            var res = Math.pow(2, index);
            console.log(index + "->" + res);
        }
    },

    /**
     * @description To get the Harmonic number for the (num)th value.
     * 
     * @param {Integer} num 
     */

    harmonic(num) {
        var sum = 0;
        for (let index = 1; index <= num; index++) {
            sum += 1 / index;
        }
        console.log("The " + num + "th number is " + sum);
    },

    /**
     * @description To play Gambling game and check the luck of the player
     * 
     * @param {Integer} stake - present amount the player has.
     * @param {Integer} goal  - the target of the player.
     * @param {Integer} trials - the number of times he want to play.
     */
    Gambling(stake, goal, trials) {
        var loss = 0;
        var bets = 0;
        var wins = 0;
        for (let t = 0; t < trials; t++) {
            let cash = stake;
            while (cash > 0 && cash < goal) {
                bets++;
                if (Math.random() < 0.5)
                    cash++;
                else
                    cash--;
            }
            if (cash == goal)
                wins++;
            else
                loss++;
        }
        console.log(wins + " wins of " + trials);
        var won = (100.0 * wins) / trials;
        console.log("Percent of games won = " + won);
        console.log(loss + " loss of " + trials);
        var lose = (100.0 * loss) / trials;
        console.log("Percent of games lose = " + lose);
        console.log("Number of bets: " + bets);
    },

    primeFactorization(num) {
        if (num == 1)
            console.log("1 has no factors");
        var flag = true;
        while (num % 2 == 0) {
            num = num / 2;
            console.log('2 ');
        }
        for (let i = 3; i <= Math.floor(Math.sqrt(num)); i += 2) {
            while (num % i == 0) {
                console.log(i + " ");
                num = num / i;
            }
        }
        if (num > 2) {
            console.log(num);
        }
    },

    randomNumber(min, max) {
        var res = Math.round(Math.random() * (max - min) + min);
        console.log(res);
        return res;
    },

    randomArray(num) {
        var arr = [];
        var count = 0;
        var number;
        for (let i = 0; i < num; i++) {
            var flag = true;
            while (flag) {
                count++;
                number = this.randomNumber(1, num);
                flag = this.checkNumber(number, arr);
            }
            arr[arr.length] = number;
        }
        console.log("The number of times the random number executed was " + count);
        return arr;
    },
    checkNumber(num, arr) {
        for (let index = 0; index < arr.length; index++)
            if (arr[index] == num)
                return true;
        return false;
    }
    ,
    twoDArray(m, n) {
        var arr = [];;
        for (let i = 0; i < m; i++) {
            arr.push([]);
            for (let j = 0; j < n; j++)

                arr[i][j] = readline.question("Enter the value");
        }
        return arr;
    },
    print(arr) {
        for (let i = 0; i < arr.length; i++)
            console.log(arr[i]);
    },

    triplet(arr) {
        var n = arr.length;
        var count = 0;
        for (let i = 0; i < n - 2; i++)
            for (let j = i + 1; j < n - 1; j++)
                for (let k = j + 1; k < n; k++) {
                    console.log('k: ' + k);
                    console.log(Number(arr[i]) + Number(arr[j]) + Number(arr[k]));
                    if (Number(arr[1][i]) + Number(arr[1][j]) + Number(arr[1][k]) == 0) {
                        let l = 0;
                        console.log(l)
                        console.log(arr[1][i] + "," + arr[1][j] + "," + arr[1][k] + ".");
                        count++;
                        l++;

                    }
                }
        console.log("The number of trilets who's sum is equal to 0 is " + count);
    },


    euclidean(x, y) {
        return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
    },
    timeSecond() {
        var date = new Date
        return date.getSeconds()
    },

    intializeGame() {
        var game = [];
        for (let i = 0; i <= 2; i++) {
            game.push([]);
            for (let j = 0; j <= 2; j++)
                game[i][j] = '-';
        }
        return game;
    },

    random() {
        var value = Math.floor(Math.random() * 3);
        console.log(value);
        return value;
    },

    mark(game, x, y, value) {
        if (game[x][y] == '-')
            game[x][y] = value;
        for (let i = 0; i <= 2; i++) {
            var print = [];
            for (let j = 0; j <= 2; j++)
                print[j] = game[i][j];
            console.log(print);
        }
        return game;
    }
    ,
    computerPlayer(game) {
        var arr;
        var flag = false;
        while (flag == false) {
            var x = this.random();
            var y = this.random();
            if (game[x][y] == '-') {
                arr = this.mark(game, x, y, 'O');
                flag = true;
            }
        }
        return game;
    }
    ,
    userPlayer(game) {
        var flag = false;
        while (flag == false) {
            console.log("Enter the row value:");
            let x = readline.questionInt('Enter the value of x within 0,1,2');
            let y = readline.questionInt('Enter the value of y within 0,1,2');
            if (game[x][y] == '-') {
                this.mark(game, x, y, 'X');
                flag = true;
            }
            else
                console.log("Please enter the correct choice");
        }
        return game;
    }
    ,
    check(game) {
        for (let i = 0; i <= 2; i++) {
            if (game[i][0] == game[i][1] && game[i][1] == game[i][2]) {
                if (game[i][0] == 'O' || game[i][0] == 'X') {
                    return true;
                }
            }
            if (game[0][i] == game[1][i] && game[1][i] == game[2][i]) {
                if (game[0][i] == 'O' || game[0][i] == 'X') {
                    return true;
                }
            }
        }
        var k = 0, l = 0;
        if (game[k][k] == game[k + 1][k + 1] && game[k + 1][k + 1] == game[k + 2][k + 2]) {
            if (game[0][0] == 'O' || game[0][0] == 'X') {
                return true;
            }
        }
        if (game[l][l + 2] == game[l + 1][l + 1] && game[l + 1][l + 1] == game[l + 2][l]) {
            if (game[0][0] == 'O' || game[0][0] == 'X') {
                return true;
            }
        }
        return false;
    },

    quadratic(a, b, c) {
        var root = [];
        var delta = Math.sqrt((b * b) - (4 * a * c));
        root[0] = (-b + delta) / (2 * a);
        root[1] = (-b - delta) / (2 * a);
        return root;
    },

    chillWind(t, v) {
        if (t < 50 && v < 120 && v > 3) {
            var w = 35.74 + 0.6215 * t + (0.4275 * t - 35.75) * Math.pow(v, 0.16);
            return w;
        }
    }

}