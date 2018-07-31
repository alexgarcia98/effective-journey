/**
 * Returns a handler which will get the image description and verbalize it.
 */

//ARE YOU FEELING IT NOW AARON??

var input = '{"landmarkAnnotations":[{"mid":"/m/02j81","description":"Eiffel Tower","score":0.50833684,"boundingPoly":{"vertices":[{"x":2025,"y":3990},{"x":2676,"y":3990},{"x":2676,"y":5202},{"x":2025,"y":5202}]},"locations":[{"latLng":{"latitude":48.858461,"longitude":2.294351}}]}],"labelAnnotations":[{"mid":"/m/01bqvp","description":"sky","score":0.96703327,"topicality":0.96703327},{"mid":"/m/05_5t0l","description":"landmark","score":0.96277267,"topicality":0.96277267},{"mid":"/m/01fdzj","description":"tower","score":0.94190913,"topicality":0.94190913},{"mid":"/m/02q7ylj","description":"daytime","score":0.87061346,"topicality":0.87061346},{"mid":"/m/0j_s4","description":"metropolitan area","score":0.8677768,"topicality":0.8677768},{"mid":"/m/0csby","description":"cloud","score":0.86129504,"topicality":0.86129504},{"mid":"/m/0pgl9","description":"tourist attraction","score":0.8458182,"topicality":0.8458182},{"mid":"/m/034z7h","description":"cityscape","score":0.8172866,"topicality":0.8172866},{"mid":"/m/056mk","description":"metropolis","score":0.7656643,"topicality":0.7656643},{"mid":"/m/01n32","description":"city","score":0.73686653,"topicality":0.73686653},{"mid":"/m/01c6yl","description":"spire","score":0.67637503,"topicality":0.67637503},{"mid":"/m/0204fg","description":"skyline","score":0.6458009,"topicality":0.6458009},{"mid":"/m/07j7r","description":"tree","score":0.617002,"topicality":0.617002},{"mid":"/m/079cl","description":"skyscraper","score":0.58382237,"topicality":0.58382237},{"mid":"/g/11k2xz7mr","description":"meteorological phenomenon","score":0.5573173,"topicality":0.5573173},{"mid":"/m/0d1n2","description":"horizon","score":0.5295986,"topicality":0.5295986},{"mid":"/m/02ljgl","description":"monument","score":0.52691215,"topicality":0.52691215},{"mid":"/m/0cgh4","description":"building","score":0.51557815,"topicality":0.51557815},{"mid":"/m/07bxq","description":"tourism","score":0.5093651,"topicality":0.5093651}],"textAnnotations":[{"locale":"nl","description":"HET\nALLE\n23 SARA\nNAV\nJES DE DOG\n","boundingPoly":{"vertices":[{"x":1903,"y":5163},{"x":4008,"y":5163},{"x":4008,"y":6326},{"x":1903,"y":6326}]}},{"description":"HET","boundingPoly":{"vertices":[{"x":2351,"y":5181},{"x":2313,"y":5181},{"x":2313,"y":5164},{"x":2351,"y":5164}]}},{"description":"ALLE","boundingPoly":{"vertices":[{"x":2465,"y":5181},{"x":2395,"y":5181},{"x":2395,"y":5164},{"x":2465,"y":5164}]}},{"description":"23","boundingPoly":{"vertices":[{"x":1997,"y":5414},{"x":2020,"y":5408},{"x":2029,"y":5442},{"x":2006,"y":5448}]}},{"description":"SARA","boundingPoly":{"vertices":[{"x":2020,"y":5407},{"x":2128,"y":5379},{"x":2137,"y":5414},{"x":2029,"y":5442}]}},{"description":"NAV","boundingPoly":{"vertices":[{"x":1903,"y":5480},{"x":1949,"y":5446},{"x":1969,"y":5474},{"x":1923,"y":5507}]}},{"description":"JES","boundingPoly":{"vertices":[{"x":3943,"y":6311},{"x":3965,"y":6311},{"x":3965,"y":6326},{"x":3943,"y":6326}]}},{"description":"DE","boundingPoly":{"vertices":[{"x":3969,"y":6311},{"x":3980,"y":6311},{"x":3980,"y":6326},{"x":3969,"y":6326}]}},{"description":"DOG","boundingPoly":{"vertices":[{"x":3986,"y":6311},{"x":4008,"y":6311},{"x":4008,"y":6326},{"x":3986,"y":6326}]}}],"safeSearchAnnotation":{"adult":"VERY_UNLIKELY","spoof":"VERY_UNLIKELY","medical":"VERY_UNLIKELY","violence":"VERY_UNLIKELY","racy":"VERY_UNLIKELY"},"imagePropertiesAnnotation":{"dominantColors":{"colors":[{"color":{"red":105,"green":172,"blue":200},"score":0.3748512,"pixelFraction":0.19593333},{"color":{"red":209,"green":227,"blue":233},"score":0.110643096,"pixelFraction":0.24373333},{"color":{"red":41,"green":139,"blue":174},"score":0.06091047,"pixelFraction":0.07953333},{"color":{"red":167,"green":149,"blue":128},"score":0.008074991,"pixelFraction":0.019},{"color":{"red":140,"green":191,"blue":213},"score":0.2370001,"pixelFraction":0.0672},{"color":{"red":166,"green":111,"blue":36},"score":0.00095036725,"pixelFraction":0.0040666666},{"color":{"red":175,"green":208,"blue":224},"score":0.056869652,"pixelFraction":0.0636},{"color":{"red":46,"green":140,"blue":173},"score":0.055060077,"pixelFraction":0.07286666},{"color":{"red":190,"green":209,"blue":214},"score":0.023628194,"pixelFraction":0.051666666},{"color":{"red":59,"green":149,"blue":185},"score":0.020914907,"pixelFraction":0.0048}]}},"cropHintsAnnotation":{"cropHints":[{"boundingPoly":{"vertices":[{},{"x":4436},{"x":4436,"y":5523},{"y":5523}]},"confidence":0.79999995,"importanceFraction":0.96},{"boundingPoly":{"vertices":[{},{"x":4436},{"x":4436,"y":4458},{"y":4458}]},"confidence":0.79999995,"importanceFraction":0.85999995},{"boundingPoly":{"vertices":[{},{"x":4436},{"x":4436,"y":3726},{"y":3726}]},"confidence":0.79999995,"importanceFraction":0.78}]},"fullTextAnnotation":{"pages":[{"property":{"detectedLanguages":[{"languageCode":"nl","confidence":0.63},{"languageCode":"en","confidence":0.25}]},"width":4437,"height":6656,"blocks":[{"boundingBox":{"vertices":[{"x":2351,"y":5181},{"x":2313,"y":5181},{"x":2313,"y":5164},{"x":2351,"y":5164}]},"paragraphs":[{"boundingBox":{"vertices":[{"x":2351,"y":5181},{"x":2313,"y":5181},{"x":2313,"y":5164},{"x":2351,"y":5164}]},"words":[{"property":{"detectedLanguages":[{"languageCode":"nl"}]},"boundingBox":{"vertices":[{"x":2351,"y":5181},{"x":2313,"y":5181},{"x":2313,"y":5164},{"x":2351,"y":5164}]},"symbols":[{"property":{"detectedLanguages":[{"languageCode":"nl"}]},"boundingBox":{"vertices":[{"x":2350,"y":5181},{"x":2348,"y":5181},{"x":2348,"y":5164},{"x":2350,"y":5164}]},"text":"H","confidence":0.17},{"property":{"detectedLanguages":[{"languageCode":"nl"}]},"boundingBox":{"vertices":[{"x":2351,"y":5181},{"x":2340,"y":5181},{"x":2340,"y":5164},{"x":2351,"y":5164}]},"text":"E","confidence":0.08},{"property":{"detectedLanguages":[{"languageCode":"nl"}],"detectedBreak":{"type":"LINE_BREAK"}},"boundingBox":{"vertices":[{"x":2331,"y":5181},{"x":2313,"y":5181},{"x":2313,"y":5164},{"x":2331,"y":5164}]},"text":"T","confidence":0.31}],"confidence":0.18}],"confidence":0.18}],"blockType":"TEXT","confidence":0.18},{"boundingBox":{"vertices":[{"x":2465,"y":5181},{"x":2395,"y":5181},{"x":2395,"y":5164},{"x":2465,"y":5164}]},"paragraphs":[{"boundingBox":{"vertices":[{"x":2465,"y":5181},{"x":2395,"y":5181},{"x":2395,"y":5164},{"x":2465,"y":5164}]},"words":[{"property":{"detectedLanguages":[{"languageCode":"nl"}]},"boundingBox":{"vertices":[{"x":2465,"y":5181},{"x":2395,"y":5181},{"x":2395,"y":5164},{"x":2465,"y":5164}]},"symbols":[{"property":{"detectedLanguages":[{"languageCode":"nl"}]},"boundingBox":{"vertices":[{"x":2463,"y":5181},{"x":2458,"y":5181},{"x":2458,"y":5164},{"x":2463,"y":5164}]},"text":"A","confidence":0.55},{"property":{"detectedLanguages":[{"languageCode":"nl"}]},"boundingBox":{"vertices":[{"x":2465,"y":5181},{"x":2443,"y":5181},{"x":2443,"y":5164},{"x":2465,"y":5164}]},"text":"L","confidence":0.09},{"property":{"detectedLanguages":[{"languageCode":"nl"}]},"boundingBox":{"vertices":[{"x":2415,"y":5181},{"x":2395,"y":5181},{"x":2395,"y":5164},{"x":2415,"y":5164}]},"text":"L","confidence":0.05},{"property":{"detectedLanguages":[{"languageCode":"nl"}],"detectedBreak":{"type":"LINE_BREAK"}},"boundingBox":{"vertices":[{"x":2403,"y":5181},{"x":2401,"y":5181},{"x":2401,"y":5164},{"x":2403,"y":5164}]},"text":"E","confidence":0.13}],"confidence":0.2}],"confidence":0.2}],"blockType":"TEXT","confidence":0.2},{"boundingBox":{"vertices":[{"x":1997,"y":5413},{"x":2129,"y":5379},{"x":2138,"y":5414},{"x":2006,"y":5448}]},"paragraphs":[{"boundingBox":{"vertices":[{"x":1997,"y":5413},{"x":2129,"y":5379},{"x":2138,"y":5414},{"x":2006,"y":5448}]},"words":[{"property":{"detectedLanguages":[{"languageCode":"en"}]},"boundingBox":{"vertices":[{"x":1997,"y":5414},{"x":2020,"y":5408},{"x":2029,"y":5442},{"x":2006,"y":5448}]},"symbols":[{"property":{"detectedLanguages":[{"languageCode":"en"}]},"boundingBox":{"vertices":[{"x":1997,"y":5414},{"x":2009,"y":5411},{"x":2017,"y":5445},{"x":2006,"y":5448}]},"text":"2","confidence":0.14},{"property":{"detectedLanguages":[{"languageCode":"en"}],"detectedBreak":{"type":"SPACE"}},"boundingBox":{"vertices":[{"x":2011,"y":5410},{"x":2020,"y":5408},{"x":2028,"y":5442},{"x":2020,"y":5444}]},"text":"3","confidence":0.4}],"confidence":0.27},{"property":{"detectedLanguages":[{"languageCode":"en"}]},"boundingBox":{"vertices":[{"x":2020,"y":5407},{"x":2128,"y":5379},{"x":2137,"y":5414},{"x":2029,"y":5442}]},"symbols":[{"property":{"detectedLanguages":[{"languageCode":"en"}]},"boundingBox":{"vertices":[{"x":2020,"y":5408},{"x":2060,"y":5398},{"x":2068,"y":5432},{"x":2029,"y":5442}]},"text":"S","confidence":0.15},{"property":{"detectedLanguages":[{"languageCode":"en"}]},"boundingBox":{"vertices":[{"x":2075,"y":5393},{"x":2101,"y":5386},{"x":2110,"y":5420},{"x":2084,"y":5427}]},"text":"A","confidence":0.87},{"property":{"detectedLanguages":[{"languageCode":"en"}]},"boundingBox":{"vertices":[{"x":2100,"y":5387},{"x":2112,"y":5384},{"x":2120,"y":5418},{"x":2109,"y":5421}]},"text":"R","confidence":0.51},{"property":{"detectedLanguages":[{"languageCode":"en"}],"detectedBreak":{"type":"LINE_BREAK"}},"boundingBox":{"vertices":[{"x":2114,"y":5383},{"x":2129,"y":5379},{"x":2137,"y":5413},{"x":2123,"y":5417}]},"text":"A","confidence":0.26}],"confidence":0.44}],"confidence":0.38}],"blockType":"TEXT","confidence":0.38},{"boundingBox":{"vertices":[{"x":1903,"y":5480},{"x":1949,"y":5446},{"x":1969,"y":5474},{"x":1923,"y":5507}]},"paragraphs":[{"boundingBox":{"vertices":[{"x":1903,"y":5480},{"x":1949,"y":5446},{"x":1969,"y":5474},{"x":1923,"y":5507}]},"words":[{"boundingBox":{"vertices":[{"x":1903,"y":5480},{"x":1949,"y":5446},{"x":1969,"y":5474},{"x":1923,"y":5507}]},"symbols":[{"boundingBox":{"vertices":[{"x":1904,"y":5481},{"x":1913,"y":5474},{"x":1932,"y":5501},{"x":1924,"y":5508}]},"text":"N","confidence":0.18},{"boundingBox":{"vertices":[{"x":1912,"y":5474},{"x":1925,"y":5465},{"x":1944,"y":5491},{"x":1932,"y":5501}]},"text":"A","confidence":0.16},{"property":{"detectedBreak":{"type":"LINE_BREAK"}},"boundingBox":{"vertices":[{"x":1932,"y":5460},{"x":1950,"y":5447},{"x":1969,"y":5474},{"x":1952,"y":5487}]},"text":"V","confidence":0.69}],"confidence":0.34}],"confidence":0.34}],"blockType":"TEXT","confidence":0.34},{"boundingBox":{"vertices":[{"x":3943,"y":6311},{"x":4008,"y":6311},{"x":4008,"y":6326},{"x":3943,"y":6326}]},"paragraphs":[{"boundingBox":{"vertices":[{"x":3943,"y":6311},{"x":4008,"y":6311},{"x":4008,"y":6326},{"x":3943,"y":6326}]},"words":[{"property":{"detectedLanguages":[{"languageCode":"nl"}]},"boundingBox":{"vertices":[{"x":3943,"y":6311},{"x":3965,"y":6311},{"x":3965,"y":6326},{"x":3943,"y":6326}]},"symbols":[{"property":{"detectedLanguages":[{"languageCode":"nl"}]},"boundingBox":{"vertices":[{"x":3943,"y":6311},{"x":3949,"y":6311},{"x":3949,"y":6326},{"x":3943,"y":6326}]},"text":"J","confidence":0.88},{"property":{"detectedLanguages":[{"languageCode":"nl"}]},"boundingBox":{"vertices":[{"x":3951,"y":6311},{"x":3957,"y":6311},{"x":3957,"y":6326},{"x":3951,"y":6326}]},"text":"E","confidence":0.98},{"property":{"detectedLanguages":[{"languageCode":"nl"}],"detectedBreak":{"type":"SPACE"}},"boundingBox":{"vertices":[{"x":3959,"y":6311},{"x":3965,"y":6311},{"x":3965,"y":6326},{"x":3959,"y":6326}]},"text":"S","confidence":0.8}],"confidence":0.88},{"property":{"detectedLanguages":[{"languageCode":"nl"}]},"boundingBox":{"vertices":[{"x":3969,"y":6311},{"x":3980,"y":6311},{"x":3980,"y":6326},{"x":3969,"y":6326}]},"symbols":[{"property":{"detectedLanguages":[{"languageCode":"nl"}]},"boundingBox":{"vertices":[{"x":3969,"y":6311},{"x":3974,"y":6311},{"x":3974,"y":6326},{"x":3969,"y":6326}]},"text":"D","confidence":0.29},{"property":{"detectedLanguages":[{"languageCode":"nl"}],"detectedBreak":{"type":"SPACE"}},"boundingBox":{"vertices":[{"x":3976,"y":6311},{"x":3980,"y":6311},{"x":3980,"y":6326},{"x":3976,"y":6326}]},"text":"E","confidence":0.86}],"confidence":0.57},{"property":{"detectedLanguages":[{"languageCode":"nl"}]},"boundingBox":{"vertices":[{"x":3986,"y":6311},{"x":4008,"y":6311},{"x":4008,"y":6326},{"x":3986,"y":6326}]},"symbols":[{"property":{"detectedLanguages":[{"languageCode":"nl"}]},"boundingBox":{"vertices":[{"x":3986,"y":6311},{"x":3992,"y":6311},{"x":3992,"y":6326},{"x":3986,"y":6326}]},"text":"D","confidence":0.14},{"property":{"detectedLanguages":[{"languageCode":"nl"}]},"boundingBox":{"vertices":[{"x":3994,"y":6311},{"x":4000,"y":6311},{"x":4000,"y":6326},{"x":3994,"y":6326}]},"text":"O","confidence":1},{"property":{"detectedLanguages":[{"languageCode":"nl"}],"detectedBreak":{"type":"LINE_BREAK"}},"boundingBox":{"vertices":[{"x":4002,"y":6311},{"x":4008,"y":6311},{"x":4008,"y":6326},{"x":4002,"y":6326}]},"text":"G","confidence":0.15}],"confidence":0.43}],"confidence":0.63}],"blockType":"TEXT","confidence":0.63}]}],"text":"HET\nALLE\n23 SARA\nNAV\nJES DE DOG\n"},"webDetection":{"webEntities":[{"entityId":"/m/02j81","score":2.1939542,"description":"Eiffel Tower"},{"entityId":"/m/01fdzj","score":0.7046,"description":"Tower"},{"entityId":"/m/0dd9mzb","score":0.68244,"description":"Jardins du Trocadéro"},{"entityId":"/g/121_5mg_","score":0.66330004,"description":"Banks of the Seine"},{"entityId":"/m/0f3vz","score":0.65194803,"description":"Seine"},{"entityId":"/t/2clvyq28bvdgq","score":0.5924},{"entityId":"/m/0_vhs","score":0.5433,"description":"Paris"},{"entityId":"/m/032t0f","score":0.52845,"description":"Prague astronomical clock"},{"entityId":"/m/0jg24","score":0.5136,"description":"Image"},{"entityId":"/m/02ljgl","score":0.4535,"description":"Monument"},{"entityId":"/m/03bfb","score":0.4299,"description":"GIF"},{"entityId":"/m/036jvk","score":0.3518,"description":"Stock photography"},{"entityId":"/m/036qb","score":0.06891,"description":"Gustave Eiffel"},{"entityId":"/m/05qtj","score":0.008327221,"description":"Paris"},{"entityId":"/m/0f8l9c","score":0.000011374082,"description":"France"}],"fullMatchingImages":[{"url":"http://images.unsplash.com/photo-1511739001486-6bfe10ce785f?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;s=8f31ec2b98275ef3bce2347a94827e8d"},{"url":"https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?ixlib=rb-0.3.5&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;s=f697e6b62b4b13af42ac059c235348f4&amp;w=1000&amp;q=80"}],"partialMatchingImages":[{"url":"https://i.pinimg.com/originals/84/cd/03/84cd0353d3c44ba54d36e99e1f5c77f7.jpg"},{"url":"https://weekendcandy.com/wp-content/uploads/2018/07/paris-eiffel-tower.jpg"},{"url":"https://weekendcandy.com/wp-content/uploads/2018/07/paris-eiffel-tower-1440x1383.jpg"},{"url":"https://static1.squarespace.com/static/59ea7531d7bdced61a529646/5ab54f510e2e72bd8364e05f/5ab550588a922d7af062435e/1521833921686/anthony-delanoix-460516-unsplash.jpg"},{"url":"https://pbs.twimg.com/media/DiNE8Y8VAAALpQU.jpg"},{"url":"https://pbs.twimg.com/media/Di_SsuNV4AAGiJW.jpg"},{"url":"https://static1.squarespace.com/static/5a7bafdfe9bfdf05db3458be/t/5ac4d744575d1fea453307fc/1522849622113/F6BA0E22-E5B5-455B-A6A8-E07130F18B15.jpg"},{"url":"http://www.thefitnessgazette.com/wp-content/uploads/2018/04/Eiffel-Tower.jpg"},{"url":"http://postfiles16.naver.net/MjAxNzEyMDNfOTYg/MDAxNTEyMjMzMDk2ODMy.lFuR5EAjXsdpyx7fU3wlqkrVRH3cOVpWO8HAGpA24jwg.O-f63skTPQZKi3eD8QC29yV2s3DyFnWJs4ZNVHHfGEEg.PNG.tryukjin/%ED%95%B8%EB%93%9C%ED%8F%B0_%EB%B0%B0%EA%B2%BD%ED%99%94%EB%A9%B4_101%EB%B2%88%EC%A8%B0_%283%29.png?type=w1"},{"url":"https://i.pinimg.com/736x/60/ca/b7/60cab77b88c93fb72d560e9fc01ed7a3.jpg"},{"url":"https://pbs.twimg.com/media/DfxrsEQUwAAza5L.jpg"},{"url":"https://image.tmdb.org/t/p/original/uzTpnkeKDqCu7DtMTHZut2sD2GQ.jpg"},{"url":"https://cmkt-image-prd.global.ssl.fastly.net/0.1.0/ps/3656718/1160/772/m1/fpnw/wm0/vintage-photo-creator-.jpg?1511933123&amp;s=782e8b99968096933ae4f2017096da61"},{"url":"https://filtergrade.com/wp-content/uploads/2017/11/vintage-photo-creator.jpg"},{"url":"https://yt3.ggpht.com/a-/ACSszfF8aX3GBAzePdGd9MXNj7Z-52c3tFiqG0sLlg=s900-mo-c-c0xffffffff-rj-k-no"},{"url":"https://viajeibonito.com.br/wp-content/uploads/2018/04/pinterest-lugares-para-ver-a-torre-eiffel-em-paris.jpg"},{"url":"https://www.viaggiatorideltempo.com/wordpress/wp-content/uploads/2018/04/agenzia-viaggi-varese-gite-aprile.png"},{"url":"https://i2.wp.com/i.pinimg.com/736x/79/7a/4e/797a4e837a4a63bf23715d75b4b244c8--paris-images-paris-pictures.jpg?resize=640%2C1136&amp;ssl=1"},{"url":"http://www.thefitnessgazette.com/wp-content/uploads/2018/04/Eiffel-Tower-682x1024.jpg"},{"url":"https://www.digitalphoto.de/media/digitalphoto/styles/tec_frontend_opengraph/public/images/2018/07/image-360921--1248073.jpg?itok=UGWPx940"},{"url":"https://i1.wp.com/www.rsproject.pt/wp-content/uploads/2018/02/pariseprix2017main.jpg?fit=973%2C607"},{"url":"https://1.bp.blogspot.com/-SJl3FHAezgo/WrV2kWIiFiI/AAAAAAAAG4w/tXJE0yjvYRoxc5k2sMwL1bm7A5yykpDtQCLcBGAs/s1600/Pariisi.png"},{"url":"http://blogthumb2.naver.net/MjAxNzEyMDNfMTU5/MDAxNTEyMjM0MjcwMTM2.gntZ32Un_ZC3h53e3uF3v-dSaUlWQdrnRVD6vrCa_YUg.hH79F0KoGteaJbXkDAupdE7OQfeOTjcOsXB1xaPYsmAg.PNG.tryukjin/%C7%DA%B5%E5%C6%F9-%B9%E8%B0%E6%C8%AD%B8%E9-101%B9%F8%A4%8A.png?type=w2"},{"url":"http://tourofbooty1.com/wp-content/uploads/2018/04/travel-quotes-rough-guide-fresh-190-best-travel-quotes-images-on-pinterest-of-travel-quotes-rough-guide.jpg"},{"url":"https://i0.wp.com/www.dhresource.com/0x0s/f2-albu-g5-M00-9C-69-rBVaJFlt2AqAYb_9AANDTL-dnLA396.jpg/paris-eiffel-tower-photography-backdrop-beautiful.jpg?resize=720%2C720&amp;ssl=1"},{"url":"https://conteudo.imguol.com.br/c/entretenimento/7d/2017/09/18/paris-x-londres-1505771942178_v2_900x506.pngx"},{"url":"http://mblogthumb3.phinf.naver.net/MjAxODAyMjBfMTgw/MDAxNTE5MDY1NTEwNDU2.Mf476Oc1Q5JBGKjW6Y7ZXLg7XN_ec6eNx1_oqlqZIj8g.QpRHmMbA-Gh7AvLdCO60ef41Wawm4SUReIC9aXCNvqAg.PNG.pluke84/IMG_6958_%EB%B3%B5%EC%82%AC.png?type=w800"},{"url":"https://static1.squarespace.com/static/59ea7531d7bdced61a529646/5ab566a403ce64865008d3eb/5ab567e1562fa77d1764d394/1522239617730/anthony-delanoix-460516-unsplash.jpg?format=500w"},{"url":"https://image.winudf.com/v2/image/Y29tLmFuYWxvZy5maWxtZWZmZWN0c19zY3JlZW5fMF8xNTIzNTk4NTEwXzA3MA/screen-0.jpg?h=800&amp;fakeurl=1&amp;type=.jpg"},{"url":"https://foreclosurestop.us/images/2018/04/inspirational-quotes-travel-awesome-60-inspirational-travel-quotes-with-stunning-world-of-inspirational-quotes-travel.jpg"},{"url":"https://payhip.com/timthumb.php?w=660&amp;src=https://pe56d.s3.amazonaws.com/o_1c0535gh71or2dsv11eg1r1b1t92h.jpg"},{"url":"https://www.digitalphoto.de/media/digitalphoto/styles/tec_frontend_large/public/images/2018/07/travel-books.jpg?itok=SiKR4osu"},{"url":"https://lh5.googleusercontent.com/-raKSFzz7hhI/AAAAAAAAAAI/AAAAAAAAAeY/S1Z6M0mj2lo/photo.jpg"},{"url":"https://medias.lequipe.fr/img-photo-jpg/-/1500000000978214/37:7,779:501-624-416-75/45672.jpg"},{"url":"https://static1.squarespace.com/static/59c051b3914e6b825fe5a516/5a96418d419202d2afa58432/5ab34ac5562fa79e4d5bd53a/1530142456646/Paris.png?format=500w"},{"url":"http://iamcanguro.com/wp-content/uploads/2018/03/IMG_0265-700x350.jpg"},{"url":"https://rejsekris.dk/wp-content/uploads/2016/01/eiffeltaarnet-paris.png"},{"url":"http://www.artnart.net/shop/data/editor/d9dceceef43aa363.jpg"},{"url":"http://wisatabaru.com/wp-content/uploads/2018/04/menara-eiffel.jpg"},{"url":"https://scontent-sea1-1.cdninstagram.com/vp/5af4a411b6fcba72dec962e547be5194/5B67AAE3/t51.2885-15/s480x480/e35/c5.0.1070.1070/29717881_1332897510145416_3316583727475195904_n.jpg?ig_cache_key=MTc1NDUyOTI1NzYyMjU4NDU0Ng%3D%3D.2.c"},{"url":"https://wx3.sinaimg.cn/orj360/006wogfQgy1ftc04q52mkj30hm0qfju5.jpg"},{"url":"http://dthumb.phinf.naver.net/?src=%22https%3A%2F%2Fblogthumb.pstatic.net%2FMjAxNzEyMDNfMTU5%2FMDAxNTEyMjM0MjcwMTM2.gntZ32Un_ZC3h53e3uF3v-dSaUlWQdrnRVD6vrCa_YUg.hH79F0KoGteaJbXkDAupdE7OQfeOTjcOsXB1xaPYsmAg.PNG.tryukjin%2F%25C7%25DA%25B5%25E5%25C6%25F9-%25B9%25E8%25B0%25E6%25C8%25AD%25B8%25E9-101%25B9%25F8%25A4%258A.png%3Ftype%3Dw2%22&amp;type=f560_336"},{"url":"http://www.fatinastylez.com/uploads/1/0/6/5/106558197/published/anthony-delanoix-460516-unsplash.jpg?1520286740"},{"url":"https://www.appsapk.com/wp-content/uploads/2018/04/analog-film-paris-palette-paris-3-0-12042018-screenshot-1.png"},{"url":"https://i1.wp.com/thelifestylecodes.com/wp-content/uploads/2017/06/SBS2259-1.jpg?resize=395%2C373"},{"url":"https://homegadget.pl/public/upload/catalog/product/333/minigallery/thumb_page_15119561921.jpg"},{"url":"https://image.winudf.com/v2/image/Y29tLmFuYWxvZy5maWxtZWZmZWN0c19zY3JlZW5fMF8xNTIzNTk4NTEwXzA3MA/screen-0.jpg?h=500&amp;fakeurl=1&amp;type=.jpg"},{"url":"https://playapi.mtgx.tv/imagecache/230x150/cloud/content-images/seasons/19909/season/vlcsnap-2018-07-19-16h31m50s058-Owrb9vL.png.jpg?scalingModes=retina"},{"url":"https://us.123rf.com/450wm/aleksask/aleksask1408/aleksask140800016/30526144-torre-eifel-en-par%C3%ADs.jpg?ver=6"},{"url":"https://st2.depositphotos.com/1044470/10402/i/450/depositphotos_104026572-stockafbeelding-de-toren-van-eiffel-in.jpg"}],"pagesWithMatchingImages":[{"url":"https://unsplash.com/search/photos/eiffel-tower","pageTitle":"&lt;b&gt;Eiffel&lt;/b&gt;-&lt;b&gt;Tower&lt;/b&gt; Images | Download Free Pictures on Unsplash","fullMatchingImages":[{"url":"http://images.unsplash.com/photo-1511739001486-6bfe10ce785f?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;s=8f31ec2b98275ef3bce2347a94827e8d"},{"url":"https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?ixlib=rb-0.3.5&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;s=f697e6b62b4b13af42ac059c235348f4&amp;w=1000&amp;q=80"}]},{"url":"https://unsplash.com/photos/Q0-fOL2nqZc","pageTitle":"Tower, &lt;b&gt;eiffel tower&lt;/b&gt;, blue and sky HD photo by Anthony DELANOIX ...","fullMatchingImages":[{"url":"http://images.unsplash.com/photo-1511739001486-6bfe10ce785f?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;s=8f31ec2b98275ef3bce2347a94827e8d"}]},{"url":"https://giphy.com/explore/eiffel-tower-fid","pageTitle":"&lt;b&gt;Eiffel Tower&lt;/b&gt; Fid GIFs - Get the best GIF on GIPHY","partialMatchingImages":[{"url":"https://media2.giphy.com/media/xBBWp6T2P0eJO/giphy_s.gif"},{"url":"https://media2.giphy.com/media/xBBWp6T2P0eJO/giphy.gif"}]},{"url":"https://twitter.com/search?q=%23eiffeltower&amp;lang=en","pageTitle":"#&lt;b&gt;eiffeltower&lt;/b&gt; - Twitter Search","partialMatchingImages":[{"url":"https://pbs.twimg.com/media/Di_SsuNV4AAGiJW.jpg"}]},{"url":"https://giphy.com/gifs/eiffel-tower-xBBWp6T2P0eJO","pageTitle":"&lt;b&gt;Eiffel Tower&lt;/b&gt; GIF - Find &amp;amp; Share on GIPHY","partialMatchingImages":[{"url":"https://media.giphy.com/media/xBBWp6T2P0eJO/giphy.gif"}]},{"url":"https://www.123rf.com/photo_31685513_eiffel-tower-and-fountain-at-jardins-du-trocadero-paris-france.html","pageTitle":"&lt;b&gt;Eiffel Tower&lt;/b&gt; And Fountain At Jardins Du Trocadero, Paris, France ...","partialMatchingImages":[{"url":"https://us.123rf.com/450wm/aleksask/aleksask1408/aleksask140800040/30525533-eifel-tower-in-paris.jpg?ver=6"}]},{"url":"https://www.123rf.com/photo_89894863_eiffel-tower-and-fountain-at-jardins-du-trocadero-paris-france-.html","pageTitle":"&lt;b&gt;Eiffel Tower&lt;/b&gt; And Fountain At Jardins Du Trocadero, Paris, France ...","partialMatchingImages":[{"url":"https://us.123rf.com/450wm/aleksask/aleksask1408/aleksask140800040/30525533-eifel-tower-in-paris.jpg?ver=6"}]},{"url":"https://twitter.com/TurnoverBnB/status/1007798980720250882","pageTitle":"TurnoverBnB on Twitter: &amp;quot;Did you know that during summer, the ...","partialMatchingImages":[{"url":"https://pbs.twimg.com/media/DfxrsEQUwAAza5L.jpg"}]},{"url":"https://depositphotos.com/2427451/stock-photo-paris-eiffel-tower-france-during.html","pageTitle":"Paris &lt;b&gt;Eiffel Tower&lt;/b&gt; France during a sunset — Stock Photo © sdecoret ...","partialMatchingImages":[{"url":"https://st2.depositphotos.com/1044470/10402/i/450/depositphotos_104026572-stock-photo-eiffel-tower-in-paris.jpg"}]},{"url":"https://www.pinterest.com/pin/217580225731658807/","pageTitle":"Tower, &lt;b&gt;eiffel tower&lt;/b&gt;, blue and sky HD photo by Anthony DELANOIX ...","partialMatchingImages":[{"url":"https://i.pinimg.com/originals/84/cd/03/84cd0353d3c44ba54d36e99e1f5c77f7.jpg"}]},{"url":"https://www.ieseg.fr/en/faculty-and-research/research-events/servsig-2018/social-events/","pageTitle":"10th SERVSIG Social Events - IÉSEG","partialMatchingImages":[{"url":"https://www.ieseg.fr/wp-content/uploads/2018/02/toureiffel-233x300.png"}]},{"url":"https://www.pinterest.com/pin/346706871308869530/","pageTitle":"The Best Time to Visit the &lt;b&gt;Eiffel Tower&lt;/b&gt; - Pinterest","partialMatchingImages":[{"url":"https://i.pinimg.com/736x/60/ca/b7/60cab77b88c93fb72d560e9fc01ed7a3.jpg"}]},{"url":"https://www.pinterest.ca/pin/217580225731658807/","pageTitle":"Tower, &lt;b&gt;eiffel tower&lt;/b&gt;, blue and sky HD photo by Anthony DELANOIX ...","partialMatchingImages":[{"url":"https://i.pinimg.com/originals/84/cd/03/84cd0353d3c44ba54d36e99e1f5c77f7.jpg"}]},{"url":"https://www.pinterest.nz/pin/217580225731658807/","pageTitle":"Tower, &lt;b&gt;eiffel tower&lt;/b&gt;, blue and sky HD photo by Anthony DELANOIX ...","partialMatchingImages":[{"url":"https://i.pinimg.com/originals/84/cd/03/84cd0353d3c44ba54d36e99e1f5c77f7.jpg"}]},{"url":"https://www.pinterest.ch/pin/217580225731658807/","pageTitle":"Tower, &lt;b&gt;eiffel tower&lt;/b&gt;, blue and sky HD photo by Anthony DELANOIX ...","partialMatchingImages":[{"url":"https://i.pinimg.com/originals/84/cd/03/84cd0353d3c44ba54d36e99e1f5c77f7.jpg"}]},{"url":"https://www.pinterest.com.au/pin/217580225731658807/","pageTitle":"Tower, &lt;b&gt;eiffel tower&lt;/b&gt;, blue and sky HD photo by Anthony DELANOIX ...","partialMatchingImages":[{"url":"https://i.pinimg.com/originals/84/cd/03/84cd0353d3c44ba54d36e99e1f5c77f7.jpg"}]},{"url":"https://flopmee.com/famous-cities-and-landmarks-that-have-been-accurately-copied-by-china/","pageTitle":"Famous Cities and Landmarks That Have Been Accurately Copied ...","partialMatchingImages":[{"url":"https://flopmee.com/wp-content/uploads/2018/05/4-45-225x300.jpg"}]},{"url":"https://www.pinterest.co.uk/pin/217580225731658807/","pageTitle":"Pin by kirk on evolo | Pinterest | Sky hd, &lt;b&gt;Tower&lt;/b&gt; and Paris france","partialMatchingImages":[{"url":"https://i.pinimg.com/originals/84/cd/03/84cd0353d3c44ba54d36e99e1f5c77f7.jpg"}]},{"url":"http://www.thefitnessgazette.com/2018/04/02/marathon-training-done-its-almost-time-for-the-fun/","pageTitle":"MARATHON TRAINING DONE - ITS ALMOST TIME FOR THE FUN ...","partialMatchingImages":[{"url":"http://www.thefitnessgazette.com/wp-content/uploads/2018/04/Eiffel-Tower-682x1024.jpg"},{"url":"http://www.thefitnessgazette.com/wp-content/uploads/2018/04/Eiffel-Tower.jpg"}]},{"url":"https://www.flopmee.com/famous-cities-and-landmarks-that-have-been-accurately-copied-by-china","pageTitle":"Famous Cities and Landmarks That Have Been Accurately Copied ...","partialMatchingImages":[{"url":"https://flopmee.com/wp-content/uploads/2018/05/4-45-225x300.jpg"}]},{"url":"http://joshview.co/pretty-eiffel-tower-pictures/","pageTitle":"pretty &lt;b&gt;eiffel tower&lt;/b&gt; pictures | Joshview.co","partialMatchingImages":[{"url":"https://i0.wp.com/www.dhresource.com/0x0s/f2-albu-g5-M00-9C-69-rBVaJFlt2AqAYb_9AANDTL-dnLA396.jpg/paris-eiffel-tower-photography-backdrop-beautiful.jpg?resize=720%2C720&amp;ssl=1"}]},{"url":"https://www.travelwwd.com/gallery/","pageTitle":"Travel Inspiration — Travel Worldwide Destinations Option #2","partialMatchingImages":[{"url":"https://static1.squarespace.com/static/59ea7531d7bdced61a529646/5ab54f510e2e72bd8364e05f/5ab550588a922d7af062435e/1521833921686/anthony-delanoix-460516-unsplash.jpg?format=300w"},{"url":"https://static1.squarespace.com/static/59ea7531d7bdced61a529646/5ab54f510e2e72bd8364e05f/5ab550588a922d7af062435e/1521833921686/anthony-delanoix-460516-unsplash.jpg"}]},{"url":"https://doeloe1st.org/wallpaper-in-paris-tn/","pageTitle":"Wallpaper In Paris Tn | doeloe1st.org","partialMatchingImages":[{"url":"https://i2.wp.com/i.pinimg.com/736x/79/7a/4e/797a4e837a4a63bf23715d75b4b244c8--paris-images-paris-pictures.jpg?resize=640%2C1136&amp;ssl=1"}]},{"url":"http://building1st.com/eiffel-tower-background-picture/","pageTitle":"&lt;b&gt;eiffel tower&lt;/b&gt; background picture | Building1st.com","partialMatchingImages":[{"url":"https://i0.wp.com/www.dhresource.com/0x0s/f2-albu-g5-M00-9C-69-rBVaJFlt2AqAYb_9AANDTL-dnLA396.jpg/paris-eiffel-tower-photography-backdrop-beautiful.jpg?resize=720%2C720&amp;ssl=1"}]},{"url":"http://building1st.com/pretty-eiffel-tower-pictures/","pageTitle":"pretty &lt;b&gt;eiffel tower&lt;/b&gt; pictures | Building1st.com","partialMatchingImages":[{"url":"https://i0.wp.com/www.dhresource.com/0x0s/f2-albu-g5-M00-9C-69-rBVaJFlt2AqAYb_9AANDTL-dnLA396.jpg/paris-eiffel-tower-photography-backdrop-beautiful.jpg?resize=720%2C720&amp;ssl=1"}]},{"url":"https://www.rosspectehnika.com/paris-effel-tower.html","pageTitle":"Paris Effel &lt;b&gt;Tower&lt;/b&gt;.The Paris Attacks. Home City Of. Sightseeing 9 ...","fullMatchingImages":[{"url":"http://images.unsplash.com/photo-1511739001486-6bfe10ce785f?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;s=11ea28d8cbb2116b3b986c4ad8c2134a"}]},{"url":"https://www.fiftytwodreams.com/our-adventure/","pageTitle":"Our Adventure Blog — Fifty-two Dreams","partialMatchingImages":[{"url":"https://static1.squarespace.com/static/5a7bafdfe9bfdf05db3458be/t/5ac4d744575d1fea453307fc/1522849622113/F6BA0E22-E5B5-455B-A6A8-E07130F18B15.jpg"}]},{"url":"https://www.cpeconferences.com/all-conferences/","pageTitle":"All Conferences — CPE Conferences","partialMatchingImages":[{"url":"https://static1.squarespace.com/static/59c051b3914e6b825fe5a516/5a96418d419202d2afa58432/5ab34ac5562fa79e4d5bd53a/1530142456646/Paris.png?format=500w"}]},{"url":"https://www.cpeconferences.com/past-conferences-3/","pageTitle":"PAST Conferences — CPE Conferences","partialMatchingImages":[{"url":"https://static1.squarespace.com/static/59c051b3914e6b825fe5a516/5a96418d419202d2afa58432/5ab34ac5562fa79e4d5bd53a/1523011298367/Paris.png?format=500w"}]},{"url":"https://gtcistudy.com/","pageTitle":"Home - GTCI Report 2018","partialMatchingImages":[{"url":"https://gtcistudy.com/wp-content/uploads/2018/01/Group-28182.png"}]},{"url":"https://filtergrade.com/product-category/overlays/","pageTitle":"Photoshop Overlays, Textures, and Bokeh Effects - FilterGrade","partialMatchingImages":[{"url":"https://filtergrade.com/wp-content/uploads/2017/11/vintage-photo-creator-300x200.jpg"}]},{"url":"https://filtergrade.com/product/bell-sisters-snow-textures-pack/","pageTitle":"The Bell Sisters Snow Textures Pack - FilterGrade","partialMatchingImages":[{"url":"https://filtergrade.com/wp-content/uploads/2017/11/vintage-photo-creator.jpg"}]},{"url":"https://weekendcandy.com/","pageTitle":"Weekend Candy -","partialMatchingImages":[{"url":"https://weekendcandy.com/wp-content/uploads/2018/07/paris-eiffel-tower.jpg"},{"url":"https://weekendcandy.com/wp-content/uploads/2018/07/paris-eiffel-tower-300x288.jpg"}]},{"url":"https://weekendcandy.com/category/city-weekends/","pageTitle":"City Weekends - Weekend Candy","partialMatchingImages":[{"url":"https://weekendcandy.com/wp-content/uploads/2018/07/paris-eiffel-tower-300x288.jpg"}]},{"url":"https://creativemarket.com/liammckay","pageTitle":"Liam McKay ~ Creative Market","partialMatchingImages":[{"url":"https://cmkt-image-prd.global.ssl.fastly.net/0.1.0/ps/3656718/1160/772/m1/fpnw/wm0/vintage-photo-creator-.jpg?1511933123&amp;s=782e8b99968096933ae4f2017096da61"}]},{"url":"http://www.rsproject.pt/pariseprix2017/","pageTitle":"2017 Paris ePrix | - rs project","partialMatchingImages":[{"url":"https://i1.wp.com/www.rsproject.pt/wp-content/uploads/2018/02/pariseprix2017main.jpg?fit=973%2C607"}]},{"url":"https://play.google.com/store/apps/details?id=hr.zetapp&amp;hl=en_US","pageTitle":"Zet App - Apps on Google Play","partialMatchingImages":[{"url":"https://lh5.googleusercontent.com/-raKSFzz7hhI/AAAAAAAAAAI/AAAAAAAAAeY/S1Z6M0mj2lo/photo.jpg"}]},{"url":"https://creativemarket.com/DesignPanoply/60165-Texture-to-Transparent-Action-Pack","pageTitle":"Texture to Transparent Action Pack ~ Actions ~ Creative Market","partialMatchingImages":[{"url":"https://cmkt-image-prd.global.ssl.fastly.net/0.1.0/ps/3656718/1160/772/m1/fpnw/wm0/vintage-photo-creator-.jpg?1511933123&amp;s=782e8b99968096933ae4f2017096da61"}]},{"url":"https://www.travelwwd.com/","pageTitle":"Travel Worldwide Destinations Option #2","partialMatchingImages":[{"url":"https://static1.squarespace.com/static/59ea7531d7bdced61a529646/5ab566a403ce64865008d3eb/5ab567e1562fa77d1764d394/1522239617730/anthony-delanoix-460516-unsplash.jpg?format=500w"}]},{"url":"https://www.youtube.com/watch?v=ERpG4uzfP4Q","pageTitle":"How to Bring Back Details in Photoshop | With Replace Sky in ...","partialMatchingImages":[{"url":"https://i.ytimg.com/vi/p3xAZBRszH0/hqdefault.jpg?sqp=-oaymwEWCKgBEF5IWvKriqkDCQgBFQAAiEIYAQ==&amp;rs=AOn4CLDdvYIBRHjSmC1SFMF1a-oa99YkAQ"}]},{"url":"https://play.google.com/store/apps/details?id=com.hutchison3g.at.android.selfcare&amp;hl=en","pageTitle":"3Kundenzone - Apps on Google Play","partialMatchingImages":[{"url":"https://lh5.googleusercontent.com/-raKSFzz7hhI/AAAAAAAAAAI/AAAAAAAAAeY/S1Z6M0mj2lo/photo.jpg"}]},{"url":"https://www.youtube.com/watch?v=_m_webG-hoY","pageTitle":"Transform Your Photos With This Setting in Photoshop - YouTube","partialMatchingImages":[{"url":"https://i.ytimg.com/vi/p3xAZBRszH0/hqdefault.jpg?sqp=-oaymwEWCKgBEF5IWvKriqkDCQgBFQAAiEIYAQ==&amp;rs=AOn4CLDdvYIBRHjSmC1SFMF1a-oa99YkAQ"}]},{"url":"http://wefunction.com/vintage-photo-creator/","pageTitle":"Vintage Photo Creator. Photoshop Actions &amp;amp; Seamless Texture ...","partialMatchingImages":[{"url":"https://payhip.com/timthumb.php?w=660&amp;src=https://pe56d.s3.amazonaws.com/o_1c0535gh71or2dsv11eg1r1b1t92h.jpg"}]},{"url":"http://thelifestylecodes.com/page/2/","pageTitle":"THE LIFESTYLE CODES - Page 2 of 14 - INSPIRED BLOGGING!!","partialMatchingImages":[{"url":"https://i1.wp.com/thelifestylecodes.com/wp-content/uploads/2017/06/SBS2259-1.jpg?resize=395%2C373"}]},{"url":"http://www.fatinastylez.com/travel","pageTitle":"FATINA STYLEZ - Travel","partialMatchingImages":[{"url":"http://www.fatinastylez.com/uploads/1/0/6/5/106558197/published/anthony-delanoix-460516-unsplash.jpg?1520286740"}]},{"url":"http://www.fatinastylez.com/travel/travel-bucket-list","pageTitle":"Travel Bucket List - FATINA STYLEZ","partialMatchingImages":[{"url":"http://www.fatinastylez.com/uploads/1/0/6/5/106558197/published/anthony-delanoix-460516-unsplash.jpg?1520286740"}]},{"url":"https://fapgem.com/video/mltqnF_2_4I/how-to-edit-like-doyoutravel-famous-instagram-photographer-free-preset.html","pageTitle":"How to Edit Like @DOYOUTRAVEL | Famous Instagram ...","partialMatchingImages":[{"url":"https://img.youtube.com/vi/p3xAZBRszH0/mqdefault.jpg"}]},{"url":"https://www.appsapk.com/analog-film-paris-palette-paris/","pageTitle":"Analog Film Paris - Palette Paris APK Download for Android - AppsApk","partialMatchingImages":[{"url":"https://www.appsapk.com/wp-content/uploads/2018/04/analog-film-paris-palette-paris-3-0-12042018-screenshot-1.png"}]},{"url":"http://tutorial.technolup.com/2018/02/24/gold-and-teal-color-grading-effect-in-photoshop-photo-effects/","pageTitle":"Gold and Teal Color Grading Effect in Photoshop | Photo Effects ...","partialMatchingImages":[{"url":"http://tutorial.technolup.com/wp-content/uploads/2018/02/maxresdefault-662.jpg"}]},{"url":"https://tutorial.technolup.com/tag/aqua-and-brown-photoshop/","pageTitle":"aqua and brown photoshop | Tutorial.Technolup.com","partialMatchingImages":[{"url":"https://tutorial.technolup.com/wp-content/uploads/2018/02/maxresdefault-662.jpg"}]}],"visuallySimilarImages":[{"url":"https://www.engineering.com/content/community/library/marvels/eiffeltower/images/tower1.jpg"},{"url":"https://i.dailymail.co.uk/i/newpix/2018/03/21/20/4A69F16D00000578-5528865-image-a-10_1521665113481.jpg"},{"url":"https://www.moretimetotravel.com/wp-content/uploads/2014/05/P1030457.jpg"},{"url":"http://adadibatam.com/wp-content/uploads/2016/03/eiffel-tower-gallery3-261x387.jpg"},{"url":"http://www.songofstyle.com/wp-content/uploads/2017/07/Aimee_song_of_style_eiffel_tower_paris_zimmermann_maxi_ruffle_dress_chloe_nile_bag.jpg"},{"url":"http://www.brittany-ferries.co.uk/media/16198/the-eiffel-tower-in-paris/tourismcarousel/the-eiffel-tower-in-paris.jpg"},{"url":"https://amp.thisisinsider.com/images/5745ff0c30830916008b4e2d-750-562.jpg"},{"url":"http://www.widehdimages.com/uploads/large/city/eiffel-tower-hd-wallpapers.jpg"},{"url":"https://pixfeeds.com/images/france/travel/1280-466478690-eiffel-tower-at-winter.jpg"},{"url":"http://www.francetourisme.fr/media/Visite_tour_eiffel/visite_tour_eiffel_2.jpg"}],"bestGuessLabels":[{"label":"eiffel tower"}]}}'

