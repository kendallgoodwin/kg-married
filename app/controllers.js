angular.module('WeddingCtrl', ['WeddingServices', 'ngAnimate', 'ui.bootstrap', 'bootstrapLightbox'])

app.controller('HomeCtrl', ['$scope', '$state', function($scope, $state) {
	$scope.name = "Kendall Maniulit"

	$state.go('Home')

}])

app.controller('NavbarCtrl', ['$scope', function($scope) {
	// Enables clickable collapse navbar in mobile view
	// $scope.isCollapsed = true;

	$scope.isCollapsed = true;
  $scope.isCollapsedHorizontal = false;

	// Enables dropdown menu in navbar
	$scope.status = {
    isopen: false
  };

}])

app.controller('GettingReadyCtrl', ['$scope', '$state', 'Lightbox', 
	function($scope, $state, Lightbox) {

// getting ready
$scope.gettingReady = [
	{'url': 'http://s26.postimg.org/4dmoluzgp/Kendall_Greg_The_Story_000.jpg'}, 
	{'url': 'https://s26.postimg.org/5ty7402dl/Kendall_Greg_The_Story_001.jpg'},
  {'url': 'https://s26.postimg.org/g5ajwnu2x/Kendall_Greg_The_Story_002.jpg'}, 
  // 'images/Kendall+Greg(TheStory)003.jpg',
  // 'images/Kendall+Greg(TheStory)004.jpg', 
  {'url': 'https://s26.postimg.org/qgmwpbls9/Kendall_Greg_The_Story_005.jpg'},

  {'url': 'https://s26.postimg.org/45z1pcoi1/Kendall_Greg_The_Story_006.jpg'},
  // 'images/Kendall+Greg(TheStory)008.jpg',
  {'url': 'https://s26.postimg.org/z1g8ghvyh/Kendall_Greg_The_Story_010.jpg'}, 
  {'url': 'https://s26.postimg.org/rpasaydqh/Kendall_Greg_Details_000.jpg'},

  {'url': 'https://s26.postimg.org/kwafeomx5/Kendall_Greg_The_Story_013.jpg'},
  {'url': 'https://s26.postimg.org/6ehtkfkzt/Kendall_Greg_The_Story_014.jpg'}, 
  // 'images/Kendall+Greg(TheStory)015.jpg',

  // 'images/Kendall+Greg(TheStory)016.jpg', 
  // 'images/Kendall+Greg(TheStory)018.jpg',
  {'url': 'https://s26.postimg.org/rpfdop349/Kendall_Greg_The_Story_019.jpg'}, 

  {'url': 'https://s26.postimg.org/4chc66n0p/Kendall_Greg_The_Story_022.jpg'},
  {'url': 'https://s26.postimg.org/kordvx1c9/Kendall_Greg_The_Story_023.jpg'}, 
  {'url': 'https://s26.postimg.org/4p44ymfwp/Kendall_Greg_details_003.jpg'},
  // 'images/Kendall+Greg(TheStory)024.jpg',
  {'url': 'https://s26.postimg.org/s60lb4qvd/Kendall_Greg_The_Story_026.jpg'}, 
  // 'images/Kendall+Greg(TheStory)029.jpg',
  {'url': 'https://s26.postimg.org/dbbzwyhah/Kendall_Greg_The_Story_031.jpg'}, 
  {'url': 'https://s26.postimg.org/5wmo4kvex/Kendall_Greg_The_Story_032.jpg'},
  {'url': 'https://s26.postimg.org/szd73qww9/Kendall_Greg_The_Story_033.jpg'}, 
  {'url': 'https://s26.postimg.org/3um6qbxft/Kendall_Greg_The_Story_036.jpg'},
  // 'images/Kendall+Greg(TheStory)039.jpg', 
  {'url': 'https://s26.postimg.org/fxridw8i1/Kendall_Greg_The_Story_040.jpg'},
  {'url': 'https://s26.postimg.org/yeqiigdu1/Kendall_Greg_The_Story_043.jpg'}, 
  {'url': 'https://s26.postimg.org/iuj4rx3pl/Kendall_Greg_The_Story_044.jpg'},
  // 'images/Kendall+Greg(TheStory)047.jpg', 
  // 'images/Kendall+Greg(TheStory)049.jpg',
  {'url': 'https://s26.postimg.org/ojzdc89vt/Kendall_Greg_The_Story_053.jpg'}, 
  {'url': 'https://s26.postimg.org/6ig8effux/Kendall_Greg_The_Story_054.jpg'},
  {'url': 'https://s26.postimg.org/ozan58vt5/Kendall_Greg_The_Story_056.jpg'}, 
  {'url': 'https://s26.postimg.org/8pkh2cl55/Kendall_Greg_The_Story_060.jpg'},
	{'url': 'https://s26.postimg.org/qgw3gt0jt/Kendall_Greg_The_Story_061.jpg'}, 

  {'url': 'https://s26.postimg.org/vgtjor66h/Kendall_Greg_The_Story_066.jpg'}, 
  {'url': 'https://s26.postimg.org/orn08qkuh/Kendall_Greg_The_Story_067.jpg'}, 
  {'url': 'https://s26.postimg.org/fl4plgfm1/Kendall_Greg_The_Story_068.jpg'},
  {'url': 'https://s26.postimg.org/ek92a2o09/Kendall_Greg_The_Story_069.jpg'}, 
  {'url': 'https://s26.postimg.org/cgyn2eo7d/Kendall_Greg_The_Story_070.jpg'},
  {'url': 'https://s26.postimg.org/ado7uqoeh/Kendall_Greg_The_Story_071.jpg'}, 
  {'url': 'https://s26.postimg.org/g34gf1ukp/Kendall_Greg_The_Story_072.jpg'},
  {'url': 'https://s26.postimg.org/c812chbex/Kendall_Greg_The_Story_074.jpg'}, 
  {'url': 'https://s26.postimg.org/sx2i8e809/Kendall_Greg_The_Story_077.jpg'},
  {'url': 'https://s26.postimg.org/a60ky8dft/Kendall_Greg_The_Story_078.jpg'}, 
  {'url': 'https://s26.postimg.org/47mrnzuh5/Kendall_Greg_The_Story_080.jpg'}, 
  {'url': 'https://s26.postimg.org/ipjyvzls9/Kendall_Greg_The_Story_079.jpg'}, 
  {'url': 'https://s26.postimg.org/u4gg0ly4p/Kendall_Greg_The_Story_081.jpg'},
  {'url': 'https://s26.postimg.org/yezp9xsll/Kendall_Greg_The_Story_082.jpg'}, 
  {'url': 'https://s26.postimg.org/hsi50uznt/Kendall_Greg_The_Story_084.jpg'},
  {'url': 'https://s26.postimg.org/grhwbqio9/Kendall_Greg_The_Story_086.jpg'},
  {'url': 'https://s26.postimg.org/q0k2lurk9/Kendall_Greg_The_Story_087.jpg'},
  {'url': 'https://s26.postimg.org/k0wbi76rt/Kendall_Greg_The_Story_088.jpg'}, 
  {'url': 'https://s26.postimg.org/xj37uhix5/Kendall_Greg_The_Story_093.jpg'},
  {'url': 'https://s26.postimg.org/69rufzhu1/Kendall_Greg_The_Story_096.jpg'}, 
  {'url': 'https://s26.postimg.org/p3dnczg21/Kendall_Greg_The_Story_097.jpg'}
  ]

  $scope.openLightboxModal = function (index) {
  	if (window.innerWidth > 640) {
    Lightbox.openModal($scope.gettingReady, index);
  	} 
  }

}])

