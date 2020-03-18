CREATE DATABASE lunchdb;

CREATE TABLE lunchs(
    id SERIAL PRIMARY KEY,
    plate_name VARCHAR(255),
    plate_description TEXT,
    restaurant_name VARCHAR(255),
    category VARCHAR(255),
    price float,
    plate_image TEXT
)

INSERT INTO lunchs (plate_name, plate_description, restaurant_name, category, price, plate_image) VALUES('Pork and Asparagus Stir-Fry', 'A Sichuan-inspired stir-fry of blistered yet snappy asparagus and crispy pork in an aromatic sauce from Smitten Kitchen’s Deb Perelman. We jump on asparagus the second we see it at the market this time of year, but green beans, snap peas, or any other crisp green spring vegetable would also be great here. ','Bon appétit', 'pork', 189, 'https://assets.bonappetit.com/photos/5e5e82147cab300008eef67b/16:9/w_2560,c_limit/Picky-Eaters-Pork-Asparagus-Stir-Fry-Recipe.jpg');
INSERT INTO lunchs (plate_name, plate_description, restaurant_name, category, price, plate_image) VALUES('Ramen Noodles With Spring Onions and Garlic Crisp', 'A slight twist on scallion noodles: the same savory, lip-smacking flavor but instead of wilting the scallions in the sauce, we crisp them up in the pan, creating a crunchy, spicy, garlicky topping.', 'Bon appétit', 'noodles', 240, 'https://assets.bonappetit.com/photos/5e5d76665a099a000880933c/16:9/w_2560,c_limit/Alliums-Ramen-Noodles-With-Spring-Onions-Garlic-Crisp.jpg');
INSERT INTO lunchs (plate_name, plate_description, restaurant_name, category, price, plate_image) VALUES('Green-Garlic-Rubbed Buttery Roast Chicken', 'Roasting a whole chicken quickly at high heat is optimal for the crispiest skin but risks overcooking the meat. This method of going low and slow is much gentler on the meat, keeping it juicy yet shreddable underneath skin that crackles. The green garlic has a mild, fresh flavor (much less bite than regular garlic, but you can use that here too). As the chicken cooks, the green garlic dries out and turns into a crispy crumb topping.', 'Chicken Supreme', 'chicken', 340, 'https://assets.bonappetit.com/photos/5e5d76655a099a000880933a/16:9/w_2560,c_limit/Alliums-Garlic-Rubbed-Buttery-Roast-Chicken.jpg');
INSERT INTO lunchs (plate_name, plate_description, restaurant_name, category, price, plate_image) VALUES('Dried Tomato Pie', 'Dried Tomato pie Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse finibus leo at ex finibus mollis. Aenean porttitor et quam eget faucibus. Praesent efficitur quis lacus eu ullamcorper. ', 'Tomatina', 'healthy', 320, 'https://assets.bonappetit.com/photos/597f6564e85ce178131a6475/16:9/w_1200,c_limit/0817-murray-mancini-dried-tomato-pie.jpg');
INSERT INTO lunchs (plate_name, plate_description, restaurant_name, category, price, plate_image) VALUES('Fusilli With Battuto di Erbe', 'Fusilli is an ideal magnet for the fine texture of herby spring batutto (which just means a chopped up sauce). Suspendisse finibus leo at ex finibus mollis. Aenean porttitor et quam eget faucibus. Praesent efficitur quis lacus eu ullamcorper. ', 'Tomatina', 'pasta', 320, 'https://assets.bonappetit.com/photos/5e6bb3ba06b34800084b97d8/16:9/w_2560,c_limit/0420-Pasta-Fusilli-Battuto-di-Erbe.jpg');
INSERT INTO lunchs (plate_name, plate_description, restaurant_name, category, price, plate_image) VALUES('Healthyish Fried Chicken', 'Our version swaps chickpea flour and sesame seeds for wheat flour, and, once fried, we dust it with lime zest, coconut, and crushed red pepper flakes. Be sure to fry the chicken to a deep brown to create superior crunch and coax out the nutty flavors of the chickpea flour and sesame seeds. And don’t skip the honey: It will balance out all the bold flavors. ', 'Supreme', 'healthy', 310, 'https://assets.bonappetit.com/photos/5e5eb7152d722c00081875a6/16:9/w_2560,c_limit/HLY-Fried-Chicken-16x9.jpg');
INSERT INTO lunchs (plate_name, plate_description, restaurant_name, category, price, plate_image) VALUES('Pantry Pasta With Vegan Cream Sauce', 'Many vegan cream sauces rely on blended nuts or steamed cauliflower, but this sauce is made of beans and pasta water alone—no soaking or blending necessary. It’s important that the beans are adequately hydrated: Once you start mashing, make sure there’s plenty of pasta cooking liquid in the pot and don’t let it evaporate.', 'Supreme', 'healthy', 310, 'https://assets.bonappetit.com/photos/5e4c58a6cf2f580008eba058/16:9/w_2560,c_limit/HLY_Vegan%20Alfredo_16x9.jpg');
INSERT INTO lunchs (plate_name, plate_description, restaurant_name, category, price, plate_image) VALUES('Tangy Vinegar Chicken', 'White wine vinegar, orange juice, and barberries combine in this fragrant, sweet-and-sour roast chicken. Dried barberries are incredibly tart, more so than any other dried fruit you’ll encounter. Lorem Ipsum dolor sit annet', 'Bon appétit', 'chicken', 270, 'https://assets.bonappetit.com/photos/5e399f25f5f773000999963e/16:9/w_2560,c_limit/0320-Acid-Tangy-Vinegar-Chicken.jpg');
INSERT INTO lunchs (plate_name, plate_description, restaurant_name, category, price, plate_image) VALUES('Salt and Pepper Fish', 'the fish is pan-seared in hot oil, but still gets plenty of texture and flavor from ginger, caramelized scallions, and lots of freshly ground black pepper. steamed rice, or this gussied up version. It is amazing what a little bit of butter, a dash of vinegar, and some salt and sugar can do.Lorem Ipsum dolor sit annet', 'Bon appétit', 'fish', 290, 'https://assets.bonappetit.com/photos/5e3c64ce424a090009173528/16:9/w_2560,c_limit/HLY_Salt+Pepper%20Fish_16x9.jpg');