//var input = '{"logoAnnotations":[{"mid":"/m/059wk","description":"Nintendo","score":0.5136613,"boundingPoly":{"vertices":[{"x":75,"y":167},{"x":360,"y":167},{"x":360,"y":229},{"x":75,"y":229}]}}],"labelAnnotations":[{"mid":"/m/07s6nbt","description":"text","score":0.953995,"topicality":0.953995},{"mid":"/m/03gq5hm","description":"font","score":0.83299696,"topicality":0.83299696},{"mid":"/m/0dwx7","description":"logo","score":0.7789311,"topicality":0.7789311},{"mid":"/m/02n3pb","description":"product","score":0.7324097,"topicality":0.7324097},{"mid":"/m/03scnj","description":"line","score":0.7308905,"topicality":0.7308905},{"mid":"/m/0n0j","description":"area","score":0.6720096,"topicality":0.6720096},{"mid":"/m/01cd9","description":"brand","score":0.65774196,"topicality":0.65774196},{"mid":"/m/01jwgf","description":"product","score":0.6304734,"topicality":0.6304734},{"mid":"/m/0j62f","description":"rectangle","score":0.551746,"topicality":0.551746},{"mid":"/m/021sdg","description":"graphics","score":0.53908443,"topicality":0.53908443},{"mid":"/m/06zsq","description":"sign","score":0.50677764,"topicality":0.50677764},{"mid":"/m/0bkqqh","description":"signage","score":0.5005932,"topicality":0.5005932}],"textAnnotations":[{"locale":"en","description":"Nintendo\n","boundingPoly":{"vertices":[{"x":64,"y":173},{"x":333,"y":173},{"x":333,"y":223},{"x":64,"y":223}]}},{"description":"Nintendo","boundingPoly":{"vertices":[{"x":64,"y":173},{"x":333,"y":173},{"x":333,"y":223},{"x":64,"y":223}]}}],"safeSearchAnnotation":{"adult":"VERY_UNLIKELY","spoof":"VERY_UNLIKELY","medical":"UNLIKELY","violence":"VERY_UNLIKELY","racy":"VERY_UNLIKELY"},"imagePropertiesAnnotation":{"dominantColors":{"colors":[{"color":{"red":227,"green":4,"blue":28},"score":0.8138302,"pixelFraction":0.06952393},{"color":{"red":254,"green":246,"blue":247},"score":0.027424982,"pixelFraction":0.89184445},{"color":{"red":238,"green":105,"blue":120},"score":0.022601092,"pixelFraction":0.004292404},{"color":{"red":232,"green":50,"blue":71},"score":0.061858963,"pixelFraction":0.005983351},{"color":{"red":250,"green":217,"blue":220},"score":0.023936432,"pixelFraction":0.016259106},{"color":{"red":235,"green":77,"blue":97},"score":0.018440122,"pixelFraction":0.0022762746},{"color":{"red":248,"green":191,"blue":198},"score":0.011241907,"pixelFraction":0.0052679502},{"color":{"red":223},"score":0.008513559,"pixelFraction":0.00045525495},{"color":{"red":245,"green":163,"blue":173},"score":0.005265598,"pixelFraction":0.0024063475},{"color":{"red":242,"green":141,"blue":153},"score":0.003700043,"pixelFraction":0.0011056191}]}},"cropHintsAnnotation":{"cropHints":[{"boundingPoly":{"vertices":[{"x":31},{"x":351},{"x":351,"y":399},{"x":31,"y":399}]},"confidence":0.79999995,"importanceFraction":0.95},{"boundingPoly":{"vertices":[{},{"x":399},{"x":399,"y":399},{"y":399}]},"confidence":0.79999995,"importanceFraction":1},{"boundingPoly":{"vertices":[{},{"x":399},{"x":399,"y":335},{"y":335}]},"confidence":0.79999995,"importanceFraction":1}]},"fullTextAnnotation":{"pages":[{"property":{"detectedLanguages":[{"languageCode":"en","confidence":1}]},"width":400,"height":400,"blocks":[{"boundingBox":{"vertices":[{"x":64,"y":173},{"x":333,"y":173},{"x":333,"y":223},{"x":64,"y":223}]},"paragraphs":[{"boundingBox":{"vertices":[{"x":64,"y":173},{"x":333,"y":173},{"x":333,"y":223},{"x":64,"y":223}]},"words":[{"property":{"detectedLanguages":[{"languageCode":"en"}]},"boundingBox":{"vertices":[{"x":64,"y":173},{"x":333,"y":173},{"x":333,"y":223},{"x":64,"y":223}]},"symbols":[{"property":{"detectedLanguages":[{"languageCode":"en"}]},"boundingBox":{"vertices":[{"x":64,"y":173},{"x":96,"y":173},{"x":96,"y":223},{"x":64,"y":223}]},"text":"N","confidence":0.99},{"property":{"detectedLanguages":[{"languageCode":"en"}]},"boundingBox":{"vertices":[{"x":108,"y":173},{"x":133,"y":173},{"x":133,"y":223},{"x":108,"y":223}]},"text":"i","confidence":1},{"property":{"detectedLanguages":[{"languageCode":"en"}]},"boundingBox":{"vertices":[{"x":129,"y":173},{"x":153,"y":173},{"x":153,"y":223},{"x":129,"y":223}]},"text":"n","confidence":1},{"property":{"detectedLanguages":[{"languageCode":"en"}]},"boundingBox":{"vertices":[{"x":169,"y":173},{"x":195,"y":173},{"x":195,"y":223},{"x":169,"y":223}]},"text":"t","confidence":0.78},{"property":{"detectedLanguages":[{"languageCode":"en"}]},"boundingBox":{"vertices":[{"x":196,"y":173},{"x":218,"y":173},{"x":218,"y":223},{"x":196,"y":223}]},"text":"e","confidence":1},{"property":{"detectedLanguages":[{"languageCode":"en"}]},"boundingBox":{"vertices":[{"x":222,"y":173},{"x":253,"y":173},{"x":253,"y":223},{"x":222,"y":223}]},"text":"n","confidence":1},{"property":{"detectedLanguages":[{"languageCode":"en"}]},"boundingBox":{"vertices":[{"x":268,"y":173},{"x":300,"y":173},{"x":300,"y":223},{"x":268,"y":223}]},"text":"d","confidence":1},{"property":{"detectedLanguages":[{"languageCode":"en"}],"detectedBreak":{"type":"LINE_BREAK"}},"boundingBox":{"vertices":[{"x":305,"y":173},{"x":333,"y":173},{"x":333,"y":223},{"x":305,"y":223}]},"text":"o","confidence":0.99}],"confidence":0.97}],"confidence":0.97}],"blockType":"TEXT","confidence":0.97}]}],"text":"Nintendo\n"},"webDetection":{"webEntities":[{"entityId":"/m/0dwx7","score":1.0222218,"description":"Logo"},{"entityId":"/m/059wk","score":0.8896,"description":"Nintendo"},{"entityId":"/t/257fx8s2x5xvk","score":0.7177},{"entityId":"/m/0bmjxs9","score":0.7016,"description":"Nintendo 3DS"},{"entityId":"/m/0gtxcy9","score":0.7016,"description":"Nintendo eShop"},{"entityId":"/m/07_tb","score":0.6772,"description":"Video Game Consoles"},{"entityId":"/m/03gq5hm","score":0.5759914,"description":"Font"},{"entityId":"/t/218c6__3f4qcc","score":0.5072},{"entityId":"/t/2h3908mz76rs","score":0.5052},{"entityId":"/m/021sdg","score":0.4989,"description":"Graphics"},{"entityId":"/m/02cwm","score":0.4736,"description":"Design"},{"entityId":"/m/01jwgf","score":0.4587,"description":"Product"},{"entityId":"/t/26t8h1srtf0h2","score":0.4232},{"entityId":"/m/02jfdl","score":0.3955,"description":"Coupon"},{"entityId":"/m/03thgk","score":0.3633,"description":"Silhouette"}],"fullMatchingImages":[{"url":"https://cdn.shopify.com/s/files/1/1527/6765/collections/Nintendo-logo-red.png?v=1476035571"},{"url":"https://www.revel-phone.com/ressources/images/3710107a559e.png"},{"url":"http://www.epicos.it/wp-content/uploads/2015/09/nintendo.png"},{"url":"https://static1.squarespace.com/static/5893a152579fb35d02830506/t/59aa051a579fb343a2c27a2f/1504810394496/Nintendo.png?format=1000w"},{"url":"https://static1.squarespace.com/static/5761ec5cff7c5097ebb3216f/58663db8725e25b2dffb099c/5a6ec3439140b70ed98123a3/1517208388642/Nintendo.png"},{"url":"https://static1.squarespace.com/static/5805eec959cc683faf2e6393/5805f590e4fcb5a6abb3b943/5832bf74e6f2e12eebdc83de/1479720823624/nintendo+logo.jpg"},{"url":"https://www.thedesignlove.com/wp-content/uploads/2016/09/Time-Tested-Logos-Nitendo-1024x736.jpg"},{"url":"https://www.pnicorp.com/wp-content/uploads/200-Nintendo-01.png"},{"url":"https://lookaside.fbsbx.com/lookaside/crawler/media/?media_id=1711427882208146"},{"url":"http://www.gamekyo.com/images_1/3a0b3f9368135148837dc9fd7f6b4c6b20150630070010.png"},{"url":"https://imgix.ranker.com/user_node_img/85/1682964/original/nintendo-photo-u8?w=650&amp;q=50&amp;fm=jpg&amp;fit=fill&amp;bg=fff"},{"url":"https://img.besteproduct.nl/brand/768.png"},{"url":"https://i.pinimg.com/originals/38/44/7f/38447f20b44878860c24bcfffdc7b983.jpg"},{"url":"https://www.gfxmag.com/wp-content/uploads/2016/07/nintendo-vector-logo.png"},{"url":"https://www.teleadhesivo.com/es/img/arc059-jpg/folder/products-listado-merchanthover/pegatinas-coches-motos-nintendo-logo.jpg"},{"url":"https://www.gfxmag.com/wp-content/uploads/2016/07/nintendo-vector-logo.jpg"},{"url":"http://diylogodesigns.com/blog/wp-content/uploads/2016/04/Nintendo-Company-Logo-design.png"},{"url":"https://p3d.in/model_data/snapshot/oHKud"},{"url":"http://chittagongit.com/images/nintendo-icon-png/nintendo-icon-png-10.jpg"},{"url":"https://lh5.googleusercontent.com/-lG5xlaB_-QE/AAAAAAAAAAI/AAAAAAAAAGU/ARK6Dh692U8/photo.jpg"},{"url":"https://www.thegeekgift.com/wp-content/uploads/2016/08/nintendo_products_from_amazon.jpg?x53467"},{"url":"http://www.juegosgratisinternet.com/noticias/fotos//log-nin.jpg"},{"url":"https://media.icdn.hu/product/GalleryMod/2012-09/134164/resp/196705_nintendo.jpg"},{"url":"http://s2.freeupload.ir/i/00069/qqqd26kznqch.jpg"},{"url":"https://www.idgeek.fr/img/m/7.jpg"},{"url":"https://www.retrogameshop.it/img/m/3-medium_default.jpg"},{"url":"http://static.the-minute.com/1904.jpg"},{"url":"https://cdn.nay.sk/images/img-1100/6/195736.jpg"},{"url":"https://i.pinimg.com/736x/3c/57/7d/3c577d842de606b58edd38887bfcd6dd.jpg"},{"url":"https://www.nintendo-online.de/upload/images/2011/08/02/i_29217.jpg"},{"url":"http://portfolio.starseed.fr/files/images/customer/customer/partner-logo-nintendo.jpg"},{"url":"http://4.bp.blogspot.com/-KkeKb1a6Jrw/U9-Kel43D-I/AAAAAAAAIMg/7t1IAwSoFyA/s1600/origem+do+nome+empresa+nintendo-+gnvisino.jpg"},{"url":"http://vectorlogofree.com/wp-content/uploads/2013/04/nintendo-vector-logo-400x400.png"},{"url":"http://www.gameoncy.com/wp-content/uploads/2016/02/Nintendo-400x400.png"},{"url":"http://www.diascoelho.pt/uploads/1/3/9/4/13949352/1615258.jpg"},{"url":"http://wdrmedia.com.mx/imagenes-wdr-media/wdr-clientes/nintendo.jpg"},{"url":"https://www.seeklogo.net/wp-content/uploads/2013/04/nintendo-vector-logo-400x400.png"},{"url":"https://static.fnac-static.com/multimedia/Images/FR/MC/3c/8f/e1/14782268/1507-1.jpg"},{"url":"https://www.cooganstores.com.au/media/brands/thumbnail/123/nint.png"},{"url":"http://pm1.narvii.com/6384/8b9ee54db3db6678bc93efaeb355879f20f9a484_00.jpg"},{"url":"https://www.seeklogo.net/wp-content/uploads/2013/04/nintendo-vector-logo.png"},{"url":"http://bricklive.co.uk/wp-content/uploads/2017/09/nintendo.jpg"},{"url":"https://www.giocattolo.it/c/324-medium_default/NINTENDO.jpg"},{"url":"http://thedojoforgamers.com/wp-content/uploads/2015/03/nini.jpg"},{"url":"https://www.lotto-jansen.de/images/xxx-system/xxx-icons/Firmenlogos/Nintendo/Logo-Nintendo-01.png"},{"url":"https://www.lsa-conso.fr/mediatheque/7/2/9/000005927_87.jpg"},{"url":"http://www.hays-voixoff.com/img/portfolio/nintendo.jpg"},{"url":"http://images-nitrosell-com.akamaized.net/store_images/23/5719/Sticker-Logo-Nintendo.jpg"},{"url":"https://static.wixstatic.com/media/90aab3_b952eff92f3e427da757ca2515d713e4~mv2.png/v1/fill/w_331,h_331,al_c,usm_0.66_1.00_0.01/90aab3_b952eff92f3e427da757ca2515d713e4~mv2.png"},{"url":"https://www.logovector.org/wp-content/uploads/logos/png/n/nintendo_logo.png"}],"visuallySimilarImages":[{"url":"http://logok.org/wp-content/uploads/2014/12/Nintendo-logo-red.png"},{"url":"http://www.logotypes101.com/logos/749/9B91E9DA8C2783251AA52A379223BF7E/Nintendo82.png"},{"url":"http://www.vector-logo.net/logo_preview/ai/n/NINTENDO_LICENSED_LOGO.png"},{"url":"http://fc06.deviantart.net/fs70/f/2012/126/3/c/nintendo_logo_by_abooklover123-d4yrooq.jpg"},{"url":"https://s3.amazonaws.com/freebiesupply/thumbs/2x/nintendo-logo.png"},{"url":"http://epicwallpaperz.com/wallpaper-hd/nintendo-logo-wallpaper-photo-On-wallpaper-hd.jpg"},{"url":"https://www.brandeps.com/logo-download/S/Super-Nintendo-01.png"},{"url":"http://i0.wp.com/consolerepairs.ie/wp-content/uploads/2016/09/nintendo-logo-1-300x169.jpg"},{"url":"http://1000logos.net/wp-content/uploads/2017/11/logo-Nintendo.jpg"},{"url":"https://www.seeklogo.net/wp-content/uploads/2011/05/marvel-comics-vector-logo.png"},{"url":"https://www.logolynx.com/images/logolynx/af/af6113b007b26bcd881e57905ca7e8ab.jpeg"},{"url":"https://gbatemp.net/attachments/nintendo-logo-jpg.3988/"},{"url":"https://imocritics.files.wordpress.com/2012/04/nintendo-3ds-logo.jpg"},{"url":"http://logosvector.net/wp-content/uploads/2012/11/super-nintendo-vector-logo.png"},{"url":"http://www.userlogos.org/files/logos/Airbagman/Nintendo_shine_white.png"},{"url":"https://www.brandeps.com/logo-download/N/Nintendo-2DS-01.png"},{"url":"https://www.seeklogo.net/wp-content/uploads/2017/04/nintendo-direct-logo.png"},{"url":"http://laoblogger.com/images/red-nintendo-logo-clipart-2.jpg"},{"url":"http://gamesites.nintendo.com.au/nintendo-classics-mini-nintendo-entertainment-system/images/_Logo_NCM_neg.svg"}],"bestGuessLabels":[{"label":"nintendo logo vector","languageCode":"en"}]}}'