app.controller('FirstLookCtrl', ['$scope', '$state', 'Lightbox', 
	function($scope, $state, Lightbox) {

	$scope.firstLook = [
	{'url': 'https://s26.postimg.org/t2ki6o0eh/Kendall_Greg_The_Story_098.jpg'}, 
	{'url': 'https://s26.postimg.org/5cv2hz215/Kendall_Greg_The_Story_099.jpg'},
  // 'images/Kendall+Greg(TheStory)100.jpg', 
  
  {'url': 'https://s26.postimg.org/rdbeylkp5/Kendall_Greg_The_Story_102.jpg'}, 
  // 'images/Kendall+Greg(TheStory)101.jpg',
  {'url': 'https://s26.postimg.org/sgvjak5c9/Kendall_Greg_The_Story_103.jpg'},
  {'url': 'https://s26.postimg.org/x41lcbsp5/Kendall_Greg_The_Story_104.jpg'}, 
  {'url': 'https://s26.postimg.org/67hm409vt/Kendall_Greg_The_Story_106.jpg'},
 
  {'url': 'https://s26.postimg.org/ogjskkphl/Kendall_Greg_groupings_002.jpg'}, 
  {'url': 'https://s26.postimg.org/roo9xmbrd/Kendall_Greg_groupings_003.jpg'},
  {'url': 'https://s26.postimg.org/5190rgw7d/Kendall_Greg_groupings_004.jpg'}, 
  {'url': 'https://s26.postimg.org/9of2t8jk9/Kendall_Greg_groupings_006.jpg'},

  {'url': 'https://s26.postimg.org/fj3o0ymfd/Kendall_Greg_The_Story_109.jpg'}, 
  {'url': 'https://s26.postimg.org/ooc0utpu1/Kendall_Greg_The_Story_107.jpg'},
  {'url': 'https://s26.postimg.org/gk3wq33ex/Kendall_Greg_The_Story_108.jpg'}, 

  {'url': 'https://s26.postimg.org/5tboqo0eh/Kendall_Greg_groupings_008.jpg'},
  {'url': 'https://s26.postimg.org/w46p2vo5l/Kendall_Greg_groupings_010.jpg'},
  {'url': 'https://s26.postimg.org/kqk5rodmx/Kendall_Greg_groupings_009.jpg'}, 
  
  {'url': 'https://s26.postimg.org/l5vfkozk9/Kendall_Greg_groupings_011.jpg'},
  {'url': 'https://s26.postimg.org/46mh5focp/Kendall_Greg_groupings_012.jpg'}, 
  {'url': 'https://s26.postimg.org/os18xc5xl/Kendall_Greg_groupings_013.jpg'},

  {'url': 'https://s26.postimg.org/ycpgxyknd/Kendall_Greg_The_Story_110.jpg'}, 

  {'url': 'https://s26.postimg.org/6vv20oxzd/Kendall_Greg_details_009.jpg'},

  {'url': 'https://s26.postimg.org/pvuk0s5c9/Kendall_Greg_The_Story_113.jpg'},
  {'url': 'https://s26.postimg.org/v8jeewt8p/Kendall_Greg_The_Story_114.jpg'}, 
  {'url': 'https://s26.postimg.org/xedp9ewp5/Kendall_Greg_The_Story_115.jpg'},
  {'url': 'https://s26.postimg.org/sh04oauq1/Kendall_Greg_The_Story_116.jpg'}, 
  // 'images/Kendall+Greg(TheStory)117.jpg',
  {'url': 'https://s26.postimg.org/4ft8mufwp/Kendall_Greg_The_Story_118.jpg'}, 
  // 'images/Kendall+Greg(TheStory)120.jpg',
  {'url': 'https://s26.postimg.org/tacqgx0qx/Kendall_Greg_The_Story_121.jpg'}, 
  {'url': 'https://s26.postimg.org/d0mke0q2x/Kendall_Greg_The_Story_122.jpg'},
  {'url': 'https://s26.postimg.org/3u49qqkuh/Kendall_Greg_The_Story_123.jpg'}, 
  {'url': 'https://s26.postimg.org/rmdl29mvd/Kendall_Greg_The_Story_127.jpg'},
  // 'images/Kendall+Greg(TheStory)128.jpg', 
  {'url': 'https://s26.postimg.org/nresdft3d/Kendall_Greg_The_Story_129.jpg'},
  {'url': 'https://s26.postimg.org/99hl5g1s9/Kendall_Greg_The_Story_131.jpg'}, 
  {'url': 'https://s26.postimg.org/em6fjkpop/Kendall_Greg_The_Story_132.jpg'},
  // 'images/Kendall+Greg(TheStory)133.jpg', 
  {'url': 'https://s26.postimg.org/5sfj2h2q1/Kendall_Greg_The_Story_135.jpg'},
  {'url': 'https://s26.postimg.org/dz7iu1ssp/Kendall_Greg_The_Story_138.jpg'}, 
  {'url': 'https://s26.postimg.org/nxshgj289/Kendall_Greg_The_Story_139.jpg'},
  {'url': 'https://s26.postimg.org/jpxp7s0sp/Kendall_Greg_The_Story_140.jpg'}, 
  // 'images/Kendall+Greg(TheStory)141.jpg',
  // 'images/Kendall+Greg(TheStory)142.jpg', 
  {'url': 'https://s26.postimg.org/6n22oiakp/Kendall_Greg_The_Story_144.jpg'},
  {'url': 'https://s26.postimg.org/9v6k1jwuh/Kendall_Greg_The_Story_145.jpg'}, 
  {'url': 'https://s26.postimg.org/jh04huo09/Kendall_Greg_The_Story_147.jpg'},
  {'url': 'https://s26.postimg.org/mp978mznt/Kendall_Greg_The_Story_150.jpg'}, 
  // 'images/Kendall+Greg(TheStory)151.jpg',
  {'url': 'https://s26.postimg.org/o5kpqs2kp/Kendall_Greg_The_Story_152.jpg'}, 
  {'url': 'https://s26.postimg.org/4c8ly2p6x/Kendall_Greg_The_Story_153.jpg'},
  {'url': 'https://s26.postimg.org/f0ccwwz61/Kendall_Greg_The_Story_154.jpg'}, 
  {'url': 'https://s26.postimg.org/rt0gwuart/Kendall_Greg_The_Story_155.jpg'},
  {'url': 'https://s26.postimg.org/5v4031vrd/Kendall_Greg_The_Story_157.jpg'}, 
  {'url': 'https://s26.postimg.org/pqzzilcsp/Kendall_Greg_The_Story_158.jpg'},
  {'url': 'https://s26.postimg.org/ktmexhatl/Kendall_Greg_The_Story_162.jpg'}, 
  {'url': 'https://s26.postimg.org/6oglvo1s9/Kendall_Greg_The_Story_163.jpg'},
  {'url': 'https://s26.postimg.org/607rcq32h/Kendall_Greg_The_Story_164.jpg'} 
  
  ]

  $scope.openLightboxModal = function (index) {
  	if (window.innerWidth > 640) {
    Lightbox.openModal($scope.firstLook, index);
  	} 
  }

  $state.go('FirstLook')

}])
	
