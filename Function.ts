function sayHello(name:any = "None", lastname:any = "Nome"): string
{
    return name + " " + lastname;
}

function sum(a:number,b:number, ...rest: number[]): number
{
    return a + b + rest.reduce((a,b) => a + b, 0);
}

function add({x, y}:{x: number, y: number}): number
{
    return x + y;
}
console.log("Hello "+ sum(1,2,3,4,5));