function push(data) {
	stack[next] = data;
	next += 1;
	top += 1;
}

function pop() {
	var temp = stack[top];
	next -= 1;
	top  -= 1;
	return temp;
}

function fixFaultyInput(input) {

	if (input.includes("cropHintsAnnotation")) {
		var problem = input.indexOf("cropHintsAnnotation")
		var problemEnd;
		//console.log("Found (crop)problem at: " + problem);
		input = fix(problem,problemEnd,input);
	}

	if (input.includes("textAnnotations")) {
		var problem = input.indexOf("textAnnotations")
		problemEnd = 0;
		//console.log("Found (crop)problem at: " + problem);
		input = fix(problem,problemEnd,input);
	}

	if (input.includes("fullTextAnnotation")) {
		problem = input.indexOf("fullTextAnnotation")
		problemEnd = 0;
		//console.log("Found (fullText)problem at: " + problem);
		input = fix(problem,problemEnd,input);
	}

	if (input.includes("fullMatchingImages")) {
		problem = input.indexOf("fullMatchingImages")
		problemEnd = 0;
		//console.log("Found (urls)problem at: " + problem);
		input = fix(problem,problemEnd,input);
	}

	if (input.includes("partialMatchingImages")) {
		problem = input.indexOf("partialMatchingImages")
		problemEnd = 0;
		//console.log("Found (urls)problem at: " + problem);
		input = fix(problem,problemEnd,input);
	}

	// if (input.includes("pagesWithMatchingImages")) {
	// 	problem = input.indexOf("pagesWithMatchingImages")
	// 	problemEnd = 0;
	// 	//console.log("Found (urls)problem at: " + problem);
	// 	input = fix(problem,problemEnd,input);
	// }

	if (input.includes("visuallySimilarImages")) {
		problem = input.indexOf("visuallySimilarImages")
		problemEnd = 0;
		//console.log("Found (urls)problem at: " + problem);
		input = fix(problem,problemEnd,input);
	}

	return input;
}