app.controller('CeremonyCtrl', ['$scope', '$state', 'Lightbox', 
	function($scope, $state, Lightbox) {


// pre-ceremony & ceremony
	$scope.ceremony = [
 	{'url': 'https://s26.postimg.org/8pz6abn61/Kendall_Greg_details_052.jpg'},

  {'url': 'https://s26.postimg.org/pr4kwc26h/Kendall_Greg_The_Story_166.jpg'},
  {'url': 'https://s26.postimg.org/zcy5cmtc9/Kendall_Greg_The_Story_167.jpg'}, 
  {'url': 'https://s26.postimg.org/iqgl3k0eh/Kendall_Greg_The_Story_168.jpg'},
  {'url': 'https://s26.postimg.org/w8nhfucjt/Kendall_Greg_The_Story_169.jpg'}, 
  {'url': 'https://s26.postimg.org/y1uzhwn49/Kendall_Greg_The_Story_172.jpg'},
  {'url': 'https://s26.postimg.org/aowxze70p/Kendall_Greg_The_Story_173.jpg'}, 
  {'url': 'https://s26.postimg.org/5erz83mrt/Kendall_Greg_The_Story_174.jpg'},
  {'url': 'https://s26.postimg.org/6ic3k27ex/Kendall_Greg_The_Story_175.jpg'}, 
  {'url': 'https://s26.postimg.org/c7sc4ddl5/Kendall_Greg_The_Story_176.jpg'},
  {'url': 'https://s26.postimg.org/p0gg4ap6x/Kendall_Greg_The_Story_178.jpg'}, 

  // group photos
  {'url': 'https://s26.postimg.org/jqubfcfex/Kendall_Greg_groupings_017.jpg'}, 
  {'url': 'https://s26.postimg.org/f6850evpl/Kendall_Greg_groupings_019.jpg'},
  {'url': 'https://s26.postimg.org/4ko9oepe1/Kendall_Greg_groupings_023.jpg'}, 
  {'url': 'https://s26.postimg.org/rarzv4xzd/Kendall_Greg_groupings_026.jpg'},
  {'url': 'https://s26.postimg.org/5pmx7j18p/Kendall_Greg_groupings_031.jpg'}, 
  {'url': 'https://s26.postimg.org/4bvac81zd/Kendall_Greg_groupings_033.jpg'},
  {'url': 'https://s26.postimg.org/jymjplfrd/Kendall_Greg_groupings_036.jpg'},
  {'url': 'https://s26.postimg.org/jn53ctzbd/Kendall_Greg_groupings_037.jpg'}, 
  {'url': 'https://s26.postimg.org/mii6jp3bd/Kendall_Greg_groupings_042.jpg'},
  {'url': 'https://s26.postimg.org/b7fivbwg9/Kendall_Greg_groupings_043.jpg'}, 
  {'url': 'https://s26.postimg.org/5xak41c7d/Kendall_Greg_groupings_046.jpg'},
  {'url': 'https://s26.postimg.org/nbuscb9c9/Kendall_Greg_groupings_047.jpg'},
  {'url': 'https://s26.postimg.org/5zufqvfux/Kendall_Greg_groupings_049.jpg'}, 
  {'url': 'https://s26.postimg.org/3jx7qrn61/Kendall_Greg_groupings_050.jpg'},
  {'url': 'https://s26.postimg.org/z4x6u9v61/Kendall_Greg_groupings_052.jpg'}, 
  {'url': 'https://s26.postimg.org/xr5jyyvwp/Kendall_Greg_groupings_055.jpg'},
  {'url': 'https://s26.postimg.org/4d9tjdt6x/Kendall_Greg_groupings_060.jpg'}, 
  {'url': 'https://s26.postimg.org/jaiake6fd/Kendall_Greg_groupings_063.jpg'},
  {'url': 'https://s26.postimg.org/6x5gdhgqx/Kendall_Greg_groupings_064.jpg'}, 
  {'url': 'https://s26.postimg.org/yyjhr6m15/Kendall_Greg_groupings_065.jpg'},
  {'url': 'https://s26.postimg.org/gx0ctds09/Kendall_Greg_groupings_066.jpg'}, 
  // 'images/Kendall+Greg(groupings)067.jpg',
  {'url': 'https://s26.postimg.org/hnt2z5udl/Kendall_Greg_groupings_068.jpg'}, 
  {'url': 'https://s26.postimg.org/5n7myfmyx/Kendall_Greg_groupings_072.jpg'},
  {'url': 'https://s26.postimg.org/z3rueliq1/Kendall_Greg_groupings_075.jpg'},





  {'url': 'https://s26.postimg.org/slcbnitqh/Kendall_Greg_The_Story_180.jpg'},
  {'url': 'https://s26.postimg.org/q5ai9obnt/Kendall_Greg_The_Story_181.jpg'}, 
  // 'images/Kendall+Greg(TheStory)182.jpg',
  {'url': 'https://s26.postimg.org/4k5fm2ex5/Kendall_Greg_The_Story_183.jpg'}, 
  {'url': 'https://s26.postimg.org/6pzqgkidl/Kendall_Greg_The_Story_184.jpg'},
  // 'images/Kendall+Greg(TheStory)185.jpg', 
  {'url': 'https://s26.postimg.org/nf5rq84cp/Kendall_Greg_The_Story_187.jpg'},
  {'url': 'https://s26.postimg.org/hs9esr1u1/Kendall_Greg_The_Story_188.jpg'}, 
  // 'images/Kendall+Greg(TheStory)190.jpg',
  {'url': 'https://s26.postimg.org/pz1ekbrwp/Kendall_Greg_The_Story_192.jpg'}, 
  {'url': 'https://s26.postimg.org/rfcx2gutl/Kendall_Greg_The_Story_193.jpg'},
  {'url': 'https://s26.postimg.org/yjuqbi22x/Kendall_Greg_The_Story_194.jpg'}, 
  {'url': 'https://s26.postimg.org/80259d1jd/Kendall_Greg_The_Story_197.jpg'},
  {'url': 'https://s26.postimg.org/5k0bvijgp/Kendall_Greg_The_Story_199.jpg'}, 
  {'url': 'https://s26.postimg.org/et2i5mscp/Kendall_Greg_The_Story_201.jpg'},

  {'url': 'https://s26.postimg.org/rbnozyeq1/Kendall_Greg_The_Story_203.jpg'}, 
  {'url': 'https://s26.postimg.org/uwjkj6j9l/Kendall_Greg_The_Story_205.jpg'},
  {'url': 'https://s26.postimg.org/s3qcz5ix5/Kendall_Greg_The_Story_206.jpg'}, 
  {'url': 'https://s26.postimg.org/t7ahb43k9/Kendall_Greg_The_Story_207.jpg'},
  {'url': 'https://s26.postimg.org/5ucfslngp/Kendall_Greg_The_Story_208.jpg'}, 
  // 'images/Kendall+Greg(TheStory)209.jpg',
  {'url': 'https://s26.postimg.org/qfr7ki51l/Kendall_Greg_The_Story_210.jpg'}, 
  {'url': 'https://s26.postimg.org/69nplm9e1/Kendall_Greg_The_Story_212.jpg'},
  {'url': 'https://s26.postimg.org/5y698usy1/Kendall_Greg_The_Story_213.jpg'}, 
  {'url': 'https://s26.postimg.org/mn7p4rpjd/Kendall_Greg_The_Story_215.jpg'},
  {'url': 'https://s26.postimg.org/t26q1fw95/Kendall_Greg_The_Story_217.jpg'}, 
  {'url': 'https://s26.postimg.org/e7mq10c21/Kendall_Greg_The_Story_218.jpg'},
  // 'images/Kendall+Greg(TheStory)219.jpg', 
  // 'images/Kendall+Greg(TheStory)220.jpg',
  {'url': 'https://s26.postimg.org/3yu8v6o09/Kendall_Greg_The_Story_221.jpg'}, 
  {'url': 'https://s26.postimg.org/qotdo677t/Kendall_Greg_The_Story_222.jpg'},
  {'url': 'https://s26.postimg.org/gssaoj1ft/Kendall_Greg_The_Story_223.jpg'}, 
  {'url': 'https://s26.postimg.org/5hpn05ukp/Kendall_Greg_The_Story_224.jpg'},
  {'url': 'https://s26.postimg.org/bjx9qnj0p/Kendall_Greg_The_Story_226.jpg'}, 
  {'url': 'https://s26.postimg.org/p2462xv61/Kendall_Greg_The_Story_228.jpg'},
  {'url': 'https://s26.postimg.org/4w0o41zih/Kendall_Greg_The_Story_229.jpg'}, 
  {'url': 'https://s26.postimg.org/7rdrax3ih/Kendall_Greg_The_Story_230.jpg'},
  {'url': 'https://s26.postimg.org/d42lp1rex/Kendall_Greg_The_Story_231.jpg'}, 
  {'url': 'https://s26.postimg.org/rooqgzsp5/Kendall_Greg_The_Story_233.jpg'},
  {'url': 'https://s26.postimg.org/7il8i3x1l/Kendall_Greg_The_Story_235.jpg'}, 
  {'url': 'https://s26.postimg.org/4098lpw5l/Kendall_Greg_The_Story_236.jpg'},
  {'url': 'https://s26.postimg.org/7xwib4iyx/Kendall_Greg_The_Story_237.jpg'}, 
  {'url': 'https://s26.postimg.org/6k4vftjpl/Kendall_Greg_The_Story_238.jpg'}
  ]

 $scope.openLightboxModal = function (index) {
  	if (window.innerWidth > 640) {
    Lightbox.openModal($scope.ceremony, index);
  	} 
  }

}])

