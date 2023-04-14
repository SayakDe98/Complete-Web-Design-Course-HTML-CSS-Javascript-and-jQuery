//Question 1
//Fee
var shipments = 
{
    'standard': {
        'leadTime': 7,
        'fee': 2
    },
    'express': {
        'leadTime': 3,
        'fee': 4.5
    }
};

//Order Date:

function pad(number)
{
    return number < 10 ? "0" + number : number 
}

currentDate = new Date()

var date = pad(currentDate.getDate() + 1)
var month = pad(currentDate.getMonth() + 1)
var year = currentDate.getFullYear()
document.getElementById("order_date").innerHTML = year + "-" + month + "-" + date

document.getElementById("shipments").onclick = function()
{
    selectedField = document.getElementById("shipments")
    selectedOption = selectedField.options.selectedIndex
    selectedValue = selectedField.options[selectedOption]
    if(selectedValue.value == "standard")
    {
        var dd = currentDate.getTime() + 7 * 86400000
        
        deliveryDate = new Date(dd)
        
        var date_delivery = deliveryDate.getDate()
        var month_delivery = deliveryDate.getMonth()
        var year_delivery = deliveryDate.getFullYear()
        
        document.getElementById("delivery_date").innerHTML = year_delivery + "-" + pad(month_delivery + 1) + "-" + pad(date_delivery + 1) 

        //Fee
        document.getElementById("delivery_fee").innerHTML = (shipments['standard'].fee).toFixed(2)
    }    
    if(selectedValue.value == "express")
    {
        var dd = currentDate.getTime() + 3 * 86400000
        
        deliveryDate = new Date(dd)
        
        var date_delivery = deliveryDate.getDate()
        var month_delivery = deliveryDate.getMonth()
        var year_delivery = deliveryDate.getFullYear()
        
        document.getElementById("delivery_date").innerHTML = year_delivery + "-" + pad(month_delivery + 1) + "-" + pad(date_delivery + 1) 

         //Fee
         document.getElementById("delivery_fee").innerHTML = (shipments['express'].fee).toFixed(2)
    }    
}