function fix (problemStart,problemEnd, input) {

	var stack = [];
	var next = 0;
	var top = -1;

	for (var i = problemStart; i < input.length; i++ ) {
		var char = input.charAt(i)
		//console.log(char);

		if (char == '{' || char == '[') {
			//console.log ("Found : " + char)
			stack.push(char);
		}

		if (char == '}' || char == ']' ) {
			//console.log ("Found : " + char)
			stack.pop(char);
		}

		if (i > problemStart + 25 && stack.length == 0) {
			problemEnd = i;
			//console.log(problemEnd);
			input = input.replace(input.substring(problemStart-1,problemEnd+2), "");
			return input;
		}
	}

}

//someone should set this
var API_KEY="";


//https://github.com/GoogleCloudPlatform/machine-learning-browser-extension/blob/master/chrome/background.js
function httpRequest(method, url, body, cb) {
	var xhr = new XMLHttpRequest();
	xhr.open(method, url, true);
	xhr.setRequestHeader('Content-Type', 'application/json');
	xhr.onreadystatechange = function () {
	if (xhr.readyState !== 4) { return; }
		if (xhr.status >= 400) {
			//notify('API request failed');
			console.log('XHR failed', xhr.responseText);
			var response=JSON.parse(xhr.responseText);
			chrome.tts.speak("Couldn't translate picture because "+response.error.message);
			return;
		}
		cb(xhr.responseText);
	};
	xhr.send(body);
};

