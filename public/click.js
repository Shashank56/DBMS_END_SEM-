for(let j=0;j<list.length;j++)
{
    if(list[j][1])
    {
        document.getElementById('form'+(j+1)).classList.toggle('active');
        document.getElementById(list[j][0]).classList.toggle('active');
    }
}
for(let i=0;i<list.length;i++)
    {
        document.getElementById(list[i][0]).addEventListener('click',function(){
            for(let j=0;j<list.length;j++)
            {
                if(list[j][1])
                {
                    document.getElementById('form'+(j+1)).classList.toggle('active');
                    document.getElementById(list[j][0]).classList.toggle('active');
                }
                list[j][1]=0;
            }
            list[i][1] = 1;
            for(let j=0;j<list.length;j++)
            {
                if(list[j][1])
                {
                    document.getElementById('form'+(j+1)).classList.toggle('active');
                    document.getElementById(list[j][0]).classList.toggle('active');
                }
            }
        })   
    }