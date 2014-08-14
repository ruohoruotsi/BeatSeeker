mgraphics.init();
mgraphics.relative_coords = 0;
mgraphics.autofill = 0;
var array_size = 200;
var width = 1;
var maximum = 1.0;
var height = 60;
var my_array = new Array(array_size);

for (i = 0; i < array_size; i++)
{
	my_array[i] = 0;//my_array[i+1];
}


function bang()
{
//	post("hello");
	//paint();
	mgraphics.redraw();
}


function msg_float(val)
{
	//post ("val is ", val, "\n");
	if (val > maximum)
		maximum = val;
	val /= maximum;

	for (i = 0; i < array_size-1; i++)
	{
	my_array[i] = my_array[i+1];
//	post(" ", my_array[i]);
	}
	if (val > 1)
		post("val bigger ", val);
	
	my_array[array_size-1] = height*(1.0-val);
//	post(" ", my_array[array_size-1]," \n");	
}

function paint()
{
	with (mgraphics){
		set_source_rgba(1.,0.,0.,1.);
		translate (0,0);//height);
		move_to(0,0);
		//curve_to(80, -80, 80, 80, 0, 0);
		move_to(0,my_array[0]);
		for (i = 1; i < array_size; i++){
			line_to(i*width, my_array[i]);
		}
		stroke();
		//curve_to(40, -40, 40, 40, 0, 0);
	//	line_to(200,300);
		
	}
}