function notify(title, message) {
  chrome.notifications.create('', {
    'type': 'basic',
    'iconUrl': 'images/icon128.png',
    'title': title,
    'message': message || ''
  }, function (nid) {
    // Automatically close the notification in 4 seconds.
    window.setTimeout(function () {
      chrome.notifications.clear(nid);
    }, 4000);
  });
};



function b64(url, cb) {
	var image = new Image();
	image.setAttribute('crossOrigin', 'anonymous');
	image.onload = function () {
		var canvas = document.createElement('canvas');
		canvas.height = this.naturalHeight;
		canvas.width = this.naturalWidth;
		canvas.getContext('2d').drawImage(this, 0, 0);
		var b64data = canvas.toDataURL('image/png').replace(/^data:image\/(png|jpg);base64,/, '');
		cb(b64data);
	};
	image.src = url;
};

function getClickHandler() {
	return function(info, tab) {
		console.log("info.srcUrl: "+info.srcUrl);
		//getMainFunction()(info, tab, input);
		//return;
		b64(info.srcUrl, function (b64data) {
			console.log("base64 callback");
			var url = 'https://vision.googleapis.com/v1/images:annotate?key=' + API_KEY;
			var data = {
				requests: [{
					image: {content: b64data},
					features: [
						{
							"type": "LANDMARK_DETECTION",
							"maxResults": 1
						},
						{
							"type": "FACE_DETECTION",
						},
						{
							"type": "LOGO_DETECTION",
							"maxResults": 3
						},
						{
							"type": "LABEL_DETECTION",
							"maxResults": 3
						},
						{
							"type": "WEB_DETECTION",
							"maxResults": 3
						}
					]
				}]
			};
			httpRequest('POST', url, JSON.stringify(data), function(responseText) {
				console.log("getting main func");
				getMainFunction()(info, tab, responseText);
			});
		});
	};
};

