tailwind.config = {
    theme:{
        extend:{
            gridTemplateColumns:{
                'auto': 'repeat(auto-fit, minmax(200px, 1fr))'
            },
                fontFamily:{
                    Outfit: ["Outfit", "sans-serif"],
                    Ovo: ["Ovo", "serif"]
                },
                animation:{
                    spin_slow: 'spin 6s linear infinite'
                },
                colors:{
                    lightHover: '#118ab2',
                    darkHover: '#48cae4',
                    darkTheme: '#11001F'
                },
                boxShadow:{
                    'blue': '4px 4px 0 #bde0fe',
                    'white': '4px 4px 0 #fff',
                }
                }
        },
      darkMode: 'selector' 
}