//Question 2
var phones = 
{
    'iphone_se_red': {
        'name': 'iPhone SE 64GB Red',
        'price': '450',
        'currency': 'US$',
        'imageUrl': "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxESExMRExERERERExYWEBEQFhAWEBERFhYYFxgWFxYZHioiGRsoHBYWIzMjJystMDAwGCE2OzYuOiovMC0BCwsLDw4PGxERGS8eISctLS8vLy8vLy8vLy8vLy0vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL//AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABQYDBAcCAQj/xABMEAABAwECBwkKDQMDBQAAAAABAAIDEQQhBQYSMUFRcQcTNGFzgZGysxciMjNScoKhscEUIyRCU2KSk6PR0tPwFVThY6LiQ0SDw/H/xAAaAQEAAwEBAQAAAAAAAAAAAAAAAgMEBQEG/8QAOREAAgECAgcECAYBBQAAAAAAAAECAxEEMRIhMjNhcbEFE1GRIjRBcoGh4fBTYqLB0dJSFCNCwvH/2gAMAwEAAhEDEQA/AO4oiIAiIgCIta22lsUb5XGjY2uc48TRU+xAamGcNwWVuVK/Jr4DGgukefqtF59ip9r3Tmg/F2ao/wBaUMd0Ma/2qoYcwi+RxnlPx01SK5oYgaNY3V/9Ocqs2nCccbsl7wyvzaOc6msgZudUOo29R3qXZ1CnDSrv52XI6d3UX/2sf30v7K8u3UnD/tY/vpP2lz2KZrgHNc17Tmc2tNhBvB4lrW+05DHyaGi7Nn18dKgbXBRUpN2L6mEwcKbqOOq3i/5Oi2ndaMdC+zQsBzF9oc2uwb1U9C1Du2xfRQc0sx/9S4DaZ3SOL3ElzjeTesCv0X4nCnWpt+jSSXOT/wCyP0L3bofoofvZv2k7t0P0UP3s37S/PSL23Ej3sfw4/q/sfoXu3RfRQ/ezftJ3bofoofvJv2l+ekS3Ed7H8OP6v7H6F7t0X0UP3s37Sd26H6KH7yb9pfnpEtxHex/Dj+r+x+he7fF9FD97N+0ndvi+ih+9m/aX56RLcR3sf8I/q/sfpCxbs9mcaOjYPMmJPQ+No9avOA8ZLPax8U85YFXRPoJANdMxHGCQvxsrhiLhmWKQNY8tLO/jPkkZ+amcaRUHQvNa4nqdObs1o8U3b4pt6uN9R+sgvqjsBYSFogimAyctvfN8l4uc3mcCFIqRS002mEREPAiIgCIiAIiIAiIgCr+PkuTYZzrDGnY6RrT6iVYFXcfuAzbYu2jUZbLLcOr1Yc11OR4Y8YwHM1kQOygJXN7Y4NnmEoOXvl+zKB6MnNzLpGGR8Z6DOoFDW3B7JaF7GvIuBcO+pqqCCVVCpoSvY+ixuDliacdF2aIXFUupKb8irANWXfWnHT2hbeMb/kslM4cwH0nOr1ApSOEMaGigDfBDQA0bAFGYyD5I/wA6LrSJGV53MuKoOhgVTbvrXUoKLcbg6Y5o3HmXr+lz/RP6FddHG7mp/i/Jmis8coAcMkHKFxOduxbP9GtP0MnQvD8FzjPE8bQmkvE9dCqs4Pyf8Gqx9NAO1e9++o3oWX4BL5Dli3l2aiJp5EHCSzTQM31G9CwrLvJ1L02zuJoGkkmgA0le3PLPwMCKT/oNr/t5fslP6Da/7eX7JQt/09X/AAl5MjFMYqcKhGhz6HYQQsX9BtX9vJ9krfwFg+aG1WYyRvjypRk5QpWmf2oQnSqRi3KLS5M/Ru5RaMuxH6szwOdrHn1uKuipG5LwN/Lnsold1GORZid9LmERFIoCIiAIiIAiIgCIiAKu4+8Cn2xdtGrEq9j9wGbbF20ajLZZdht9D3l1ORYY8P0I+oForewz430I+oForK8z7Gnso8S5lHY1cGfTy4utIpGTMonGLgjvPi6z1OntHO7W9XfNdTBZHXAfVUhAouzHN5qkoCoTzNuHlqRINNyiMJvq4DUpatyr9qkq8qLNGJlaKRq4QlptpdtKhuNbFtmyjXRo2LWWqCtFI+WxFTvKjZ7CsuKWDMt2/OHetuZxu0nm/mZQODrG6aRsbc7jefJbpPMF0uzWVsbRG0Ua0UXtjodmYbvJ95LKPzf0z8j7XQF6ydZSugLYs9ie7MOc5l5Y7852zZgBUJhvhOD+Wd7GK6WfA1fCPRcFXcc7G2O0YOppmfXmDFGNSnpKKd2cbtSvCWGnFO+XVHTdyXgb+XPZRK7Kk7kvA3cueyiV2Vkcj57E76XMIiKRQEREAREQBERAEREAVV3SJCLG4A0ypYg7jGWDTpAVqVU3SuBnlY/aoz2WaMJv4c0crwz4z0GdQLSW7hnxnoM6gWgsrzProbK5HmQ3KNxoZk2V41Pi60ikZcy0cbeDScpD1pFZS2jndrerv4dSOiHet80LfspWpA3vG+aPYtizm9RqKzNlD2fDoSE76NJ4lWLZJSp4lO4Qko2irOEH6NZUIq8rEe0Klo/A0ZjoXmi+OzqcxWwT8IlBcKxx0L/rHQ3n9gK1nAp05VJ6Mc2WPE/BW9R768UfKLtbY9A2nP0Kxx2cu4m8azBgbnFXaBoG1btjsxcRU57hX3BZq2KjT1R1v5ffI+mjo0KajHJHmy2MaBXjOboU5ZcHmgJzaz7luWOyxxty3ZhrzErxabWKb5Jcz5kYzv1ej7VivOrrm/gcmtipVH6OR83oUrlBjBnlNKniYNO3oVDx+tcb7Rg1kY71k0lXGvfOIZnOk3K6Psckxy5iWR/NjFxI4/JHFn2Km7oD4/hGDGMye8mk71tKNqGLXh6aTujm4ma0Gr3f35l63InneJW170StLRdcTG0HqhX5UDch8RNyjezCv61wyKsXvpfDogiIpGYIiIAiIgCIiAIiIAqzuiRB1ikJ+Y+Jzdu+tHsJVmVdx94FPti7aNRlssuw2+h7y6nIcNeM9BnUC0Fv4b8Z6DOoFoLK8z7GGyuSPMuZRuMdfgbq58qLrSKQmNy0sbeDSefD7ZFOntHO7V3D+HVGvYRWJp2joKyxihWHArqxuHkurzEf4W08UoVbXjZmjDO9OL4GphGStygLa69TNpNSVAzmpKppLXcx4+V1bxZ4hjLnBoFXOIAAzkm4BdVwDg9tmiEYvePGOH0hz02ZuZVjE3BZaBaHC81bADo0Ok9w510fBthDGh7tHgg+0qvFYjQWjHNlmDpKjT76ecsl7bGOGzBjct9wzgHTtUxgayXGWS4kXA5ms1fmo2zfHy0/6cZBdqc7OB7+hbuE7WXneWZh4RGk6q6ta59OOlrZKvKcnoPN63wXh955Gaa2764UBc2tI4/KPlHiX2eaOHv5Xb5KcwF4adTRr41r2YPvZCKuNz5DmA1Di4lK2DA0cXxjzlP0vfnrxDQujSp+051aUY6sl839/MjorPaLTe4mGI/NHjHD3Kr7o2DmQzYKDG0rPLUnO66POV0kPcbmDJGs5+YLnm6lDk2nBdXVeZpSanvqUjpzZ1rirHPrTbi1kvAuW5LEBZpHfOdNQ6qNijpd6RV6VJ3JeBv5c9lErskMhit9LmERFIoCIiAIiIAiIgCIiAKu4+8Bm2xdtGrEq7j9wKfbF20ajLZZdht9D3l1OQYa8b6DOoFHrfw7430I+oFoLM8z7CGyuSPEuZaOND8qyvOt0PWkW+/Mo3GDgjvOi6z1KntHO7V9XfNdTTwE/vnN8pvrB/yVIz5udQ2C35MrDrNOkU96n52XFasQtT5FmClpUreD+pETDPsUdgnB7p5WRC7KPfO8lgvc7oUpaxQE8RUtiPYCI3SAd9O7emcUbb3nnNBzLJTajGUmQrUe9rQhzvwRcMBWBrjl5OTHGA2JupouA/nGtrC1uoMlvhOuaBrNwCzWt7YY2xjQL+MqKwQDNLlm9sd41F5uHvK5cm6k7s1pqbdaWyslwWRMwDeIg1t8jrhxvOc/zUtjB2Dibr7/AAnaTxL3YrLvji93gi5nvKm4ISbgKBdGhQ9rOVXxFrr2vWz7Z42sGSxor6h+ax4TttnszDPaZmxtGbK8Jx8ljReTxAKp44bosNjLobMGz2kXOefEwnjI8N3EOcjMuRYTwnPaZDLPK+aQ/OebmjU1ouaOIABboxucidRtl4xn3VppCYrCzeGZjPIGumcPqtvaz1nYqTYHvfbLO+R75JHSjKkkc573bXONStaNoG1btibS02TlVJxsimWTO/bkvA38seyiV2VJ3JuCP5c9lErsqo5GjE76XMIiKRQEREAREQBERAEREAVdx+4FPti7aNWJV3H3gU+2Lto1GWyy7Db6HvLqcew74z0I+oFoLew4fjPQj6gUfVZXmfYQXorkhJmUdjBwR3nRdZ635Dco/GDgbvOi60inT2jn9q+rvmupBNNKEZxeOZWp78oBwzOAPSFVQrBg12VC0+QS0+0eohbqqvEq7Pn6Uo+Kv5GrhDxbvNK6JizYRG0V8GzxNYOOUirjtqqRZYsqRjTmywT5oOUfUCr3bpt6haz50lZHbXX+xcevK1PR8X0OhKF2/F+j+76EVhq3FzjerDinYPiso3ZZJrppm9g/3KpQQOleGtFXE0AXVcE2ENa1vzGADbQL3C07u/gUdp1lSpRgvtL6max2W4XUAuaFQt0HHTID4LO7vW1bLK03vfpjYdQ0nTm2ze6FjPvDPgsLqTyt794NDBCbieJxvA1XnVXh2EbVvhAb4DfB2a+fP0La/SegvifNSm5azVaSSXG8k1O1ZW3Cqxt1L0G5bg0LWlYpNqwxV785tC3GClrsg/1AtizRXtaNHuWAcMs3LU6AFGXgTcbU3I7xuS8Dfyx7KJXZUncl4G/lj2USuypjkW4nfS5hERSKAiIgCIiAIiIAiIgCruPvAZtsfbMViVdx94DNtj7ZijLZZdht9D3l1RxzD3jvQj6gUfVb+H/G+hH1Ao5ZXmfXw2VyR8eblpYe4E7zoutItt+ZamH+Bnz4utIp09o5/avq75rqQIU5iu+rnxH57at85v8Ag+pQIW1g60b3Kx+hrhXzTcfUSumYcPU7upGXH5FvwHYi60tYRooecgewlSWHbTvkziMwuGwLYwUwNdLL5MZoeM1AUbZ4XSPAHhOcAFw8XG1bRXs/c+hStJt5L/1lrxIwVWsrhnubxN0nac3SrHjVh+OwWd0pAcRRkMdb5ZneC3YLyTqBK2MGQiKNrWjMA1nMLz/Na49j3h0Wu1kB3yax5TWH5r5B4yTjvFBxN41sjFUqdj5PF13XquRXsN257sp0j8ua0uL53/V07BQZIGocShQ7SvNptJkc55uyzRo1MGYfzSSvIKuoxsrsxyZkDlIYIizvPMo0X3KesjclgCvBK4OjADpDoH+fyUTG6trsvLVO0qatXeRBuk3n2qCso+VWXjmVfsbL8StGKh4L5s75uS8Dfyx7KJXZUncl4G/lj2USuyqjkMTvpcwiIpFAREQBERAEREAREQBV3H3gM22PtmKxKu4+8Bm2x9sxRlssuw++h7y6o41jD44+ZH1Ao6qkMYPG+hH1Ao5ZmtZ9fDZR8fmWnh3gZ86LrPW05a2HuBnzoetIpU9o5/anq75rqV5q9LyCvS6RyzoGL9ry7GTXvu9jdtbf7KHnU9ihYsqTLp4Io3znf4r0qq4rR0s7R9JK955g1g6p6V0bFyLeoi/Sc3nOub6gTzLk208VJ+D6HXxFZwwKbzlq+/gjV3RMP/BrM4RupJL8TARnbUHLkGxtedzVxK3u3uJsQuMl7uJg0dNOgq2Y+YS+EWsRg/FwDJGrKrVx6adCo9rmy5Xv0NubsFw/nGtEnpS5HzbVkYHZ9lyyArCFkC1RVlYqNqytqVP2BmU5jdFVB2QKzYFZ3xd5LfWbvzXr1Itox0po2cKuqaagoeIfKrJy35KTtZrU8YCjY+FWTlvcF41aJLEu8mzu+5NwR/LnsoldlSdyXgb+WPZRK7KiOR7id9LmERFIoCIiAIiIAiIgCIiAKvY/cBm2xdtGrCq7j9wGbbF20ajLZZdht9D3l1OM4xeN9CPqBRqkcYvGnk4+oFGrM8z6+Gyjy9auHuBnzous9bLlr4d4GfOh60inT2jn9q+rvmupXQvQXhpXoFb0cm50LFmKsFnGsHpc8/mrnhm2iGGguyIy/wBJ3esHQCfSVbxQhrHZR/ptPqr7StbHvCNYnkf9WQ5PmCjGD3rnYfOc+LN2PldUqfsUbv8Af5JlFfN3ssxzuqAoMXN23qTwqcmNkY00r/Ob1qLlKtoq7ucWo28z41ZGZ1iCzQC9akVkjYxerNgq5jjx0/nSq3ZVY7GaR7ar2Rpwy9K/gjzObhxklR8fCrJy35LetBzD6vvK0ox8psnLH3JPIhWd9Lgju+5LwN/LHsoldlSdyXgb+WPZRK7LPHIlid9LmERFIoCIiAIiIAiIgCIiAKu4/cBm2xdtGrEq7j9wGfbF20ajLZZdh99D3l1OM4xeOPmR9QKMqpHGPxx5OPqBRazSzPr4bKDytfDvAz50PWkWd6wYc4GfOh60inT2jn9q+rvmupWar7VYwUqtpxr6jrOLsuRZWP0iBobtc1oCruOT6yww+Q0V5h+bvUpnAV9mszfKEddgYCq1hqfLtMj9Dbh6z7KdCwQ1Unxb6mnGu9R8IxXyRW8LSVkpoaP57FoOKySOynPdx0WBaqcdGKOVLWz6tqyBatVtx3M85Wo8N+yXqxxeLH80qu4P0Kxx+A3+aV680a8OtUnwNe0m/o9i1hwqx8r+S2JLzzrC8fK7JyvuC9nkVS105vid03JeBv5Y9lErsqTuS8Dfy57KJXZZo5EsTvpcwiIpFAREQBERAEREAREQBV3H7gM+2Lto1YlXcfeAzbY+2jUZbLLsPvoe8upxbGPxx5OPqBRak8Y/HHk4+oFF1WaWbProbKPjlhw5wM+dD1nrM9YsOcDPnQ9aRSp7Rg7U9XfNdSqApVeAV6W04h1DF+Slnhd5FnyufJDfcVS7dNRssmsmnTQexWLA1pybDl6oy37JcVUsJGkbGeURXYL/AG0WRx2Ynteelr+9SI/e8lgGnTtWoCtuV1QtMLWzGe2rZldeBoCwRZ17hvcvUCXweLwrG0d4xV3Bt7lZpBQDiafYvf8AkjdQX+2zWgbUjateXhdl5Y+5bdluIUVZ7Rl2yzcUvtUpZMpqK1BcW/kvqd83JeBv5c9lErsqTuS8Dfy57KJXZZY5DE76XMIiKRQEREAREQBERAEREAVdx+4DNti7aNWJV3H5hNhnA1RnmErCfUFGWyy3D72HNdUcVxk8ceTj6gUUpXGUfGg64oj/ALAopZXmz6+Gyj47MsWHT8iO2HrSLI9YMNj5G6+tTGdlHP8AzCspbRg7U9XfNdSm7+eJN/PEsCLTc+b0mSzMPTiLeAW72K3ZIrfxrUntr30LqGgoFqIvLe0OTebM5nPEvsTXONA2pObR7V4hiLiaAmgLjTyWipKxkr254ZnFzTQtodINQUbORmAWWzxmRrwT4the2vEWgivPXmWmvLg3oMJSM8GnOKrbfjJaDpZ9kKGRe3ZJTksmSww9PWtW/ZCy4tTF1rs9fpQoRS+Kp+VQHVIDzAEpdnk5Nxs3kfpbcl4G/lj2USuypO5LEW2J1b8qdxH2Ix7QVdlCORdid9LmERFIoCIiAIiIAiIgCIiALUwnY2zRSQu8GVjmE6soUqttECdtaPz9jFYnjvXik1mqyZunJF4eOKhrsIKr6/QOMWK8Fro52VHM0UZNHTLp5LgbnN4jruoufWzcytQd3m9Pb5WWYj9nvh61nlTl7D6PD9pUZR9N6L+XwOfFeJY98hkh00JaNbTQmg1ggHpV97mVs8iP7/8A4Lw/cvtucMjBGY7/AP8ABeKMk72J18RhqsHBzWvn/BwqRhBIOcLwu2WzcmtcprJBZ6+WyctedveUPQtU7iNo1Af+Zn6FepcGcGWHSeqpF+f8HHUXYu4haNX4zP0J3ELRq/GZ+hNLg/I87j88fP6HJrDad7eH0ygKhzTmcxwLXDnBK9WqFoNWODmHNWgeBqcNey5dW7iFo1fjM/QvvcRtGr8dn7aaXAdz+ePm/wCDlUcrWxuaL3yUDjoawEOoNZJA6FpLsPcRtGr8aP8AQvvcQtGr8Zn6E0uDHcfnj5/Q46i7F3ELRq/GZ+hO4haNX4zP0JpcH5DuPzx8/ocdVkxPsLnyggE/NAbnLnd7QcZzDjPEui2PcTlyhlhpbrMuV/tAbXpXTcVMR7NYqEDLkHguIDWsqKHIaCaHjJJ40u3kgoQg7yknwXt5vJLzZK4sYNNms0UJpltFZKZt8cS51OKppzKYXwL6pJWKZScm5PNhERDwIiIAiIgCIiAIiIAiIgAXwoi8CPqIi9B8KIi8AREQBF9RED4iIvQfV8X1FEHxERegBfURegIiIAiIgCIiA//Z"
    },
    'iphone_11_black': {
        'name': 'iPhone 11 128GB Black',
        'price': '869',
        'currency': 'EUR',
        'imageUrl': "https://assets.swappie.com/iphon11musta1-300x300.jpg"
    },
    'iphone_8_plus_silver': {
        'name': 'iPhone 8 Plus 64GB Silver',
        'price': '519',
        'currency': 'US$',
        'imageUrl': "https://www.mhr.pt/196170/apple-iphone-8-plus-64gb-silver.jpg"
    }
};