function getMainFunction() {
	return function(info, tab, input_text) {
		//console.log(info.srcUrl);

		//console.log("Hey: "+input.substr(2550, 20));
		console.log("text length before: "+input_text.length);
		input_text=fixFaultyInput(input_text);
		console.log("text length after: "+input_text.length);

		var obj = JSON.parse(input_text);
		console.log(obj);
		if(obj.responses!=undefined) {
			obj=obj.responses[0];
		}

		var parser_output=new Object();
		parser_output.faces=new Array();
		parser_output.safesearch=new Array();
		parser_output.landmarks=new Array();
		parser_output.logos=new Array();
		parser_output.labels=new Array();
		parser_output.colors=new Array();
		parser_output.webEntities=new Array();

		if (input_text.includes("faceAnnotations")&&obj.faceAnnotations!=undefined) {
			console.log("has a face annotation");
			var faces=new Array();
			faceAnnotations(obj, faces);
			console.log("num faces: "+faces.length);
			parser_output.faces=faces;
			console.log("num parse faces: "+parser_output.faces.length);
		}

		if (input_text.includes("labelAnnotations")&&obj.labelAnnotations!=undefined) {
			var labels = labelAnnotations(obj);
			parser_output.labels=labels;
		}
		if (input_text.includes("imagePropertiesAnnotation")&&obj.imagePropertiesAnnotations!=undefined) {
			console.log("start of imagePropertiesAnnotation");
			var colorProperties = new Object();
            		colorProperties.colors = new Array();
			
         		colors(obj,colorProperties);
            		for (var i = 0; i < colorProperties.colors.length; i++) {
              			console.log("Colors: " + colorProperties.colors[i].red + " " + colorProperties.colors[i].green + " " + colorProperties.colors[i].blue + " " + colorProperties.colors[i].score + " " + colorProperties.colors[i].pixelFraction );
            		}

          	}

		if (input_text.includes("webDetection")) {
			var relevantWebInfo = new Object();
			relevantWebInfo.entities = new Array();
			parser_output.webEntities=relevantWebInfo.entities;
			webDetection(obj, relevantWebInfo);
		}

		if (input_text.includes("landmarkAnnotations")) {
			var landmarkInfo = new Object();
			landmarkAnnotations(obj, landmarkInfo);
			console.log("Landmark Info: " + landmarkInfo.description + " " + landmarkInfo.score);
			parser_output.landmarks=[landmarkInfo];
		}

		if (input_text.includes("logoAnnotations")) {
			var logoInfo = new Object();
			logoAnnotations(obj,logoInfo);
			console.log("Logo Info: " + logoInfo.description + " " + logoInfo.score);
			parser_output.logos=[logoInfo];
		}

		var analysis_output=analyze_parser_output(parser_output);


    var f1 = {name:"gars", num:21};
    var f2 = {name:"aaron", num:22};
    var f3 = {name:"hitch", num:23};
    var f4 = {name:"paris", num:24};
    var f5 = {name:"italy", num:25};
    var f6 = {name:"trash can", num:26};
    var f7 = {name:"apple", num:27};
    var f8 = {name:"google", num:28};
    var f9 = {name:"tesla", num:29};
    var f10 = {name:"obamj", num:30};
    var f11 = {name:"obamk", num:31};
    var f12 = {name:"obaml", num:32};

	var face1;
    var landmark1;
    var logos1;
    var label1;
	var order=new Array();

	for(var i=0;i<analysis_output.length;i++) {
		switch(analysis_output[i].typename) {
			case "faces":
				console.log("There are "+analysis_output[i].people.length+" people");
				face1=faceSentence(analysis_output[i].people);
				order.push("face");
				break;
			case "webEntities":
				//web ents
				break;
			case "labels":
				label1=labelSentence(analysis_output[i].labels);
				order.push("label");
				break;
			case "landmarks":
				console.log("Landmark is part of analysis_output");
				landmark1=landmarkSentence(analysis_output[i].landmarks);
				order.push("landmark");
				break;
			case "logos":
				logos1=logosSentence(analysis_output[i].logos);
				order.push("logos");
				break;
			case "safesearch":
				//safesearch ;)
				break;
		}
	}

    //var faces = [f1, f2, f3];
    //var landmark = [f4, f5, f6];
    //var logos = [f7, f8, f9];
    //var label = [f10, f11, f12];
    //var face1 = faceSentence(faces);
    //var landmark1 = landmarkSentence(landmark);
    //var logos1 = logosSentence(logos);
    //var label1 = labelSentence(faces);
    //var order = ["face", "landmark", "logos", "label"]
    var output = madLibGenerator(face1, landmark1, logos1, label1, order);
    console.log(output);
    chrome.tts.speak(output);
  };
};