app.controller('ReceptionCtrl', ['$scope', '$state', 'Lightbox', 
	function($scope, $state, Lightbox) {

	// reception
$scope.reception = [  

  {'url': 'https://s26.postimg.org/apy5kpb0p/Kendall_Greg_The_Story_242.jpg'}, 
  {'url': 'https://s26.postimg.org/8zf4j7thl/Kendall_Greg_The_Story_244.jpg'},
  {'url': 'https://s26.postimg.org/njw7e1og9/Kendall_Greg_The_Story_246.jpg'}, 
  // 'images/Kendall+Greg(TheStory)248.jpg'
  {'url': 'https://s26.postimg.org/lgls6dond/Kendall_Greg_The_Story_249.jpg'}, 

  {'url': 'https://s26.postimg.org/ct3zemlft/Kendall_Greg_details_015.jpg'},

  {'url': 'https://s26.postimg.org/jq2r4w749/Kendall_Greg_The_Story_251.jpg'},
  // 'images/Kendall+Greg(details)013.jpg',

  {'url': 'https://s26.postimg.org/5w9t23p55/Kendall_Greg_details_032.jpg'},
  {'url': 'https://s26.postimg.org/4v9kcz85l/Kendall_Greg_details_034.jpg'},
  // 'images/Kendall+Greg(TheStory)252.jpg', 

  {'url': 'images/Kendall+Greg(TheStory)253.jpg'},
  // 'images/Kendall+Greg(TheStory)254.jpg', 
  {'url': 'https://s26.postimg.org/w2124n5l5/Kendall_Greg_details_027.jpg'},
  {'url': 'https://s26.postimg.org/3mlorcg7d/Kendall_Greg_details_024.jpg'},
  {'url': 'https://s26.postimg.org/fczm8q8zt/Kendall_Greg_details_025.jpg'},
  {'url': 'https://s26.postimg.org/f6lx5mzux/Kendall_Greg_details_048.jpg'},

  {'url': 'images/Kendall+Greg(TheStory)255.jpg'},
  
  {'url': 'https://s26.postimg.org/nnq0uatxl/Kendall_Greg_The_Story_256.jpg'}, 
  {'url': 'images/Kendall+Greg(TheStory)258.jpg'},
  {'url': 'images/Kendall+Greg(TheStory)260.jpg'}, 
  
  {'url': 'https://s26.postimg.org/vhqmfp1qh/Kendall_Greg_The_Story_262.jpg'},
  // 'images/Kendall+Greg(TheStory)263.jpg', 
  {'url': 'https://s26.postimg.org/72ieen2tl/Kendall_Greg_The_Story_265.jpg'},
  // 'images/Kendall+Greg(TheStory)266.jpg', 'images/Kendall+Greg(TheStory)267.jpg',
  {'url': 'images/Kendall+Greg(TheStory)272.jpg'}, 
  {'url': 'images/Kendall+Greg(TheStory)273.jpg'},
  // 'images/Kendall+Greg(TheStory)275.jpg', 
  // 'images/Kendall+Greg(TheStory)276.jpg',
  {'url': 'images/Kendall+Greg(TheStory)277.jpg'}, 
  {'url': 'https://s26.postimg.org/joo7xqfwp/Kendall_Greg_details_028.jpg'},

  {'url': 'https://s26.postimg.org/t2yqv9lhl/Kendall_Greg_The_Story_239.jpg'}, 
  {'url': 'https://s26.postimg.org/th02uv5l5/Kendall_Greg_The_Story_240.jpg'},

  {'url': 'https://s26.postimg.org/sqgjgkhzd/Kendall_Greg_The_Story_340.jpg'},
	{'url': 'https://s26.postimg.org/j9m4w78qx/Kendall_Greg_The_Story_314.jpg'},
  {'url': 'https://s26.postimg.org/6ee59fthl/Kendall_Greg_The_Story_307.jpg'},
  {'url': 'images/Kendall+Greg(TheStory)309.jpg'}, 
  {'url': 'https://s26.postimg.org/3lkxpet55/Kendall_Greg_The_Story_310.jpg'},
  {'url': 'https://s26.postimg.org/sg4fjhdzd/Kendall_Greg_The_Story_311.jpg'}, 
  // 'images/Kendall+Greg(TheStory)313.jpg',
   // 'images/Kendall+Greg(TheStory)315.jpg',
  {'url': 'images/Kendall+Greg(TheStory)316.jpg'}, 
  // 'images/Kendall+Greg(TheStory)322.jpg',
  {'url': 'https://s26.postimg.org/lfgfqpc7d/Kendall_Greg_The_Story_325.jpg'}, 
  {'url': 'images/Kendall+Greg(TheStory)324.jpg'},
  {'url': 'https://s26.postimg.org/h7lnhyart/Kendall_Greg_The_Story_326.jpg'}, 
  {'url': 'https://s26.postimg.org/93djd7ocp/Kendall_Greg_The_Story_327.jpg'},
  {'url': 'https://s26.postimg.org/wivgik83t/Kendall_Greg_The_Story_329.jpg'}, 

  {'url': 'images/Kendall+Greg(TheStory)330.jpg'},

  {'url': 'https://s26.postimg.org/9iot68aa1/Kendall_Greg_The_Story_331.jpg'}, 
  {'url': 'images/Kendall+Greg(TheStory)332.jpg'},
  // 'images/Kendall+Greg(TheStory)333.jpg', 
  {'url': 'https://s26.postimg.org/3vsg8r7rd/Kendall_Greg_The_Story_335.jpg'},
  {'url': 'images/Kendall+Greg(TheStory)338.jpg'}, 
  
  {'url': 'images/Kendall+Greg(TheStory)341.jpg'}, 
  {'url': 'https://s26.postimg.org/8kd1hombt/Kendall_Greg_The_Story_343.jpg'},
  // 'images/Kendall+Greg(details)034.jpg',
  {'url': 'https://s26.postimg.org/wcmct7ocp/Kendall_Greg_The_Story_345.jpg'}, 

  {'url': 'images/Kendall+Greg(TheStory)347.jpg'}, 
  {'url': 'images/Kendall+Greg(TheStory)356.jpg'},
  {'url': 'https://s26.postimg.org/wdwammq6h/Kendall_Greg_The_Story_358.jpg'}, 
  // 'images/Kendall+Greg(TheStory)364.jpg',
  {'url': 'images/Kendall+Greg(TheStory)365.jpg'}, 
  {'url': 'images/Kendall+Greg(TheStory)366.jpg'},
  {'url': 'images/Kendall+Greg(TheStory)367.jpg'}, 
  {'url': 'https://s26.postimg.org/qe8jiz5e1/Kendall_Greg_The_Story_369.jpg'},
  // 'images/Kendall+Greg(TheStory)370.jpg', 
  {'url': 'images/Kendall+Greg(TheStory)371.jpg'},
  // 'images/Kendall+Greg(TheStory)372.jpg', 
  // 'images/Kendall+Greg(TheStory)373.jpg',
  // 'images/Kendall+Greg(TheStory)377.jpg', 
  {'url': 'https://s26.postimg.org/9rqz9wcg9/Kendall_Greg_The_Story_379.jpg'},
  {'url': 'https://s26.postimg.org/ibad7nksp/Kendall_Greg_The_Story_381.jpg'}, 
  {'url': 'images/Kendall+Greg(TheStory)383.jpg'},
  {'url': 'images/Kendall+Greg(TheStory)384.jpg'}, 
  {'url': 'https://s26.postimg.org/464k5ubrd/Kendall_Greg_The_Story_391.jpg'},
  {'url': 'https://s26.postimg.org/bamdevj0p/Kendall_Greg_The_Story_392.jpg'}, 
  {'url': 'https://s26.postimg.org/hcu05d7gp/Kendall_Greg_The_Story_393.jpg'},

  {'url': 'https://s26.postimg.org/kw25py615/Kendall_Greg_details_054.jpg'}  
	]

	 $scope.openLightboxModal = function (index) {
  	if (window.innerWidth > 640) {
    Lightbox.openModal($scope.reception, index);
  	} 
  }

	$state.go('Reception')

}])