var radioItems = document.getElementsByName("product")

for(var a = 0 ; a < radioItems.length ; a++)
{
    radioItems[a].onchange = function()
    {
        for(var b = 0 ; b < radioItems.length ; b++)
        {
            if(radioItems[b].checked)
            {
                var selectedRadio = radioItems[b].value
                // console.log(selectedRadio)
                //phone_image
                document.getElementById("phone_image").innerHTML = phones[selectedRadio].imageUrl
                //phone_name
                document.getElementById("phone_name").innerHTML = phones[selectedRadio].name
                //phone_price
                document.getElementById("phone_price").innerHTML = phones[selectedRadio].currency + " " + parseFloat(phones[selectedRadio].price).toFixed(2)
            }
        }
    }
}

//3

// stopwatch
//start_stop
//reset

var isRunning = false
,startTime
,currentTime
,elapsedTime = 0
,clockInterval
,hours
,minutes
,seconds
,remainder

function pad_zeroes_to_beginning(number)
{
    if(number < 10)
    {
        return "0" + number.toString()
    }
    
    else
    {
        return number.toString()
    }
}
document.getElementById("start_stop").onclick = function()
{
    if(!isRunning)
    {
        //start the clock
        isRunning = true
        if(elapsedTime == 0)
            startTime = new Date().getTime()
        else
            startTime = new Date().getTime() - elapsedTime
            
        clockInterval = window.setInterval(
            function()
        {
            currentTime = new Date().getTime()
            
            elapsedTime = currentTime - startTime

            // hours = Math.floor(elapsedTime / 3600000)
            // remainder = elapsedTime - (hours * 3600000)

            // minutes = Math.floor(elapsedTime / 60000)
            // remainder = elapsedTime - (minutes * 60000)

            // seconds = Math.floor(elapsedTime / 1000)    
            // remainder = elapsedTime - (seconds * 1000)

            hours = Math.floor((elapsedTime / 3600000)%24)
            remainder = elapsedTime - ( Math.floor(elapsedTime / 3600000)* 3600000)

            minutes = Math.floor((elapsedTime / 60000)%60)
            remainder = elapsedTime - (Math.floor(elapsedTime / 60000) * 60000)

            // seconds = Math.floor((elapsedTime / 1000)%60)    
            // remainder = elapsedTime - (Math.floor(elapsedTime / 1000) * 1000)
            seconds = Math.floor((elapsedTime / 1000)%60)    
            remainder = elapsedTime - (Math.floor(elapsedTime / 1000) * 1000)
            
            formattedTime = pad_zeroes_to_beginning(hours) + ":" + pad_zeroes_to_beginning(minutes) + ":" + pad_zeroes_to_beginning(seconds) + ":" +remainder.toString()
            
            document.getElementById("stopwatch").innerHTML = formattedTime
        },10);
    }
    else
    {
        //stop the clock
        window.clearInterval(clockInterval)

        isRunning = false
    }
}

document.getElementById("reset").onclick = function()
{
    startTime = new Date().getTime()

    if(!isRunning)
    {
        elapsedTime = 0
        document.getElementById("stopwatch").innerHTML = "00:00:00 000"
    }
}

// 1 second	= 1000 ms
// 1 minute	60000 ms
// 1 hour	3600000 ms
// 1 day	86400000 ms
// 1 year (365 days)	31536000000 ms