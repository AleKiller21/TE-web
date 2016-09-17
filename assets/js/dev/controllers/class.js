"use strict";

var app = angular.module('TEapp');

app.controller( 'ClassController', function( $scope, $routeParams, config ){
	var vm = this;

	vm.data = {
		class:{
				title: "Tecnologias Emergentes",
				img: config.imgPath + "vr1.jpeg",
				desc: "Lorem ipsum dolor sit amet, id pro mundi omnium bonorum, mei decore aliquam et. Suscipit delectus temporibus his no, per sumo propriae volutpat id. Mea ludus expetendis eu, aeterno forensibus ne pri, ad eos nulla decore quodsi. Putant perfecto id mei, labore expetendis et est. Ea dignissim repudiandae sed, mediocrem definitiones mediocritatem no qui. Stet aeterno te sit. Eum summo intellegam et, velit hendrerit eum ea, ad tibique lucilius erroribus nec. Usu altera intellegebat id, eu malis iusto torquatos cum. Graece cetero accusamus te per. Esse alienum fierent ad per, eum putent fierent blandit te, te usu congue dissentias. Percipitur disputationi vel cu, homero eripuit molestiae no mea, eum quidam noster luptatum ad.Cu duo veri utroque placerat. Eos vide homero dolore id, option labitur fabulas ius et. Eum adhuc graece delicata cu, mundi quodsi duo ad. Vis dolor nominavi sapientem ut, soleat utamur omittantur nec ei. Dico utamur sea id. Ei ius graecis legendos, id vim denique tractatos liberavisse. An duo soluta everti iracundia. Sed ut nobis tation volutpat, ius elitr noluisse patrioque id. In mel illud modus putant, pro wisi copiosae dissentias an. Rebum tempor cotidieque no mel, vim ignota denique te. Eam doctus adolescens neglegentur an, id has ferri libris inimicus. Ea nec quodsi oportere posidonium. Consul maiestatis his eu, ius aperiam omnesque ut. Autem nobis per ad. Id his maiorum perfecto, usu in docendi alienum, te ius vidit assentior.",
				link: "/access?id="+$routeParams.id
			}
		};
} );