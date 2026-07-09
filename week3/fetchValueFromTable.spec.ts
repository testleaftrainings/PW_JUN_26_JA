import test from '@playwright/test'
test('print the data in the table',async({page})=>{

    await page.goto('https://leafground.com/table.xhtml')
    const totatRowCount =await page.locator(`(//div[@class='ui-datatable-scrollable-body']//tbody//tr)`).count()
    console.log(`total row count in the table is ${totatRowCount}`)
     const totatColumnCount =await page.locator(`(//div[@class='ui-datatable-scrollable-body']//tbody//tr[1]/td)`).count()
     console.log(`total row count in the table is ${totatColumnCount}`)
    //  To print all the values in the tables 
    //  for(let i =1; i<=totatRowCount;i++){// row
    //     for(let j=1;j<=totatColumnCount;j++){
    //    let fetchData = await page.locator(` //div[@class='ui-datatable-scrollable-body']//tbody//tr[${i}]/td[${j}]`).innerText()
    //    console.log(fetchData)
    //     }
    //  }

    // To Print particular column in all the rows
    for(let i =1; i<=totatRowCount;i++){// row
        let fetchData = await page.locator(` //div[@class='ui-datatable-scrollable-body']//tbody//tr[${i}]/td[1]`).innerText()
        console.log(fetchData)
    }
})