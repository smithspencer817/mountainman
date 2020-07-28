Hiker.destroy_all
Mountain.destroy_all
Post.destroy_all

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

imgURLs = ["https://www.rei.com/dam/vagnini_091316_0507_training_exercises_for_climbing_14ers_lg.jpg", "https://www.theuiaa.org/wp-content/uploads/2018/04/climber-safety-web.jpg", "https://nyc3.digitaloceanspaces.com/aph/app/uploads/2019/02/26161133/iStock-904084674.jpg", "https://static.rootsrated.com/image/upload/s--6o6ZhPpE--/t_rr_large_natural/mukv87y2zqlzwmzjoc68.jpg", "https://2cboh18ute411coa7tppetee-wpengine.netdna-ssl.com/wp-content/uploads/2020/02/20190806_BTO_Hike_0038.jpg", "https://images.ctfassets.net/r7p9m4b1iqbp/3pxpQeSdfGC4oIg6UqOwwA/c05de59143309d94cd18025b3719640f/Barkman_fieldmag-Denali-Climb-digi-21.jpg?w=1000", "https://assets.rmiguides.com/_includes/_images/denali_west_buttress_content_1.jpg", "https://www.tusker.com/Geografica/wp-content/uploads/2018/02/Kilimanjaro-climb-cost-worth-price.jpg", "https://www.rei.com/adventures/assets/adventures/images/trip/core/pacific/nzs_hero", "https://i1.wp.com/exploringkiwis.com/wp-content/uploads/2018/07/new-special-interest-tourism-research-released-on-walking-and-hiking.CgpmeA.jpg?fit=1020%2C680&ssl=1", "https://backpackingman.com/wp-content/uploads/2016/02/TRAMPING-NEW-ZEALAND.jpg", "https://www.alpenwild.com/userfiles/files/16SWI-1090.jpg", "https://cdn.kimkim.com/files/a/content_articles/featured_photos/a9494aa27a720a0d46561fadbcccd1d3bf588cd7/big-7d16f2d476e9ba39cad3455d98561512.jpg", "https://www.contiki.com/six-two/wp-content/uploads/2019/04/patagonia-header-image-e1582803796774.jpg", "https://static2.yadkinvalleync.com/images/Pilot_Mountain_Rock_Climbing_in_Su.f31f05a2.fill-640x360.jpg", "https://cdn.thegentlemansjournal.com/wp-content/uploads/2017/05/Kala-Patthar-By-Henry-Chen-664x442-c-center.jpg", "https://cdn.thegentlemansjournal.com/wp-content/uploads/2017/05/Mount-Fitz-Roy-by-Rodrigo-Wen-664x442-c-center.jpg", "https://cdn.thegentlemansjournal.com/wp-content/uploads/2017/05/Mount-Stetind-by-Johnny-Haglund-664x442-c-center.jpg", "https://cdn.thegentlemansjournal.com/wp-content/uploads/2017/05/Matterhorn-France-by-FABRICE-COFFRINI-AFP-GETTY-IMAGES-900x600-c-center.jpg", "https://www.climbstation.com/uploads/5/1/3/4/5134929/2415193_orig.jpg", "https://specials-images.forbesimg.com/imageserve/1135112953/960x0.jpg?fit=scale", "https://rightasrain.uwmedicine.org/sites/chew/files/styles/large/public/images/2019/womanhiking.jpg?h=a61a7e7e&itok=9-b287Wi", "https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/topic_centers/2019-8/couple-hiking-mountain-climbing-1296x728-header.jpg?w=1155", "https://uconn-today-universityofconn.netdna-ssl.com/wp-content/uploads/2019/09/GettyImages-1003869858.jpg", "https://d2rdhxfof4qmbb.cloudfront.net/wp-content/uploads/20190410192511/Mount-Ararat-from-Artashat.jpg", "https://d2rdhxfof4qmbb.cloudfront.net/wp-content/uploads/20190410185650/Koshtan-Tau.jpg", "https://i.imgur.com/P9IVqkS.jpg", "https://cdn.britannica.com/s:700x500/67/19367-050-885866B4/Valley-Taurus-Mountains-Turkey.jpg", "https://d2rdhxfof4qmbb.cloudfront.net/wp-content/uploads/20190410173605/Mt.-Elbrus.jpg", "https://d2rdhxfof4qmbb.cloudfront.net/wp-content/uploads/20190410180519/ushguli-village-Shkhara.jpg"]

15.times do
    Hiker.create(
        name: Faker::Name.first_name,
        age: (15..70).to_a.sample,
        skill: (1..5).to_a.sample
    ) 
end


10.times do
    Mountain.create(
        name: "Mount " + Faker::Name.last_name.capitalize,
        height: (10000..30000).to_a.sample,
        location: ["North America", "South America", "Europe", "Asia", "Africa", "Australia", "Antarctica"].sample,
        difficulty: (1..5).to_a.sample
    )
end

100.times do

    post = Post.new

    post.content = Faker::Hipster.sentence(word_count: 20)
    post.likes = (1..20).to_a.sample
    post.image = imgURLs.sample
    post.hiker = Hiker.all.sample
    post.mountain = Mountain.all.sample

    post.save
    
end