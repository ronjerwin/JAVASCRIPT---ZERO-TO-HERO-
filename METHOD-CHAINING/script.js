// WHAT IS METHOD CHAINING?
// >> A POWERFUL TECHNIQUE THAT ALLOWS MULTIPLE METHODS TO BE CALLED ON THE SAME OBJECT IN A SINGLE STATEMENT.
// >> IT IMPROVES CODE READABILITY BY CREATING A "PIPELINE" OF OPERATIONS, REDUCING THE NEED FOR INTERMEDIATE TEMPORARY VARIABLES.
// >> NOTE: EACH METHOD IN THE CHAIN MUST RETURN A VALUE THAT THE NEXT METHOD IN THE CHAIN CAN OPERATE ON.


// EXAMPLE:

let userName = 'ronjerwin';

// FORMATS 'ronjerwin' TO 'Ron Jerwin' BY SLICING AND TRANSFORMING SPECIFIC CHARACTERS
let newUserName = userName.charAt(0).toUpperCase() + 
                  userName.slice(1, 3) + 
                  userName.charAt(3).toUpperCase().padStart(2, ' ') + 
                  userName.slice(4);

console.log(newUserName); //OUTPUT: 'Ron Jerwin'