import {ButterscotchConeCart,StrawberryStickCart,ChocoCupCart,ChocoStickCart, ButterscotchStickCart,ButterscotchCupCart,StrawberryCupCart, StrawberryConeCart,ChocolateConeCart} from "../patterns/factory/abstract-factory-icecream";
import {getIcecream} from "../pages/hello-abstract-factory/prouct-provider"
describe("Icecream Abstract Factory", () => {
    test('Strawberry Ice cream with stick',()=>{
       let expectation =getIcecream('Sweety Strawberry','Stick')
        let reality = new StrawberryStickCart()
        expect(expectation).toEqual(reality.getIcecream())

    })
    test('Butterscotch Ice cream with cone',()=>{
       let expectation =getIcecream('Buttery Butterscotch','Cone')
        let reality = new ButterscotchConeCart()
        expect(expectation).toEqual(reality.getIcecream())

    })
    test('Choco Ice cream with cup',()=>{
        let expectation =getIcecream('Choco Blast','Cup')
        let reality = new ChocoCupCart()
        expect(expectation).toEqual(reality.getIcecream())
    })
    test('Choco Ice cream with stick',()=>{
        let expectation =getIcecream('Choco','Stick')
         let reality = new ChocoStickCart()
         expect(expectation).toEqual(reality.getIcecream())
 
    })
    test('Butterscotch ice cream with stick',()=>{
        let expectation =getIcecream('Butterscotch','Stick')
         let reality = new ButterscotchStickCart()
         expect(expectation).toEqual(reality.getIcecream())
 
    })
    test('Butterscotch ice cream with cup',()=>{
        let expectation =getIcecream('Butterscotch','cup')
         let reality = new ButterscotchCupCart()
         expect(expectation).toEqual(reality.getIcecream())
 
    })
    test('Strawberry ice cream with cup',()=>{
        let expectation =getIcecream('Strawberry','cup')
         let reality = new StrawberryCupCart()
         expect(expectation).toEqual(reality.getIcecream())
 
    })
    test('Strawberry ice cream with cone',()=>{
        let expectation =getIcecream('Strawberry','cone')
         let reality = new StrawberryConeCart()
         expect(expectation).toEqual(reality.getIcecream())
 
    })
    test('Chocolate ice cream with cone',()=>{
        let expectation =getIcecream('Chocolate','Cone')
         let reality = new ChocolateConeCart()
         expect(expectation).toEqual(reality.getIcecream())
 
    })

})