function analyze_safesearch(safesearch) {
	var ans=new Object();
	ans.list=new Array();
	ans.typename="safesearch";
	for(var property in safesearch) {
		if(property.likelyhood>=LIKELY) {
			ans.list.push(property);
		}
	}
	ans.relevancy=ans.list.length==0 ? 0 : 0.5;
	return ans;
}

function analyze_faces(faces) {
	var ans=new Object();
	console.log("Analyzing "+faces.length+" faces");
	ans.typename="faces";
	ans.famous=new Array();
	ans.people=new Array();
	//ans.emotion=new Object();

	for(var j=0;j<faces.length;j++) {
		var face=faces[j];
		console.log("one face in faces with confidence: "+face.detectionConfidence);
		if(face.detectionConfidence>=0.5) {
			var temp=new Object();
			console.log("face.headwear: "+face.headwear);
			temp.headwear=face.headwear;
			temp.blurred=face.blurred;
			temp.name="";
			{
				var three_state_likelihood=true;
				var unknown_threshold=likelihoodToInt("UNLIKELY");
				if(three_state_likelihood) {
					for(var i=0;i<face.emotions.length;i++) {
						if(face.emotions[i].likelihood==likelihoodToInt("VERY_UNLIKELY")) {
							face.emotions[i].likelihood=likelihoodToInt("UNLIKELY");
						}
						if(face.emotions[i].likelihood==likelihoodToInt("VERY_LIKELY")) {
							face.emotions[i].likelihood=likelihoodToInt("LIKELY");
						}
					}
				}

				var best=new Array();
				var likelihood=likelihoodToInt("UNKNOWN");
				for(var i=0;i<face.emotions.length;i++) {
					if(face.emotions[i].likelihood>likelihood) {
						best=new Array();
						likelihood=face.emotions[i].likelihood;
					}
					if(face.emotions[i].likelihood==likelihood) {
						best.push(face.emotions[i]);
					}
				}
				if(likelihood<=unknown_threshold) {
					likelihood=likelihoodToInt("UNKNOWN");
				}
				temp.emotions=best;
			}
			console.log("Pushing person");
			ans.people.push(temp);
		}
	}
	if(ans.people.length>=1) {
		ans.relevancy=0.5;
	}
	else {
		ans.relevancy=0.0;
	}
	console.log("Analyzed " + ans.people.length + " people");
	return ans;
}

