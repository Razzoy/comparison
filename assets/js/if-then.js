
// variabler du skal bruge i din kode...
const A = 10;
const B = 30;
const C = '30';
const D = 10;
const E = 40;

// Opgave 1: skriv et expression der viser true når A er lig med B.
console.log('Opgave 1: skriv et expression der viser true når A er lig med B: ');

console.log('if (A == B)')
if (A == B) {
    console.log('statement true! A == B');
}


//opgave 2: skrive en If then statement der vurderer om A er større end B.
console.log('Opgave 2: skriv en If then statement der vurderer om A er større end B: ');

if (A > B){
    console.log('statement true! A > B');
} else{
    console.log('statement false! A !> B');
}


//opgave 3: Skriv en If then statement der vurderer om A er mindre end eller lig med B
console.log('Opgave 3: Skriv en If then statement der vurderer om A er mindre end eller lig med B: ');

if (A <= B){
    console.log('statement true! A <= B');
} else{
    console.log('statement false! A !<= B');
}



//opgave 4: Skriv en If then statement der bliver FALSE når du sammenligner B og C.
console.log('Opgave 4: Skriv en If then statement der bliver FALSE når du sammenligner B og C: ');

if (B === C){
    console.log('statement true! B === C');
} else{
    console.log('statement false! B !== C');
}



//opgave 5: Skriv en If then statement der bliver TRUE når du sammenligner B og C.
console.log('Opgave 5: Skriv en If then statement der bliver TRUE når du sammenligner B og C: ');

if (B == C){
    console.log('statement true! B == C');
} else{
    console.log('statement false! B != C');
}


//opgave 6: Skriv en If then statement der sammenligner B = C og E = A hvis B=C skal den blive TRUE. 
console.log('Opgave 6: Skriv en If then statement der sammenligner B = C og E = A hvis B=C skal den blive TRUE: ');

if (B >= C || E <= A){
    console.log('statement true! (B >= C || E <= A)');
} else{
    console.log('statement false! (B !>= C || E !<= A)');
}