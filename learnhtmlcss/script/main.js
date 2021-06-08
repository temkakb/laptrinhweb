function giaipt (form){
    var x,a,b;

    a=parseInt( form.a.value);
    b=parseInt(form.b.value);
    
    if (a==0)
    {
        if(b==0)
        alert("phuong trinh vo so nghiem");
        else
        alert("phuong tỉnh vo nghiem");
    }
    else
    {
        alert("phuong trinh co nghiem");
        x=-b/a;
        form.x.value=eval(x);
    }


}