function analyze_landmarks(landmarks) {
	var ans=new Object();
	ans.typename="landmarks";
	ans.relevancy=landmarks.length==0 ? 0.0 : 0.8;
	console.log("Landmark relevancy: "+ans.relevancy);
	ans.landmarks=landmarks;
	ans.landmark=new Object();
	if(ans.landmarks.length>0) {
		ans.landmark=ans.landmarks[0];
		for(landmark in ans.landmarks) {
			if(landmark.score>ans.landmark.score) {
				ans.landmark=landmark;
			}
		}
	}
	return ans;
}

function analyze_logos(logos) {
	var ans=new Object();
	ans.typename="logos";
	ans.relevancy=logos.length==0 ? 0.0 : 0.7;
	ans.logos=logos;
	return ans;
}

function analyze_labels(labels) {
	var ans=new Object();
	ans.typename="labels";
	ans.relevancy=0.6;
	ans.labels=new Array();
	for(var i=0;i<labels.length&&ans.labels.length<3;i++) {
		//console.log("description: "+labels[i].description);
		if(labels[i].score>=0.8) {
			ans.labels.push(labels[i]);
		}
	}
	return ans;
}

function analyze_webEntities(webEntities, faces) {
	var ans=new Object();
	ans.typename="webEntities";
	ans.relevancy=webEntities.length==0 ? 0.0 : webEntities[0].score;
	ans.webEntities=webEntities;
	//first web entity over 4.0 is name for face
	console.log("WEB ENTITIES: " + webEntities.length);
	for(var i=0, p=0;i<webEntities.length && p<faces.people.length;i++) {
		console.log("web entity "+i+", p="+p+", desc="+webEntities[i].description);
		if(webEntities[i].score>=4.0) {
			//var temp=new Object();
			//temp.name=webEntities[i].description;
			//faces.famous.push(temp);
			console.log("NEW FAMOUS PERSON");
			faces.people[p].name=webEntities[i].description;
			p++;
			faces.relevancy=0.9;
		}
	}
	return ans;
}

function analyze_parser_output(parser_output) {
	var ans=new Array();
	var faces=analyze_faces(parser_output.faces);
	ans.push(analyze_safesearch(parser_output.safesearch));
	ans.push(faces);
	ans.push(analyze_landmarks(parser_output.landmarks));
	ans.push(analyze_logos(parser_output.logos));
	ans.push(analyze_labels(parser_output.labels));
	ans.push(analyze_webEntities(parser_output.webEntities, faces));
	ans.sort(function(a, b) {
		return a.relevancy-b.relevancy;
	});
	chrome.tts.speak("Face relevancy is "+faces.relevancy + ".");
	console.log("Face relevancy is "+faces.relevancy+".");
	ans.reverse();
	return ans;
}

/**
 * Create a context menu which will only show up for images.
 */
chrome.contextMenus.create({
  "title" : "Get image description",
  "type" : "normal",
  "contexts" : ["image"],
  "onclick" : getClickHandler()
});

function faceSentence(faceArray) {
  // This state
  var output = "";
  var i;
  for (i = 0; i < faceArray.length; i++) {
    if(faceArray[i].name != "") {
      output = output.concat(faceArray[i].name);
    }
    else {
      break;
    }
    if(i == faceArray.length - 2) {
      output = output.concat(", and ");
    }
    else {
      output = output.concat(", ");
    }
  }
  if(output != "" && (faceArray.length - i) > 1) {
    output = output.concat("and ");
  }
  if(faceArray.length - i != 0) {
    output = output.concat((faceArray.length - i).toString());
    if(i != 0) {
      output = output.concat(" other");
    }
    output = output.concat(" people");
  }
  return output;
};

function landmarkSentence(landmarkArray) {
  // This state
  var output = "";
  var i;
  console.log("landmarkArray.length = "+landmarkArray.length);
  for (i = 0; i < landmarkArray.length; i++) {
    output = output.concat(landmarkArray[i].description);
    if(i == landmarkArray.length - 2) {
      output = output.concat(", and ");
    }
    else {
      output = output.concat(", ");
    }
  }
  console.log("landmarkSentence = "+output);
  return output;
};

function logosSentence(logosArray) {
  // This state
  var output = "";
  var i;
  for (i = 0; i < logosArray.length; i++) {
    output = output.concat(logosArray[i].description);
    if(i == logosArray.length - 2) {
      output = output.concat(", and ");
    }
    else {
      output = output.concat(", ");
    }
  }
  return output;
};

function labelSentence(labelArray) {
  // This state
  var output = "";
  var i;
  for (i = 0; i < labelArray.length; i++) {
    output = output.concat(labelArray[i].description);
    if(i == labelArray.length - 2) {
      output = output.concat(", and ");
    }
    else {
      output = output.concat(", ");
    }
  }
  return output;
};

function madLibGenerator(face, landmark, logos, label, order) {
  var output = "";
  for (i = 0; i < order.length; i++) {
    switch(order[i]) {
      case "face":
        if(face != "") {
          output = output.concat(" with ");
	}
        output = output.concat(face);
        break;
      case "landmark":
	console.log("Landmark is in order");
	if(landmark != "") {
		console.log("Landmark does not equal \"\"");
		output = output.concat(" at ");
	}
	else {
		console.log("Landmark does equal \"\"");
	}
        output = output.concat(landmark);
        break;
      case "logos":
        if(logos != "") {
          output = output.concat(" with ");
	}
        output = output.concat(logos);
        break;
      case "label":
        if(output == "") {
          output = output.concat(" of ");
          output = output.concat(label);
        }
        break;
      default:
        break;
    }
  }
  var start = "This is a picture ";
  output = start.concat(output);
  return output;
}


	function likelihoodToInt(likelihood) {

		if (likelihood == ("UNKOWN")) {
			return 0;
		}
		else if (likelihood == ("VERY_UNLIKELY")) {
			return 1;
		}
		else if (likelihood == ("UNLIKELY")) {
			return 2;
		}
		else if (likelihood == ("POSSIBLE")) {
			return 3;
		}
		else if (likelihood == ("LIKELY")) {
			return 4;
		}
		else if (likelihood == ("VERY_LIKELY")) {
			return 5;
		}
		return -1;
	}


function faceAnnotations(obj, faces) {
	console.log(obj.faceAnnotations);
	for(var i=0;i<obj.faceAnnotations.length;i++) {
    		var faceFeatures = obj.faceAnnotations[i];

    		var temp = new Object();
		var face = new Object();
		face.emotions=new Array();

		temp.type = "Joy"
		temp.likelihood = likelihoodToInt(faceFeatures.joyLikelihood)
		face.emotions.push(temp);

		temp = new Object();
		temp.type = "Sorrow"
		temp.likelihood = likelihoodToInt(faceFeatures.sorrowLikelihood)
		face.emotions.push(temp);

		temp = new Object();
		temp.type = "Anger"
		temp.likelihood = likelihoodToInt(faceFeatures.angerLikelihood)
		face.emotions.push(temp);

		temp = new Object();
		temp.type = "Surprise"
		temp.likelihood = likelihoodToInt(faceFeatures.surpriseLikelihood)
		face.emotions.push(temp);

		face.headwear = likelihoodToInt(faceFeatures.headwearLikelihood)

		face.blurred = likelihoodToInt(faceFeatures.blurredLikelihood)
		face.detectionConfidence=faceFeatures.detectionConfidence;
		faces.push(face);
		console.log("COOL Face Features Detection Confidence: "+faces[faces.length-1].detectionConfidence);
	}
}

  function labelAnnotations(obj) {

      var start = obj.labelAnnotations;
      var labels = new Array();

      var temp = new Object();


      console.log("Start(labels) length: " + start.length);
      for (var i = 0; i < start.length; i++) {

        temp = new Object();
        // console.log(start.description);
        // console.log(start.score);
        temp.description = start[i].description;
        temp.score = start[i].score;
        labels.push(temp);
	console.log( "labels[" + labels.length-1 + "]: " + labels[labels.length-1].description + ", "+temp.score);
      }
      return labels;

  }

  function colors(obj,colorProperties) {


    var start = obj.imagePropertiesAnnotation.dominantColors.colors;

    var temp = new Object();

    //console.log("Start(colors) length: " + start.length);
    for (var i = 0; i < start.length; i++) {

      temp = new Object();
      // console.log(start[i].color);
      // console.log(start[i].score);
      // console.log(start[i].pixelFraction)
      temp.red = start[i].color.red;
      temp.green = start[i].color.green;
      temp.blue= start[i].color.blue;
      temp.score = start[i].score;
      temp.pixelFraction = start[i].pixelFraction;
      colorProperties.colors.push(temp);
    }


  }

  function webDetection(obj,releventWebInfo) {

    var start = obj.webDetection;

    var entitiesStart = start.webEntities;
    var temp = new Object();

    //console.log(entitiesStart.length);
    for (var i = 0; i < entitiesStart.length;i++) {
      temp = new Object();
      temp.description = entitiesStart[i].description;
      temp.score = entitiesStart[i].score;
      releventWebInfo.entities.push(temp);
    }

    var bestGuess = start.bestGuessLabels[0];
    //console.log(bestGuess.label);

    releventWebInfo.bestGuess = bestGuess.label;

  }

	function landmarkAnnotations(obj,landmarkInfo) {

		var start = obj.landmarkAnnotations


		for (var i = 0; i < start.length; i++) {
			landmarkInfo.description = start[i].description;
			landmarkInfo.score = start[i].score;
		}

	}

	function logoAnnotations(obj,logoInfo) {

		var start = obj.logoAnnotations


		for (var i = 0; i < start.length; i++) {
			logoInfo.description = start[i].description;
			logoInfo.score = start[i].score;
		}
	}
