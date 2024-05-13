**

## Portfolio Project 
Install Dependencies


  

    npm i 

Build Project:- 
 

    npm run build 
Fonts:-

    

 1. Ubuntu Sans by GoogleFonts
 2. Poetsen One by GoogleFonts
 
 ##  Additional Information 
 
 if you want to add custom fonts then you need to add the link to the font in the html **head** Tag Then add the following lines in the **tailwind.config.js**
 

    theme:  {
    
	    extend:  {
    
		    fontFamily:  {
    
			    //custom fonts
    
			    poetsen: ["Poetsen One",  "sans-serif"],
    
			    ubuntu: ["Ubuntu Sans ",  "sans-serif"],
    
		    },
    
	    },
    
    },