app.controller('SunsetCtrl', ['$scope', '$state', 'Lightbox', function($scope, $state, Lightbox) {

	$scope.sunset = [
		{'url': 'https://s26.postimg.org/wzg7lmex5/Kendall_Greg_The_Story_283.jpg'}, 
	  {'url': 'https://s26.postimg.org/50m1urdah/Kendall_Greg_The_Story_285.jpg'}, 
	  {'url': 'https://s26.postimg.org/3zlt5mwax/Kendall_Greg_The_Story_286.jpg'}, 
	  {'url': 'https://s26.postimg.org/iwua6n9jd/Kendall_Greg_The_Story_287.jpg'}, 
	  {'url': 'images/Kendall+Greg(TheStory)289.jpg'}, 
	  {'url': 'https://s26.postimg.org/jnn0cfbwp/Kendall_Greg_The_Story_292.jpg'}, 
	  {'url': 'images/Kendall+Greg(TheStory)294.jpg'}, 
	  {'url': 'images/Kendall+Greg(TheStory)297.jpg'}, 
	  {'url': 'images/Kendall+Greg(TheStory)298.jpg'}, 
	  {'url': 'images/Kendall+Greg(TheStory)299.jpg'}, 
	  {'url': 'images/Kendall+Greg(TheStory)300.jpg'}, 
	  {'url': 'images/Kendall+Greg(TheStory)302.jpg'}, 
	  {'url': 'images/Kendall+Greg(TheStory)303.jpg'}, 
	  {'url': 'https://s26.postimg.org/55pt4fkll/Kendall_Greg_The_Story_304.jpg'}, 
  ]

  $scope.openLightboxModal = function (index) {
  	if (window.innerWidth > 640) {
    Lightbox.openModal($scope.sunset, index);
  	} 
  }

  $state.go('SunsetPhotos')

}])


