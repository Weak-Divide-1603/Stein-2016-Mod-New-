// why have I done this to myself, I hate both the Reddit and the Discord for forcing me to add this - MAKE UP YOUR FUCKING MINDS
if (window.localStorage.getItem("margin_form") == "#C9C9C9") {
	campaignTrail_temp.margin_format = "#C9C9C9"
} else {
	campaignTrail_temp.margin_format = "#FFFFFF"
}
function creatorChange()
{
element=document.getElementById("creatorPara")
	
if(document.getElementById("election_id").value==69)
{
element.innerHTML="This scenario was made by tex"
}
else
{
element.innerHTML="This scenario was made by Dan Bryan"
}
}	
function encode(str) {
 
      
    const revArray = [];
    const length = str.length - 1;
      
    for(let i = length; i >= 0; i--) {
        revArray.push(str[i]);
    }
      
    return revArray.join('');
}

function gradient(interval, min, max) {
	if (interval < min) {
		return min
	} else if (interval > max) {
		return max
	} else {
		return interval
	}
}
////https://codepen.io/njmcode/pen/axoyD/

// Converts a #ffffff hex string into an [r,g,b] array
var h2r = function(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? [
        parseInt(result[1], 16),
        parseInt(result[2], 16),
        parseInt(result[3], 16)
    ] : null;
};

// Inverse of the above
var r2h = function(rgb) {
    return "#" + ((1 << 24) + (rgb[0] << 16) + (rgb[1] << 8) + rgb[2]).toString(16).slice(1);
};

// Interpolates two [r,g,b] colors and returns an [r,g,b] of the result
// Taken from the awesome ROT.js roguelike dev library at
// https://github.com/ondras/rot.js
var _interpolateColor = function(color1, color2, factor) {
  if (arguments.length < 3) { factor = 0.5; }
  var result = color1.slice();
  for (var i=0;i<3;i++) {
    result[i] = Math.round(result[i] + factor*(color2[i]-color1[i]));
  }
  return result;
};

var rgb2hsl = function(color) {
  var r = color[0]/255;
  var g = color[1]/255;
  var b = color[2]/255;

  var max = Math.max(r, g, b), min = Math.min(r, g, b);
  var h, s, l = (max + min) / 2;

  if (max == min) {
    h = s = 0; // achromatic
  } else {
    var d = max - min;
    s = (l > 0.5 ? d / (2 - max - min) : d / (max + min));
    switch(max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      case b: h = (r - g) / d + 4; break;
    }
    h /= 6;
  }

  return [h, s, l];
};

var hsl2rgb = function(color) {
  var l = color[2];

  if (color[1] == 0) {
    l = Math.round(l*255);
    return [l, l, l];
  } else {
    function hue2rgb(p, q, t) {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1/6) return p + (q - p) * 6 * t;
      if (t < 1/2) return q;
      if (t < 2/3) return p + (q - p) * (2/3 - t) * 6;
      return p;
    }

    var s = color[1];
    var q = (l < 0.5 ? l * (1 + s) : l + s - l * s);
    var p = 2 * l - q;
    var r = hue2rgb(p, q, color[0] + 1/3);
    var g = hue2rgb(p, q, color[0]);
    var b = hue2rgb(p, q, color[0] - 1/3);
    return [Math.round(r*255), Math.round(g*255), Math.round(b*255)];
  }
};

var _interpolateHSL = function(color1, color2, factor) {
  if (arguments.length < 3) { factor = 0.5; }
  var hsl1 = rgb2hsl(color1);
  var hsl2 = rgb2hsl(color2);
  for (var i=0;i<3;i++) {
    hsl1[i] += factor*(hsl2[i]-hsl1[i]);
  }
  return hsl2rgb(hsl1);
};

	function csrfToken() {

	    return function(e) {
	        var t = null;
	        if (document.cookie && "" != document.cookie)
	            for (var i = document.cookie.split(";"), a = 0; a < i.length; a++) {
	                var s = jQuery.trim(i[a]);
	                if (s.substring(0, e.length + 1) == e + "=") {
	                    t = decodeURIComponent(s.substring(e.length + 1));
	                    break
	                }
	            }
	        return t
	    }("csrftoken")
	}

	slrr = ""
	rrr = ""
	starting_mult = 0
	encrypted = Math.round(Math.random()*100)
	t = ""
	nnn = ""

	function switchPV() {
		// switchingEst, rrr, _, pvswitcher
		swE = document.getElementById("switchingEst")
		if (swE.innerHTML == rrr) {
			swE.innerHTML = slrr
			pvswitcher.innerText = "Switch to Popular Vote Estimate"
		} else {
			swE.innerHTML = rrr
			pvswitcher.innerText = "Switch to State Estimate"
		}
		document.getElementById("ev_est").style.display = ""
	}

	function evest() {
		document.getElementById("ev_est").style.display = "none"
		swE = document.getElementById("switchingEst")
		swE.innerHTML = nnn
	}

	function containsObject(obj, list) {
	    var i;
	    for (i = 0; i < list.length; i++) {
	        if (list[i] === obj) {
	            return true;
	        }
	    }

    	return false;
	}

	function copy(mainObject) {
		let objectCopy = {}; // objectCopy will store a copy of the mainObject
		let key;
		for (key in mainObject) {
		    objectCopy[key] = mainObject[key]; // copies each property to the objectCopy object
		}
		return objectCopy;
	}

	modded = false
	i = 1
	moddercheckeror = false
	code222 = []
	kill = false
	important_info = ""
	function sussyroth(){return campaignTrail_temp.iamapoopybuttfaceandhavenolife}

	function loadMod(code1, code2) {
	    kill = false
	    if (moddercheckeror == false) {
	    	eval(code1)
	    	moddercheckeror = true
			var important_code = setInterval(function() {
				if ($("#answer_select_button")[0] != null  && kill == false) {
					eval(code2)
					console.log(code2)
					if (kill == false)
	    				kill = true
				}
				i += 1
			}, 1000);
		}
	}



	function endingPicker(out, totv, aa, quickstats) {
		//out = "win", "loss", or "tie" for your candidate
		//totv = total votes in entire election
		//aa = all final overall results data
		//quickstat = relevant data on candidate performance (format: your candidate's electoral vote count, your candidate's popular vote share, your candidate's raw vote total)

		if (important_info != "") {
			a = new Function("out", "totv", "aa", "quickstats", important_info)(out, totv, aa, quickstats)
			return a
		} else {
			return "<font id='monologue' face='Comic Sans MS'>* heya<br>* is anyone there?<br>* well... just calling to ask.<br>* you really like to challenge yourself, huh...?<br>*well... good job.<br>* just promise not to brag about it, okay?<br>* ... guess i should say something else, too.<br><button onclick='nextPage()'>Next Page</button></font>"
		}
	}

	function modSelectChange() {
		if ($("#modSelect")[0].value == "other") {
			$("#customMenu")[0].style.display = "block"
		} else {
			$("#customMenu")[0].style.display = "none"
		}
	}

function download(content, fileName, contentType) {
    var a = document.createElement("a");
    var file = new Blob([content], {
        type: contentType
    });
    a.href = URL.createObjectURL(file);
    a.download = fileName;
    a.click();
}
function exportResults() {
if(campaignTrail_temp.iamapoopybuttfaceandhavenolife !=true && dirtyhacker3 == null)
{
results = {
        election_id: campaignTrail_temp.election_id,
        player_candidate: campaignTrail_temp.candidate_id,
        player_answers: campaignTrail_temp.player_answers,
        player_visits: campaignTrail_temp.player_visits,
        overall_results: campaignTrail_temp.final_overall_results,
        state_results: campaignTrail_temp.final_state_results,
        difficulty_multiplier: campaignTrail_temp.difficulty_level_multiplier,
	starting_mult: starting_mult
    }	   
}	   
else
{
results = {
        election_id: campaignTrail_temp.election_id,
        player_candidate: campaignTrail_temp.candidate_id,
        player_answers: campaignTrail_temp.player_answers,
        player_visits: campaignTrail_temp.player_visits,
        overall_results: campaignTrail_temp.final_overall_results,
        state_results: campaignTrail_temp.final_state_results,
        difficulty_multiplier: 696969,
	starting_mult: starting_mult
    }	
}	
	
   coded=encode(btoa(JSON.stringify(results)))
	//coded=JSON.stringify(results)
    download(coded, "results.json", 'text/plain')
}
	
	diff_mod = false

	$("#submitMod").click(function() {
		if ($("#importfile")[0].value !="") 
		{
const content = document.querySelector('.content');
const [file] = document.querySelector('input[type=file]').files;
const reader = new FileReader();

reader.onload = function(fle) {
    importedtext=fle.target.result
		importedtext=encode(importedtext)
		importedtext=atob(importedtext)
	campaignTrail_temp.dagakotowaru=importedtext
 }
reader.readAsText(file);			
		}
		 if ($("#modSelect")[0].value == "other") 
		 {
			important_info = $("#codeset3")[0].value;
			if (important_info != "") {
				campaignTrail_temp.multiple_endings = true
			}
			loadMod($("#codeset1")[0].value, $("#codeset2")[0].value)
		} else {
			var client = new XMLHttpRequest();
			client.open('GET', "../static/mods/"+$("#modSelect")[0].value+"_init.html");
			client.onreadystatechange = function() {
				eval(client.responseText)
			}
			client.send();
			diff_mod = true
			try {
				var client2 = new XMLHttpRequest();
				client2.open('GET', "../static/mods/"+$("#modSelect")[0].value+"_ending.html");
				client2.onreadystatechange = function() {
					important_info = client2.responseText
				}
				client2.send();
			} catch {
				console.log("what")
			}
		}
		$("#modloaddiv")[0].style.display = 'none'
		$("#modLoadReveal")[0].style.display = 'none'
		modded = true
	})

	function divideElectoralVotesProp(e, t) {
	    for (var i = [], a = 0, s = 0; s < e.length; s++) {
	        var n = Math.floor(e[s] * t);
	        i.push(n), a += n
	    }
	    return i[0] += t - a, i
	}! function() {
	    var e = campaignTrail_temp;

	    function t() {
	        for (var t = -1, i = 0; i < e.candidate_json.length; i++)
	            if (e.candidate_json[i].pk == candidate_id.value) {
	                t = i;
	                break
	            } $("#candidate_description_window").html('<div class="person_image" id="candidate_image">            <img src="' + e.candidate_json[t].fields.image_url + '" width="210" height="250"/>        </div>        <div class="person_summary" id="candidate_summary">        <ul><li>Name: ' + e.candidate_json[t].fields.first_name + " " + e.candidate_json[t].fields.last_name + "</li>        <li>Party: " + e.candidate_json[t].fields.party + "</li>        <li>Home State: " + e.candidate_json[t].fields.state + "</li>        </ul>" + e.candidate_json[t].fields.description + "</div>")
	    }

	    function i() {
	        for (var t = -1, i = 0; i < e.candidate_json.length; i++)
	            if (e.candidate_json[i].pk == running_mate_id.value) {
	                t = i;
	                break
	            } $("#running_mate_description_window").html('<div class="person_image" id="running_mate_image">            <img src="' + e.candidate_json[t].fields.image_url + '" width="210" height="250"/>        </div>        <div class="person_summary" id="running_mate_summary">        <ul><li>Name: ' + e.candidate_json[t].fields.first_name + " " + e.candidate_json[t].fields.last_name + "</li>        <li>Party: " + e.candidate_json[t].fields.party + "</li>        <li>Home State: " + e.candidate_json[t].fields.state + "</li>        </ul>" + e.candidate_json[t].fields.description_as_running_mate + "</div>")
	    }

	    function a(e) {
	        switch (e) {
	            case "1":
	                var t = "<p><strong>Use the default method of allocating electoral votes for each state.</strong></p>                 <p>In the vast majority of cases, states use a winner-take-all method. For instance,                 if Candiate A defeats Candidate B in a state, worth 20 electoral votes, Candidate                 A will usually win all 20 votes.</p>                 <p>This method tends to concentrate the election into a handful of swing states.                 It also makes it difficult for third-party candidates to win electoral votes. On                 the other hand, it is easier for a single candidate to gain an overall majority of the                 electoral votes.</p>";
	                $("#opponent_selection_description_window").html(t);
	                break;
	            case "2":
	                t = "<p><strong>Allocate each state's electoral votes proportionally.</strong></p>                <p>Under this method, all candidates split the electoral votes in a state, in                 proportion to their popular vote %.</p>                <p>There is still an advantage to winning a state -- the winner of the state will                 always receive a plurality of electoral votes. For instance, in a state with                 4 electoral votes, if Candidate A wins 51% of the vote, they will be awarded 3                 electoral votes.</p>                <p>Compared to a winner-take-all method, this method aligns the electoral vote                 more closely with the popular vote. It also makes it easier to third party                 candidates to increase their electoral vote totals. In some scenarios, this effect                 is highly significant on the final outcome. Some examples are 1860, 1948, 1968, and 2000. </p>";
	                $("#opponent_selection_description_window").html(t)
	        }
	    }

	    function findFromPK(array, pk) {
	    	a = 0
	    	for (i in array) {
	    		if (array[i].pk == pk) {
	    			a = i
	    			break
	    		}
	    	}
	    	return a;
	    }

	    ree = {}
	    console.log(campaignTrail_temp)
	    window.setTimeout(function(){
	    	ree = copy(campaignTrail_temp)
			}, 600)

	    function election_HTML(id, cand, running_mate) {
	    	if (id != 16) {
	    		if (modded) {
	    			yearbit = ree.election_json[findFromPK(ree.election_json, id)].fields.year
	    			lastnamebit = ree.candidate_json[findFromPK(ree.candidate_json, campaignTrail_temp.candidate_id)].fields.last_name
	    			veeplastname = ree.candidate_json[findFromPK(ree.candidate_json, campaignTrail_temp.running_mate_id)].fields.last_name
	    			return yearbit+"_"+lastnamebit+"_"+veeplastname+".html"
	    		} else{
	    			return campaignTrail_temp.election_json[findFromPK(campaignTrail_temp.election_json, id)].fields.year+"_"+campaignTrail_temp.candidate_json[findFromPK(campaignTrail_temp.candidate_json, cand)].fields.last_name+"_"+campaignTrail_temp.candidate_json[findFromPK(campaignTrail_temp.candidate_json, running_mate)].fields.last_name+".html"
	    		}
	    	} else if (id == 16) {
	    		return "2016a_"+campaignTrail_temp.candidate_json[findFromPK(campaignTrail_temp.candidate_json, cand)].fields.last_name+"_"+campaignTrail_temp.candidate_json[findFromPK(campaignTrail_temp.candidate_json, running_mate)].fields.last_name+".html"
	    	}
	    }

	    function s(t, i, l) {
	        for (var o = "", r = 0; r < e.difficulty_level_json.length; r++) "Normal" == e.difficulty_level_json[r].fields.name ? o += "<option value=" + e.difficulty_level_json[r].pk + " selected>" + e.difficulty_level_json[r].fields.name + "</option>" : o += "<option value=" + e.difficulty_level_json[r].pk + ">" + e.difficulty_level_json[r].fields.name + "</option>";
	        var d = '        <div class="game_header">        <h2>NEW CAMPAIGN TRAIL</h2>        </div>        <div class="inner_window_w_desc" id="inner_window_4">            <div id="game_options">            <form name="game_type_selection">            <p><h3>How would you like the electoral votes to be allocated?</h3>            <select name="game_type_id" id="game_type_id">                <option value=1>Default (Winner-Take-All)</option>                <option value=2>Proportional</option>            </select>            </p>            </form>            </div>            <div class="description_window_small"                 id="opponent_selection_description_window">            </div>            <div id="difficulty_level">            <form name="difficulty_level_selection">            <p><h3>Please choose your difficulty level:</h3>            <select name="difficulty_level_id" id="difficulty_level_id">' + o + '</select>            </p>            </form>            </div>        <p id="opponent_selection_id_button_p">        <button class="person_button" id="opponent_selection_id_button">Continue</button>        </p>        </div>';
	        $("#game_window").html(d), $("#game_type_id").ready(function() {
	            a($("select[name=game_type_id]").val())
			
	        }), $("#game_type_id").change(function() {
	            a($("select[name=game_type_id]").val())
	        }), $("#opponent_selection_id_button").click(function() {
	            $("#opponent_selection_id_button").replaceWith("<em>One moment...</em>");
	            for (var a = [], o = [], r = 0; r < e.candidate_dropout_json.length; r++) e.candidate_dropout_json[r].fields.candidate == i && a.push(e.candidate_dropout_json[r].fields.affected_candidate);
	            var d = -1;
	            for (r = 0; r < e.opponents_default_json.length; r++)
	                if (e.opponents_default_json[r].election == t) {
	                    d = r;
	                    break
	                } for (r = 0; r < e.opponents_default_json[d].candidates.length; r++) e.opponents_default_json[d].candidates[r] != i && -1 == a.indexOf(e.opponents_default_json[d].candidates[r]) && o.push(e.opponents_default_json[d].candidates[r]);
	            e.election_id = t, e.candidate_id = i, e.running_mate_id = l, e.opponents_list = o, e.game_type_id = $("select[name=game_type_id]").val(), e.difficulty_level_id = $("select[name=difficulty_level_id]").val();
	            var c = $("select[name=difficulty_level_id]").val();
	            for ($("select[name=game_type_id]").val(), d = -1, r = 0; r < e.difficulty_level_json.length; r++)
	                if (e.difficulty_level_json[r].pk == $("select[name=difficulty_level_id]").val()) {
	                    d = r;
	                    break
	                } e.difficulty_level_multiplier = e.difficulty_level_json[d].fields.multiplier, starting_mult = encrypted + e.difficulty_level_json[d].fields.multiplier,
	                function(t, i, a, l, o) {
	                	if (campaignTrail_temp.musicOn) {
	                		document.getElementById("music_player").style.display=""
	                		document.getElementById('campaigntrailmusic').src = campaignTrail_temp.musicSrc
						}
						if (campaignTrail_temp.iamapoopybuttfaceandhavenolife) {
							document.getElementById('cheatmode').style.display=""
						}
	                	if (modded == false){
		                	aaa = election_HTML(t, i, a)
		                	aaa = "../static/questionset/"+aaa
		                	$("#game_window").load(aaa)
		                	e.question_number = 0, e.questions_json = campaignTrail_temp.questions_json, e.answers_json = campaignTrail_temp.answers_json, e.states_json = campaignTrail_temp.states_json, e.issues_json = campaignTrail_temp.issues_json, e.state_issue_score_json = campaignTrail_temp.state_issue_score_json, e.candidate_issue_score_json = campaignTrail_temp.candidate_issue_score_json, e.running_mate_issue_score_json = campaignTrail_temp.running_mate_issue_score_json, e.candidate_state_multiplier_json = campaignTrail_temp.candidate_state_multiplier_json, e.answer_score_global_json = campaignTrail_temp.answer_score_global_json, e.answer_score_issue_json = campaignTrail_temp.answer_score_issue_json, e.answer_score_state_json = campaignTrail_temp.answer_score_state_json, e.answer_feedback_json = campaignTrail_temp.answer_feedback_json, e.candidate_image_url = campaignTrail_temp.candidate_image_url, e.running_mate_image_url = campaignTrail_temp.running_mate_image_url, e.candidate_last_name = campaignTrail_temp.candidate_last_name, e.running_mate_last_name = campaignTrail_temp.running_mate_last_name, e.running_mate_state_id = campaignTrail_temp.running_mate_state_id, e.player_answers = campaignTrail_temp.player_answers, e.player_visits = campaignTrail_temp.player_visits, e.answer_feedback_flg = campaignTrail_temp.answer_feedback_flg, e.election_id = Number(e.election_id), e.candidate_id = Number(e.candidate_id), e.running_mate_id = Number(e.running_mate_id), e.difficulty_level_id = Number(e.difficulty_level_id), e.game_start_logging_id = Number(campaignTrail_temp.game_start_logging_id)
		                			                		    	function copy(L){let t={},e;for(e in L)t[e]=L[e];return t}const mainObject={a:1,b:3,c:{x:5,y:4}};console.log(copy(mainObject)),function(b,s){var a={stateStyles:{fill:"#333",stroke:"#666","stroke-width":1,"stroke-linejoin":"round",scale:[1,1]},stateHoverStyles:{fill:"#33c",stroke:"#000",scale:[1.1,1.1]},stateHoverAnimation:500,stateSpecificStyles:{},stateSpecificHoverStyles:{},click:null,mouseover:null,mouseout:null,clickState:{},mouseoverState:{},mouseoutState:{},showLabels:!0,labelWidth:20,labelHeight:15,labelGap:6,labelRadius:3,labelBackingStyles:{fill:"#333",stroke:"#666","stroke-width":1,"stroke-linejoin":"round",scale:[1,1]},labelBackingHoverStyles:{fill:"#33c",stroke:"#000"},stateSpecificLabelBackingStyles:{},stateSpecificLabelBackingHoverStyles:{},labelTextStyles:{fill:"#fff",stroke:"none","font-weight":300,"stroke-width":0,"font-size":"10px"},labelTextHoverStyles:{},stateSpecificLabelTextStyles:{},stateSpecificLabelTextHoverStyles:{}},L={_init:function(L){this.options={},b.extend(this.options,a,L);var t=this.element.width(),e=this.element.height(),i=this.element.width()/930,L=this.element.height()/630;this.scale=Math.min(i,L),this.labelAreaWidth=Math.ceil(70/this.scale);L=930+Math.max(0,this.labelAreaWidth-70);this.paper=s(this.element.get(0),L,630),this.paper.setSize(t,e),this.paper.setViewBox(0,0,L,630,!1),this.stateHitAreas={},this.stateShapes={},this.topShape=null,this._initCreateStates(),this.labelShapes={},this.labelTexts={},this.labelHitAreas={},this.options.showLabels&&this._initCreateLabels()},_initCreateStates:function(){var L,t,e=this.options.stateStyles,i=this.paper,s={AK:"M 158.07671,453.67502 L 157.75339,539.03215 L 159.36999,540.00211 L 162.44156,540.16377 L 163.8965,539.03215 L 166.48308,539.03215 L 166.64475,541.94205 L 173.59618,548.73182 L 174.08117,551.3184 L 177.47605,549.37846 L 178.1227,549.2168 L 178.44602,546.14524 L 179.90096,544.52863 L 181.0326,544.36697 L 182.97253,542.91201 L 186.04409,545.01361 L 186.69074,547.92352 L 188.63067,549.05514 L 189.7623,551.48006 L 193.64218,553.25833 L 197.03706,559.2398 L 199.78529,563.11966 L 202.04855,565.86791 L 203.50351,569.58611 L 208.515,571.36439 L 213.68817,573.46598 L 214.65813,577.83084 L 215.14311,580.9024 L 214.17315,584.29729 L 212.39487,586.56054 L 210.77826,585.75224 L 209.32331,582.68067 L 206.57507,581.22573 L 204.7968,580.09409 L 203.98849,580.9024 L 205.44344,583.65065 L 205.6051,587.36885 L 204.47347,587.85383 L 202.53354,585.9139 L 200.43195,584.62061 L 200.91693,586.23722 L 202.21021,588.0155 L 201.40191,588.8238 C 201.40191,588.8238 200.59361,588.50048 200.10863,587.85383 C 199.62363,587.20719 198.00703,584.45895 198.00703,584.45895 L 197.03706,582.19569 C 197.03706,582.19569 196.71374,583.48898 196.06709,583.16565 C 195.42044,582.84233 194.7738,581.71071 194.7738,581.71071 L 196.55207,579.77077 L 195.09712,578.31582 L 195.09712,573.30432 L 194.28882,573.30432 L 193.48052,576.6992 L 192.34888,577.1842 L 191.37892,573.46598 L 190.73227,569.74777 L 189.92396,569.26279 L 190.24729,574.92094 L 190.24729,576.05256 L 188.79233,574.75928 L 185.23579,568.77781 L 183.13419,568.29283 L 182.48755,564.57462 L 180.87094,561.66472 L 179.25432,560.53308 L 179.25432,558.26983 L 181.35592,556.97654 L 180.87094,556.65322 L 178.28436,557.29986 L 174.88947,554.87495 L 172.30289,551.96504 L 167.45306,549.37846 L 163.41152,546.79188 L 164.70482,543.55866 L 164.70482,541.94205 L 162.92654,543.55866 L 160.01664,544.69029 L 156.29843,543.55866 L 150.64028,541.13375 L 145.14381,541.13375 L 144.49717,541.61873 L 138.03072,537.73885 L 135.92912,537.41553 L 133.18088,531.59573 L 129.62433,531.91905 L 126.06778,533.374 L 126.55277,537.90052 L 127.68439,534.99062 L 128.65437,535.31394 L 127.19941,539.67879 L 130.43263,536.93055 L 131.07928,538.54716 L 127.19941,542.91201 L 125.90612,542.58869 L 125.42114,540.64875 L 124.12785,539.84045 L 122.83456,540.97208 L 120.08632,539.19381 L 117.01475,541.29541 L 115.23649,543.397 L 111.8416,545.4986 L 107.15342,545.33693 L 106.66844,543.23534 L 110.38664,542.58869 L 110.38664,541.29541 L 108.12338,540.64875 L 109.09336,538.22384 L 111.35661,534.34397 L 111.35661,532.5657 L 111.51827,531.75739 L 115.88313,529.49413 L 116.85309,530.78742 L 119.60134,530.78742 L 118.30805,528.20085 L 114.58983,527.87752 L 109.57834,530.62576 L 107.15342,534.02064 L 105.37515,536.60723 L 104.24352,538.87049 L 100.04033,540.32543 L 96.96876,542.91201 L 96.645439,544.52863 L 98.908696,545.4986 L 99.717009,547.60018 L 96.96876,550.83341 L 90.502321,555.03661 L 82.742574,559.2398 L 80.640977,560.37142 L 75.306159,561.50306 L 69.971333,563.76631 L 71.749608,565.0596 L 70.294654,566.51455 L 69.809672,567.64618 L 67.061434,566.67621 L 63.828214,566.83787 L 63.019902,569.10113 L 62.049939,569.10113 L 62.37326,566.67621 L 58.816709,567.96951 L 55.90681,568.93947 L 52.511924,567.64618 L 49.602023,569.58611 L 46.368799,569.58611 L 44.267202,570.87941 L 42.65059,571.68771 L 40.548995,571.36439 L 37.962415,570.23276 L 35.699158,570.87941 L 34.729191,571.84937 L 33.112578,570.71775 L 33.112578,568.77781 L 36.184142,567.48452 L 42.488929,568.13117 L 46.853782,566.51455 L 48.955378,564.41296 L 51.86528,563.76631 L 53.643553,562.958 L 56.391794,563.11966 L 58.008406,564.41296 L 58.978369,564.08964 L 61.241626,561.3414 L 64.313196,560.37142 L 67.708076,559.72478 L 69.00137,559.40146 L 69.648012,559.88644 L 70.456324,559.88644 L 71.749608,556.16823 L 75.791141,554.71329 L 77.731077,550.99508 L 79.994336,546.46856 L 81.610951,545.01361 L 81.934272,542.42703 L 80.317657,543.72032 L 76.922764,544.36697 L 76.276122,541.94205 L 74.982838,541.61873 L 74.012865,542.58869 L 73.851205,545.4986 L 72.39625,545.33693 L 70.941306,539.51713 L 69.648012,540.81041 L 68.516388,540.32543 L 68.193068,538.3855 L 64.151535,538.54716 L 62.049939,539.67879 L 59.463361,539.35547 L 60.918305,537.90052 L 61.403286,535.31394 L 60.756645,533.374 L 62.211599,532.40404 L 63.504883,532.24238 L 62.858241,530.4641 L 62.858241,526.09925 L 61.888278,525.12928 L 61.079966,526.58423 L 54.936843,526.58423 L 53.481892,525.29094 L 52.835247,521.41108 L 50.733651,517.85452 L 50.733651,516.88456 L 52.835247,516.07625 L 52.996908,513.97465 L 54.128536,512.84303 L 53.320231,512.35805 L 52.026941,512.84303 L 50.895313,510.09479 L 51.86528,505.08328 L 56.391794,501.85007 L 58.978369,500.23345 L 60.918305,496.51525 L 63.666554,495.22195 L 66.253132,496.35359 L 66.576453,498.77851 L 69.00137,498.45517 L 72.23459,496.03026 L 73.851205,496.67691 L 74.821167,497.32355 L 76.437782,497.32355 L 78.701041,496.03026 L 79.509354,491.6654 C 79.509354,491.6654 79.832675,488.75551 80.479317,488.27052 C 81.125959,487.78554 81.44928,487.30056 81.44928,487.30056 L 80.317657,485.36062 L 77.731077,486.16893 L 74.497847,486.97723 L 72.557911,486.49225 L 69.00137,484.71397 L 63.989875,484.55231 L 60.433324,480.83411 L 60.918305,476.95424 L 61.564957,474.52932 L 59.463361,472.75105 L 57.523423,469.03283 L 58.008406,468.22453 L 64.798177,467.73955 L 66.899773,467.73955 L 67.869736,468.70951 L 68.516388,468.70951 L 68.354728,467.0929 L 72.23459,466.44626 L 74.821167,466.76958 L 76.276122,467.90121 L 74.821167,470.00281 L 74.336186,471.45775 L 77.084435,473.07437 L 82.095932,474.85264 L 83.874208,473.88268 L 81.610951,469.51783 L 80.640977,466.2846 L 81.610951,465.47629 L 78.21606,463.53636 L 77.731077,462.40472 L 78.21606,460.78812 L 77.407756,456.90825 L 74.497847,452.22007 L 72.072929,448.01688 L 74.982838,446.07694 L 78.21606,446.07694 L 79.994336,446.72359 L 84.197528,446.56193 L 87.915733,443.00539 L 89.047366,439.93382 L 92.765578,437.5089 L 94.382182,438.47887 L 97.130421,437.83222 L 100.84863,435.73062 L 101.98027,435.56896 L 102.95023,436.37728 L 107.47674,436.21561 L 110.22498,433.14405 L 111.35661,433.14405 L 114.91316,435.56896 L 116.85309,437.67056 L 116.36811,438.80219 L 117.01475,439.93382 L 118.63137,438.31721 L 122.51124,438.64053 L 122.83456,442.35873 L 124.7745,443.81369 L 131.88759,444.46033 L 138.19238,448.66352 L 139.64732,447.69356 L 144.82049,450.28014 L 146.92208,449.6335 L 148.86202,448.82518 L 153.71185,450.76512 L 158.07671,453.67502 z M 42.973913,482.61238 L 45.075509,487.9472 L 44.913847,488.91717 L 42.003945,488.59384 L 40.225672,484.55231 L 38.447399,483.09737 L 36.02248,483.09737 L 35.86082,480.51078 L 37.639093,478.08586 L 38.770722,480.51078 L 40.225672,481.96573 z M 40.387333,516.07625 L 44.105542,516.88456 L 47.823749,517.85452 L 48.632056,518.8245 L 47.015444,522.5427 L 43.94388,522.38104 L 40.548995,518.8245 z M 19.694697,502.01173 L 20.826327,504.5983 L 21.957955,506.21492 L 20.826327,507.02322 L 18.72473,503.95166 L 18.72473,502.01173 z M 5.9534943,575.0826 L 9.3483796,572.81934 L 12.743265,571.84937 L 15.329845,572.17269 L 15.814828,573.7893 L 17.754763,574.27429 L 19.694697,572.33436 L 19.371375,570.71775 L 22.119616,570.0711 L 25.029518,572.65768 L 23.897889,574.43595 L 19.533037,575.56758 L 16.784795,575.0826 L 13.066588,573.95097 L 8.7017347,575.40592 L 7.0851227,575.72924 z M 54.936843,570.55609 L 56.553455,572.49602 L 58.655048,570.87941 L 57.2001,569.58611 z M 57.846745,573.62764 L 58.978369,571.36439 L 61.079966,571.68771 L 60.271663,573.62764 z M 81.44928,571.68771 L 82.904234,573.46598 L 83.874208,572.33436 L 83.065895,570.39442 z M 90.17899,559.2398 L 91.310623,565.0596 L 94.220522,565.86791 L 99.232017,562.958 L 103.59687,560.37142 L 101.98027,557.94651 L 102.46525,555.52159 L 100.36365,556.81488 L 97.453752,556.00657 L 99.070357,554.87495 L 101.01029,555.68325 L 104.89016,553.90497 L 105.37515,552.45003 L 102.95023,551.64172 L 103.75853,549.70178 L 101.01029,551.64172 L 96.322118,555.19827 L 91.472284,558.10817 z M 132.53423,539.35547 L 134.95915,537.90052 L 133.98918,536.12224 L 132.21091,537.09221 z",FL:"M 755.39728,445.50676 L 757.66294,452.82536 L 761.39264,462.56762 L 766.72743,471.94392 L 770.44562,478.24868 L 775.29544,483.74514 L 779.33695,487.46333 L 780.95355,490.37322 L 779.82193,491.6665 L 779.01363,492.95978 L 781.92351,500.39617 L 784.8334,503.30605 L 787.41997,508.64085 L 790.9765,514.46063 L 795.50299,522.70531 L 796.79628,530.30335 L 797.28126,542.26623 L 797.9279,544.04449 L 797.60458,547.43936 L 795.17967,548.73265 L 795.50299,550.67257 L 794.85635,552.6125 L 795.17967,555.0374 L 795.66465,556.97733 L 792.91643,560.21054 L 789.84488,561.66548 L 785.96503,561.82714 L 784.51008,563.44375 L 782.08518,564.41371 L 780.79189,563.92873 L 779.66027,562.95877 L 779.33695,560.04888 L 778.52864,556.65401 L 775.13377,551.48087 L 771.57724,549.21763 L 767.69739,548.89431 L 766.88909,550.18759 L 763.81754,545.82276 L 763.1709,542.26623 L 760.58433,538.22472 L 758.80607,537.09309 L 757.18946,539.19468 L 755.4112,538.87136 L 753.30961,533.85988 L 750.39972,529.98003 L 747.48983,524.64524 L 744.90327,521.57369 L 741.34674,517.8555 L 743.44832,515.43059 L 746.68153,509.93413 L 746.51987,508.31753 L 741.99338,507.34757 L 740.37677,507.99421 L 740.7001,508.64085 L 743.28666,509.61081 L 741.83172,514.13731 L 741.02342,514.62229 L 739.24515,510.58078 L 737.95187,505.73096 L 737.62855,502.98273 L 739.08349,498.29458 L 739.08349,488.75661 L 736.01194,485.03842 L 734.71866,481.96687 L 729.54552,480.67359 L 727.6056,480.02695 L 725.98899,477.44038 L 722.59412,475.82377 L 721.4625,472.4289 L 718.71427,471.45894 L 716.28936,467.74075 L 712.08619,466.28581 L 709.1763,464.83086 L 706.58974,464.83086 L 702.54822,465.63917 L 702.38656,467.57909 L 703.19487,468.54905 L 702.70988,469.68068 L 699.63834,469.51902 L 695.92015,473.07555 L 692.36361,475.01547 L 688.48376,475.01547 L 685.25055,476.30876 L 684.92723,473.56053 L 683.31063,471.6206 L 680.40074,470.48898 L 678.78414,469.03403 L 670.70111,465.15418 L 663.10307,463.37592 L 658.73824,464.02256 L 652.7568,464.50754 L 646.77536,466.60913 L 643.29612,467.22209 L 643.0582,459.17234 L 640.47163,457.23242 L 638.69336,455.45415 L 639.01668,452.38259 L 649.2013,451.08931 L 674.7437,448.17942 L 681.53345,447.53278 L 686.96945,447.81305 L 689.55602,451.69291 L 691.01096,453.14785 L 699.10912,453.66307 L 709.92887,453.01643 L 731.44126,451.72314 L 736.88698,451.04877 L 741.46423,451.0765 L 741.62589,453.98639 L 745.44989,454.79469 L 745.77321,449.98792 L 744.15661,445.46141 L 745.11145,444.72869 L 750.22414,445.18344 z M 767.94269,577.91184 L 770.36761,577.2652 L 771.66089,577.02271 L 773.11585,574.67862 L 775.45993,573.06201 L 776.75322,573.547 L 778.45066,573.87032 L 778.85481,574.92111 L 775.37911,576.13357 L 771.17591,577.58852 L 768.83183,578.80098 z M 781.44139,572.90035 L 782.65385,573.95115 L 785.40209,571.84956 L 790.7369,567.64637 L 794.4551,563.7665 L 796.96085,557.1384 L 797.93082,555.44096 L 798.09248,552.04608 L 797.365,552.53106 L 796.39504,555.36013 L 794.94008,559.96746 L 791.70686,565.22146 L 787.34202,569.42464 L 783.94714,571.36457 z",SC:"M 761.23097,412.93785 L 759.45391,413.90735 L 756.86734,412.61406 L 756.2207,410.51247 L 754.92742,406.95594 L 752.66416,404.85434 L 750.07759,404.2077 L 748.46099,399.35789 L 745.71275,393.37644 L 741.50958,391.4365 L 739.40798,389.49658 L 738.1147,386.91001 L 736.01311,384.97007 L 733.74986,383.67679 L 731.48661,380.7669 L 728.41506,378.50366 L 723.88855,376.72538 L 723.40357,375.27044 L 720.97867,372.36055 L 720.49368,370.90559 L 717.0988,365.73246 L 713.70393,365.89412 L 709.66241,363.4692 L 708.36913,362.17592 L 708.04581,360.39765 L 708.85411,358.45773 L 711.11736,357.48775 L 710.79404,355.38617 L 716.93714,352.7996 L 725.99014,348.2731 L 733.26487,347.46479 L 749.75427,346.97981 L 752.01752,348.91974 L 753.63412,352.15296 L 757.99897,351.66798 L 770.6085,350.21302 L 773.51839,351.02133 L 786.12793,358.61939 L 796.23601,366.74107 L 790.81484,372.19941 L 788.22827,378.34251 L 787.74329,384.64727 L 786.12669,385.45557 L 784.99506,388.2038 L 782.57016,388.85044 L 780.46857,392.40697 L 777.72034,395.1552 L 775.4571,398.55007 L 773.84049,399.35837 L 770.28396,402.75324 L 767.37407,402.9149 L 768.34404,406.14811 L 763.33256,411.64457 z",GA:"M 689.61648,357.97274 L 684.76666,358.78105 L 676.3603,359.91267 L 667.79229,360.8018 L 667.79229,362.98422 L 667.95395,365.08582 L 668.60059,368.48069 L 671.99547,376.40206 L 674.42038,386.26337 L 675.87532,392.40648 L 677.49193,397.25629 L 678.94688,404.2077 L 681.04847,410.51247 L 683.63504,413.90735 L 684.12002,417.30222 L 686.05995,418.11052 L 686.22161,420.21212 L 684.44334,425.06193 L 683.95836,428.29515 L 683.7967,430.23508 L 685.41331,434.59992 L 685.73663,439.93472 L 684.92832,442.35963 L 685.57497,443.16794 L 687.02992,443.97624 L 687.67656,447.37111 L 690.26313,451.25097 L 691.71807,452.70591 L 699.63945,452.86757 L 710.4592,452.22093 L 731.97159,450.92765 L 737.41731,450.25328 L 741.99456,450.28101 L 742.15622,453.1909 L 744.74279,453.9992 L 745.06611,449.63436 L 743.4495,445.10786 L 744.58113,443.49126 L 750.40091,444.29956 L 755.37832,444.61734 L 754.6029,438.31855 L 756.86614,428.2956 L 758.32109,424.09242 L 757.8361,421.50586 L 761.17051,415.26156 L 760.66021,413.90988 L 758.7468,414.61446 L 756.16024,413.32116 L 755.51359,411.21957 L 754.22031,407.66304 L 751.95705,405.56145 L 749.37049,404.91481 L 747.75388,400.06499 L 744.82887,393.72999 L 740.6257,391.79006 L 738.5241,389.85013 L 737.23081,387.26356 L 735.12923,385.32363 L 732.86598,384.03034 L 730.60273,381.12045 L 727.53118,378.85721 L 723.00467,377.07893 L 722.51969,375.62399 L 720.09478,372.7141 L 719.6098,371.25915 L 716.21492,366.35117 L 712.82005,366.51284 L 708.69014,363.4692 L 707.39686,362.17592 L 707.07354,360.39765 L 707.88184,358.45773 L 710.23348,357.22259 L 709.09954,356.00037 L 709.17743,355.70949 L 703.35764,356.67945 L 696.40623,357.48775 z",AL:"M 625.59784,466.77079 L 623.98224,451.57429 L 621.234,432.82165 L 621.39566,418.75716 L 622.20396,387.71831 L 622.0423,371.06725 L 622.20739,364.64819 L 629.96369,364.2775 L 657.76933,361.69094 L 666.69187,361.02874 L 666.54407,363.21116 L 666.70573,365.31276 L 667.35238,368.70763 L 670.74726,376.629 L 673.17216,386.49031 L 674.62711,392.63342 L 676.24371,397.48324 L 677.69867,404.43465 L 679.80025,410.73941 L 682.38682,414.1343 L 682.8718,417.52916 L 684.81174,418.33747 L 684.9734,420.43906 L 683.19512,425.28888 L 682.71014,428.5221 L 682.54848,430.46202 L 684.1651,434.82687 L 684.48842,440.16166 L 683.6801,442.58658 L 684.32676,443.39488 L 685.7817,444.20318 L 686.81695,446.73845 L 680.51218,446.73845 L 673.72243,447.3851 L 648.18003,450.29498 L 637.76847,451.70175 L 637.67209,455.45415 L 639.45036,457.23242 L 642.03693,459.17234 L 642.61779,467.10778 L 637.07573,469.68068 L 634.32751,469.35736 L 637.07573,467.41743 L 637.07573,466.44747 L 634.00419,460.46603 L 631.74094,459.81939 L 630.28599,464.18422 L 628.99271,466.93245 L 628.34607,466.77079 z",NC:"M 832.10653,298.47179 L 833.81653,303.17039 L 837.37306,309.63681 L 839.79796,312.06172 L 840.4446,314.32497 L 838.0197,314.48663 L 838.828,315.13327 L 838.50468,319.33644 L 835.91811,320.62972 L 835.27147,322.73131 L 833.97819,325.6412 L 830.25999,327.2578 L 827.83509,326.93448 L 826.38014,326.77282 L 824.76354,325.47954 L 825.08686,326.77282 L 825.08686,327.74279 L 827.02679,327.74279 L 827.83509,329.03607 L 825.89516,335.34083 L 830.09833,335.34083 L 830.74498,336.95743 L 833.00822,334.69419 L 834.30151,334.2092 L 832.36158,337.76573 L 829.29003,342.61555 L 827.99675,342.61555 L 826.86512,342.13057 L 824.1169,342.77721 L 818.94376,345.20212 L 812.47734,350.53691 L 809.08247,355.22506 L 807.14255,361.69148 L 806.65757,364.11639 L 801.96941,364.60137 L 796.51628,365.93803 L 786.56987,357.7355 L 773.96033,350.13745 L 771.05044,349.32914 L 758.44091,350.78409 L 754.16445,351.53424 L 752.54785,348.30102 L 749.57749,346.18432 L 733.0881,346.6693 L 725.81336,347.4776 L 716.76037,352.00411 L 710.61726,354.59067 L 709.00066,354.91399 L 703.18087,355.88396 L 696.22946,356.69226 L 689.43971,357.17725 L 689.9398,353.12292 L 691.71807,351.66798 L 694.46631,351.02133 L 695.11295,347.30313 L 699.31613,344.55491 L 703.19598,343.09995 L 707.39917,339.54342 L 711.764,337.44183 L 712.41064,334.37027 L 716.2905,330.49042 L 716.93714,330.32876 C 716.93714,330.32876 716.93714,331.46039 717.74545,331.46039 C 718.55375,331.46039 719.68538,331.78371 719.68538,331.78371 L 721.94863,328.22717 L 724.05022,327.58052 L 726.31346,327.90385 L 727.93008,324.34732 L 730.83997,321.76074 L 731.32495,319.65915 L 731.32495,315.69846 L 735.85145,316.42594 L 742.98754,315.13265 L 758.80727,313.19272 L 775.94331,310.60615 L 795.86504,306.60555 L 815.59836,302.44073 L 826.9628,299.6443 z M 836.00199,331.45961 L 838.58857,328.95386 L 841.74095,326.36728 L 843.27673,325.72064 L 843.43839,323.69988 L 842.79175,317.55676 L 841.3368,315.21268 L 840.69015,313.35358 L 841.41763,313.11108 L 844.16587,318.60756 L 844.57002,323.05323 L 844.40836,326.44812 L 841.01348,327.98389 L 838.18441,330.40881 L 837.05279,331.62127 z",TN:"M 697.05288,320.62911 L 645.15979,325.6406 L 629.40023,327.41886 L 624.77903,327.93157 L 620.91068,327.90385 L 620.91068,331.78371 L 612.50433,332.26869 L 605.55292,332.91533 L 594.45689,332.96824 L 594.19215,338.80367 L 592.05398,345.07921 L 591.05891,348.09522 L 589.71017,352.47628 L 589.38685,355.06285 L 585.34533,357.32609 L 586.80027,360.88263 L 585.83031,365.24747 L 584.86193,366.03712 L 592.11797,365.84281 L 616.20542,363.90289 L 621.54027,363.74122 L 629.62326,363.25623 L 657.42891,360.66967 L 667.59966,359.86136 L 676.01988,358.8914 L 684.42624,357.75978 L 689.27606,356.95147 L 689.14548,352.44207 L 690.92375,350.98713 L 693.67198,350.34049 L 694.31863,346.62229 L 698.52181,343.87406 L 702.40166,342.4191 L 706.60484,338.86257 L 710.96967,336.76099 L 711.84326,333.23553 L 716.17702,329.35568 L 716.82367,329.19402 C 716.82367,329.19402 716.82367,330.32564 717.63197,330.32564 C 718.44027,330.32564 719.5719,330.64896 719.5719,330.64896 L 721.83515,327.09242 L 723.93674,326.44578 L 726.19998,326.7691 L 727.8166,323.21257 L 729.93216,320.96641 L 730.53062,319.99957 L 730.70699,316.06745 L 729.22336,315.77929 L 726.79845,317.71923 L 718.87707,317.88089 L 706.88174,319.78157 z",RI:"M 874.07001,179.82344 L 873.58706,175.61904 L 872.77876,171.2542 L 871.08133,165.35359 L 876.82028,163.81781 L 878.43688,164.94943 L 881.83176,169.31427 L 884.74063,173.76056 L 881.82968,175.29696 L 880.5364,175.1353 L 879.40478,176.91357 L 876.97987,178.85349 z",CT:"M 873.19331,180.05038 L 872.56579,175.84599 L 871.75749,171.48115 L 870.14088,165.4997 L 865.989,166.40438 L 844.16479,171.17336 L 844.81143,174.48742 L 846.26638,181.76216 L 846.26638,189.84519 L 845.13475,192.10845 L 846.96715,194.21757 L 851.9225,190.81637 L 855.47903,187.58316 L 857.41895,185.48157 L 858.22726,186.12821 L 860.97548,184.67327 L 866.14862,183.54165 z",MA:"M 899.97704,173.85121 L 902.14896,173.16533 L 902.60622,171.45066 L 903.63502,171.56497 L 904.66382,173.85121 L 903.4064,174.30845 L 899.5198,174.42277 z M 890.6035,174.65139 L 892.88972,172.02222 L 894.49009,172.02222 L 896.31908,173.50827 L 893.91854,174.53707 L 891.74662,175.56587 z M 855.80437,152.6632 L 873.26374,148.46002 L 875.527,147.81338 L 877.62858,144.58017 L 881.36535,142.91686 L 884.25459,147.3297 L 881.82968,152.50284 L 881.50636,153.95778 L 883.44629,156.54435 L 884.57791,155.73605 L 886.35618,155.73605 L 888.61942,158.32261 L 892.49928,164.30405 L 896.05581,164.78903 L 898.31905,163.81907 L 900.09732,162.0408 L 899.28901,159.29258 L 897.18743,157.67597 L 895.73248,158.48427 L 894.76252,157.19099 L 895.2475,156.70601 L 897.34909,156.54435 L 899.12735,157.35265 L 901.06728,159.77756 L 902.03724,162.68745 L 902.36056,165.11235 L 898.15739,166.5673 L 894.27754,168.50722 L 890.39769,173.03372 L 888.45776,174.48866 L 888.45776,173.5187 L 890.88267,172.06375 L 891.36765,170.28549 L 890.55935,167.21394 L 887.64946,168.66888 L 886.84116,170.12383 L 887.32614,172.38707 L 885.25981,173.3875 L 882.51261,168.86037 L 879.11773,164.49553 L 877.04723,162.68306 L 870.51396,164.55926 L 865.42163,165.61005 L 843.59742,170.37904 L 843.19483,165.43441 L 843.84147,154.84564 L 849.01462,153.9565 z",ME:"M 923.21476,77.330719 L 925.15469,79.432305 L 927.41794,83.150496 L 927.41794,85.090422 L 925.31635,89.778575 L 923.37642,90.425217 L 919.98155,93.496766 L 915.13174,98.993222 C 915.13174,98.993222 914.4851,98.993222 913.83846,98.993222 C 913.19182,98.993222 912.86849,96.891636 912.86849,96.891636 L 911.09023,97.053296 L 910.12027,98.508241 L 907.69536,99.963185 L 906.7254,101.41813 L 908.342,102.87307 L 907.85702,103.51972 L 907.37204,106.26794 L 905.43211,106.10628 L 905.43211,104.48968 L 905.10879,103.19639 L 903.65385,103.51972 L 901.87558,100.28651 L 899.774,101.57979 L 901.06728,103.03473 L 901.3906,104.16636 L 900.5823,105.45964 L 900.90562,108.53119 L 901.06728,110.14779 L 899.45068,112.73436 L 896.54079,113.21934 L 896.21747,116.12923 L 890.88267,119.20078 L 889.58939,119.68576 L 887.97278,118.23082 L 884.90123,121.78735 L 885.8712,125.02056 L 884.41625,126.31384 L 884.25459,130.67867 L 883.13131,136.93803 L 880.66906,135.78208 L 880.18407,132.71052 L 876.30422,131.57889 L 875.9809,128.83065 L 868.70615,105.38983 L 864.50757,91.750088 L 865.92811,91.631923 L 867.4419,92.041822 L 867.4419,89.455254 L 868.2502,83.958798 L 870.83677,79.270645 L 872.29172,75.229133 L 870.35179,72.804226 L 870.35179,66.822789 L 871.16009,65.852826 L 871.9684,63.104598 L 871.80674,61.649654 L 871.64507,56.79984 L 873.42334,51.950026 L 876.33323,43.0587 L 878.43481,38.855528 L 879.7281,38.855528 L 881.02138,39.017188 L 881.02138,40.148811 L 882.31467,42.412058 L 885.06289,43.0587 L 885.8712,42.250397 L 885.8712,41.280435 L 889.91271,38.370546 L 891.69097,36.592281 L 893.14592,36.753942 L 899.12735,39.178849 L 901.06728,40.148811 L 910.12027,70.055998 L 916.1017,70.055998 L 916.91001,71.995924 L 917.07167,76.845738 L 919.98155,79.108984 L 920.78986,79.108984 L 920.95152,78.624003 L 920.46654,77.49238 z M 902.28301,107.47825 L 903.81879,105.94247 L 905.19291,106.99327 L 905.75872,109.41819 L 904.06128,110.30732 z M 908.99194,101.57763 L 910.77021,103.43673 C 910.77021,103.43673 912.0635,103.51755 912.0635,103.19423 C 912.0635,102.87091 912.30599,101.17347 912.30599,101.17347 L 913.19513,100.36517 L 912.38682,98.586893 L 910.36606,99.31437 z",NH:"M 880.79902,142.42476 L 881.66802,141.34826 L 882.75824,138.05724 L 880.21516,137.14377 L 879.73017,134.07221 L 875.85032,132.94059 L 875.527,130.19235 L 868.25225,106.75153 L 863.65083,92.208542 L 862.75375,92.203482 L 862.10711,93.820087 L 861.46047,93.335106 L 860.4905,92.365143 L 859.03556,94.305068 L 858.98709,99.337122 L 859.29874,105.00434 L 861.23866,107.75258 L 861.23866,111.7941 L 857.52046,116.85688 L 854.93389,117.98852 L 854.93389,119.12014 L 856.06552,120.89841 L 856.06552,129.46643 L 855.25721,138.6811 L 855.09555,143.53092 L 856.06552,144.82422 L 855.90386,149.35071 L 855.41887,151.12899 L 856.87382,152.01499 L 873.26374,147.32527 L 875.527,146.67863 L 877.06121,144.12627 z",VT:"M 844.34355,153.72643 L 843.53525,148.0683 L 841.14454,138.09663 L 840.4979,137.77331 L 837.588,136.48002 L 838.3963,133.57013 L 837.588,131.46854 L 834.88795,126.82856 L 835.85792,122.9487 L 835.04961,117.77555 L 832.6247,111.30911 L 831.81913,106.3866 L 858.06661,99.63916 L 858.39094,105.45824 L 860.33087,108.20648 L 860.33087,112.248 L 856.61267,116.28952 L 854.0261,117.42115 L 854.0261,118.55277 L 855.15772,120.33104 L 855.15772,128.89906 L 854.34942,138.11373 L 854.18776,142.96356 L 855.15772,144.25685 L 854.99606,148.78334 L 854.51108,150.56162 L 855.1717,152.12847 L 848.22029,153.5026 z",NY:"M 828.61427,189.42238 L 827.48264,188.45242 L 824.89606,188.29076 L 822.63282,186.35084 L 821.00221,180.22171 L 817.54375,180.31225 L 815.10004,177.60405 L 795.71472,181.98599 L 752.71294,190.71568 L 745.18329,191.94367 L 744.44513,185.47533 L 745.87323,184.34995 L 747.16651,183.21833 L 748.13648,181.60172 L 749.91474,180.4701 L 751.85467,178.69183 L 752.33965,177.07523 L 754.44123,174.327 L 755.57286,173.35704 L 755.4112,172.38707 L 754.11791,169.31553 L 752.33965,169.15387 L 750.39972,163.01077 L 753.30961,161.2325 L 757.67444,159.77756 L 761.71596,158.48427 L 764.94917,157.99929 L 771.25392,157.83763 L 773.19385,159.13092 L 774.81045,159.29258 L 776.91204,157.99929 L 779.49861,156.86767 L 784.67174,156.38269 L 786.77333,154.60442 L 788.55159,151.37121 L 790.1682,149.43129 L 792.26978,149.43129 L 794.20971,148.29966 L 794.37137,146.03642 L 792.91643,143.93483 L 792.59311,142.47989 L 793.72473,140.3783 L 793.72473,138.92336 L 791.94646,138.92336 L 790.1682,138.11506 L 789.3599,136.98343 L 789.19824,134.39686 L 795.01801,128.90041 L 795.66465,128.09211 L 797.1196,125.18222 L 800.02949,120.65572 L 802.77772,116.93753 L 804.8793,114.51263 L 807.2944,112.68702 L 810.37576,111.44108 L 815.87221,110.14779 L 819.10542,110.30945 L 823.63192,108.85451 L 831.19711,106.78334 L 831.7169,111.76301 L 834.14182,118.22945 L 834.95012,123.4026 L 833.98016,127.28246 L 836.56673,131.80896 L 837.37503,133.91055 L 836.56673,136.82045 L 839.47663,138.11373 L 840.12327,138.43705 L 843.19483,149.42999 L 842.65854,154.48966 L 842.17356,165.32093 L 842.98186,170.8174 L 843.79016,174.37394 L 845.24511,181.64868 L 845.24511,189.73172 L 844.11348,191.99497 L 845.95281,193.98776 L 846.74936,195.66618 L 844.80944,197.44445 L 845.13276,198.73773 L 846.42604,198.41441 L 847.88099,197.12113 L 850.14423,194.53456 L 851.27586,193.88792 L 852.89246,194.53456 L 855.15571,194.69622 L 863.07707,190.81637 L 865.98696,188.06814 L 867.28024,186.6132 L 871.48341,188.2298 L 868.08854,191.78633 L 864.20869,194.69622 L 857.09563,200.03101 L 854.50907,201.00098 L 848.68929,202.9409 L 844.64778,204.07253 L 843.47304,203.5396 L 843.22902,199.85107 L 843.714,197.10283 L 843.55234,195.00125 L 840.73883,193.30225 L 836.21233,192.33228 L 832.33247,191.20066 z",NJ:"M 828.16036,190.33018 L 826.05878,192.75509 L 826.05878,195.82665 L 824.11884,198.8982 L 823.95718,200.51482 L 825.25048,201.8081 L 825.08882,204.23302 L 822.82556,205.36464 L 823.63386,208.11287 L 823.79552,209.2445 L 826.54376,209.56782 L 827.51372,212.15439 L 831.07026,214.57931 L 833.49517,216.19591 L 833.49517,217.00422 L 830.26196,220.07578 L 828.64535,222.33902 L 827.1904,225.08726 L 824.92715,226.38054 L 823.7147,227.10802 L 823.4722,228.32048 L 822.86297,230.92722 L 823.95524,233.17141 L 827.18845,236.0813 L 832.03826,238.34455 L 836.07977,238.99119 L 836.24143,240.44613 L 835.43313,241.41609 L 835.75645,244.16432 L 836.56475,244.16432 L 838.66634,241.73942 L 839.47464,236.8896 L 842.22287,232.84809 L 845.29442,226.38167 L 846.42604,220.88522 L 845.7794,219.75359 L 845.61774,210.37728 L 844.00113,206.98242 L 842.86951,207.79072 L 840.12128,208.11404 L 839.6363,207.62906 L 840.76793,206.65909 L 842.86951,204.71917 L 842.93257,203.62534 L 842.54818,200.1915 L 843.03316,197.44326 L 842.8715,195.34167 L 840.28493,194.21004 L 835.75843,193.24008 L 831.87857,192.10845 z",PA:"M 822.20688,226.45982 L 823.33852,225.81317 L 825.60176,225.20074 L 827.05671,222.4525 L 828.67332,220.18925 L 831.90653,217.11769 L 831.90653,216.30939 L 829.48162,214.69279 L 825.92508,212.26787 L 824.95512,209.6813 L 822.20688,209.35798 L 822.04522,208.22635 L 821.23692,205.47812 L 823.50018,204.3465 L 823.66184,201.92158 L 822.36854,200.62829 L 822.5302,199.01168 L 824.47014,195.94013 L 824.47014,192.86857 L 826.81422,190.44366 L 827.02874,189.36021 L 824.44216,189.19855 L 822.17892,187.25863 L 819.754,181.92382 L 816.74942,180.99309 L 814.41919,178.85226 L 795.8282,182.89378 L 752.82642,191.62347 L 743.93507,193.07841 L 743.4394,185.99452 L 737.95187,191.62467 L 736.65858,192.10965 L 732.45629,195.11854 L 735.36705,214.25599 L 737.84871,223.98535 L 741.42051,243.24684 L 744.68982,242.60916 L 756.6334,241.10669 L 794.56003,233.44149 L 809.43624,230.61817 L 817.73659,228.99581 L 818.0037,228.75728 L 820.1053,227.14066 z",DE:"M 822.35259,230.42318 L 822.94187,228.32048 L 822.96339,227.11557 L 821.69394,227.02719 L 819.59234,228.6438 L 818.13739,230.09874 L 819.59234,234.30193 L 821.8556,239.96005 L 823.95718,249.6597 L 825.5738,255.96448 L 830.58528,255.80282 L 836.7274,254.59089 L 834.46317,247.23587 L 833.4932,247.72085 L 829.93667,245.29595 L 828.15841,240.60779 L 826.21848,237.05126 L 823.95524,236.0813 L 821.85365,232.52477 z",MD:"M 836.95336,255.30492 L 830.81223,256.59715 L 825.00642,256.75881 L 823.16286,249.6597 L 821.06127,239.96005 L 818.79801,234.30193 L 817.50963,229.9036 L 810.00361,231.52596 L 795.1274,234.34928 L 757.67597,241.90018 L 758.80727,246.91184 L 759.77723,252.56995 L 760.10055,252.24663 L 762.20215,249.82173 L 764.46539,247.20407 L 766.8903,246.58851 L 768.34526,245.13356 L 770.12352,242.54699 L 771.4168,243.19364 L 774.32669,242.87031 L 776.91327,240.76873 L 778.92016,239.31546 L 780.76539,238.83048 L 782.40974,239.96043 L 785.31963,241.41537 L 787.25955,243.19364 L 788.47201,244.72942 L 792.59436,246.42685 L 792.59436,249.33674 L 798.09082,250.63003 L 799.23526,251.17201 L 800.64716,249.14369 L 803.52913,251.11385 L 802.25096,253.59578 L 801.48569,257.58144 L 799.70743,260.16801 L 799.70743,262.2696 L 800.35407,264.04787 L 805.41802,265.40356 L 809.72912,265.34184 L 812.80066,266.31181 L 814.90225,266.63513 L 815.87221,264.53354 L 814.41727,262.43196 L 814.41727,260.65369 L 811.99236,258.5521 L 809.89078,253.05565 L 811.18406,247.72085 L 811.0224,245.61927 L 809.72912,244.32598 C 809.72912,244.32598 811.18406,242.70938 811.18406,242.06274 C 811.18406,241.41609 811.66904,239.96115 811.66904,239.96115 L 813.60897,238.66787 L 815.54889,237.05126 L 816.03387,238.02123 L 814.57893,239.63783 L 813.28565,243.35602 L 813.60897,244.48764 L 815.38723,244.81096 L 815.87221,250.30742 L 813.77063,251.27738 L 814.09395,254.83391 L 814.57893,254.67225 L 815.71055,252.73233 L 817.32716,254.51059 L 815.71055,255.80388 L 815.38723,259.19875 L 817.9738,262.59362 L 821.85365,263.0786 L 823.47026,262.2703 L 826.70681,266.45323 L 828.06516,266.98953 L 834.71883,264.19258 L 836.72641,260.16871 z M 820.32087,264.28945 L 821.45249,266.7952 L 821.61415,268.57347 L 822.74578,270.43257 C 822.74578,270.43257 823.63492,269.54343 823.63492,269.22011 C 823.63492,268.89679 822.90745,266.14855 822.90745,266.14855 L 822.17997,263.80446 z",WV:"M 756.56051,241.96731 L 757.67252,246.91184 L 758.75596,253.81817 L 762.31563,251.06994 L 764.57887,247.99838 L 767.11725,247.38283 L 768.5722,245.92789 L 770.35047,243.34132 L 771.53028,243.98796 L 774.44017,243.66464 L 777.02675,241.56305 L 779.03364,240.10979 L 780.87887,239.6248 L 782.18279,240.64127 L 784.41183,241.75579 L 786.35176,243.53406 L 787.72588,244.82734 L 787.58288,249.4984 L 781.92475,246.42685 L 777.39825,244.64858 L 777.23659,249.98339 L 776.75161,252.08497 L 775.13501,254.83321 L 774.48835,256.44982 L 771.4168,258.87472 L 770.93182,261.13798 L 767.53694,261.4613 L 767.21362,264.53285 L 766.082,270.02932 L 763.49543,270.02932 L 762.20215,269.22101 L 760.58553,266.47277 L 758.80727,266.63443 L 758.48395,270.99928 L 756.38236,277.62737 L 751.37088,288.45864 L 752.17918,289.75192 L 752.01752,292.50015 L 749.91593,294.44008 L 748.46099,294.11676 L 745.22777,296.54167 L 742.6412,295.57171 L 740.86294,300.25986 C 740.86294,300.25986 737.14473,301.06817 736.49809,301.22983 C 735.85145,301.39149 734.07318,299.93654 734.07318,299.93654 L 731.64827,302.19979 L 729.0617,302.84644 L 726.1518,302.03813 L 724.85852,300.74485 L 722.6663,297.72149 L 719.52371,295.73337 L 716.93714,292.98513 L 714.02726,289.26694 L 713.38061,287.00369 L 710.79404,285.54874 L 709.98573,283.93214 L 709.74324,278.67816 L 711.92566,278.59733 L 713.8656,277.78903 L 714.02726,275.0408 L 715.64386,273.58585 L 715.80552,268.57437 L 716.77548,264.69451 L 718.06877,264.04787 L 719.36205,265.17949 L 719.84704,266.95776 L 721.62531,265.98779 L 722.11029,264.37119 L 720.97867,262.59292 L 720.97867,260.16801 L 721.94863,258.87472 L 724.21188,255.47985 L 725.50516,254.02491 L 727.60676,254.50989 L 729.87,252.89327 L 732.94155,249.4984 L 735.20481,245.61854 L 735.52813,239.96043 L 736.01311,234.94894 L 736.01311,230.26078 L 734.88149,227.18923 L 735.85145,225.73427 L 737.13493,224.44099 L 740.62618,244.26811 L 745.25719,243.51696 z",KY:"M 721.78301,297.81787 L 719.45844,300.5008 L 715.25525,304.05734 L 710.9557,309.95951 L 709.17743,311.73778 L 709.17743,313.83936 L 705.29757,315.94095 L 699.63945,319.33583 L 696.11989,319.72047 L 644.252,324.61933 L 628.49244,326.39759 L 623.87124,326.9103 L 620.00289,326.88258 L 619.77594,331.10286 L 611.59653,331.24742 L 604.64512,331.89406 L 594.21453,332.09966 L 596.12731,331.87803 L 598.30736,330.11601 L 600.36496,328.97291 L 600.59359,325.77218 L 601.50808,323.9432 L 599.90126,321.4043 L 600.70309,319.49749 L 602.96635,317.71923 L 605.06793,317.07258 L 607.81616,318.36587 L 611.3727,319.65915 L 612.50433,319.33583 L 612.66599,317.07258 L 611.3727,314.64767 L 611.69602,312.38442 L 613.63595,310.92948 L 616.22253,310.28283 L 617.83913,309.63619 L 617.03083,307.85792 L 616.38419,305.91799 L 617.51581,305.10969 L 618.5666,301.79563 L 621.55732,300.0982 L 627.37711,299.12824 L 630.93365,298.64326 L 632.38859,300.58319 L 634.16686,301.39149 L 635.94513,298.15828 L 638.85502,296.70333 L 640.79495,298.31994 L 641.60325,299.45156 L 643.70485,298.96658 L 643.54318,295.57171 L 646.45308,293.9551 L 647.5847,293.14679 L 648.71632,294.7634 L 653.40449,294.7634 L 654.21279,292.66181 L 653.88947,290.39857 L 656.79936,286.84202 L 661.48752,282.96217 L 661.9725,278.43567 L 664.72074,278.11235 L 668.60059,276.33408 L 671.34883,274.39415 L 671.0255,272.45422 L 669.57055,270.99928 L 670.13637,268.81687 L 674.25872,268.57437 L 676.68363,267.76607 L 679.59352,269.38267 L 681.21013,273.74751 L 687.02992,274.07083 L 688.80818,275.8491 L 690.90977,276.01076 L 693.33468,274.55582 L 696.40623,275.0408 L 697.69952,276.49574 L 700.44776,273.90917 L 702.22602,272.61588 L 703.84263,272.61588 L 704.48927,275.36412 L 706.26754,276.33408 L 708.68933,278.54915 L 708.85099,284.04561 L 709.65929,285.66222 L 712.24587,287.11716 L 712.89251,289.38042 L 715.8024,293.09861 L 718.38896,295.84685 z",OH:"M 731.43589,195.0077 L 725.34235,199.06105 L 721.4625,201.3243 L 718.06763,205.04249 L 714.02612,208.92234 L 710.79291,209.73064 L 707.88302,210.21562 L 702.38656,212.80219 L 700.28498,212.96385 L 696.89011,209.8923 L 691.71697,210.53895 L 689.13041,209.084 L 686.74934,207.73317 L 681.85677,208.43658 L 671.67215,210.05319 L 663.91243,211.26565 L 665.20572,225.89593 L 666.98399,239.6371 L 669.57055,263.0779 L 670.13637,267.90907 L 674.25872,267.78005 L 676.68363,266.97174 L 680.04743,268.47488 L 682.11792,272.83971 L 687.25686,272.82261 L 689.1486,274.94131 L 690.90977,274.87601 L 693.44816,273.53455 L 695.95233,273.90605 L 697.92646,275.361 L 699.65343,273.22832 L 701.99908,271.93504 L 704.06957,271.25419 L 704.71621,274.00243 L 706.49449,274.97239 L 709.97018,277.31646 L 712.1526,277.23564 L 713.29822,276.08691 L 713.23293,274.70038 L 714.84954,273.24542 L 715.0112,268.23395 C 715.0112,268.23395 715.98116,264.35409 715.98116,264.35409 L 717.5014,262.91312 L 719.02163,263.8178 L 719.84704,265.02868 L 721.05794,264.85305 L 720.63513,262.44212 L 720.07087,261.7986 L 720.07087,259.37368 L 721.04084,258.0804 L 723.30408,254.68553 L 724.59737,253.23058 L 726.69896,253.71556 L 728.96221,252.09895 L 732.03376,248.70408 L 734.29702,244.82422 L 734.50686,239.39306 L 734.99184,234.38157 L 734.99184,229.69341 L 733.86022,226.62186 L 734.83018,225.16691 L 735.75069,224.2123 L 734.34578,214.36947 z",MI:"M 581.61931,82.059006 L 583.4483,80.001402 L 585.62022,79.201221 L 590.99286,75.314624 L 593.27908,74.743065 L 593.73634,75.200319 L 588.59232,80.344339 L 585.27728,82.287628 L 583.21967,83.202124 z M 667.79369,114.18719 L 668.44033,116.69293 L 671.67355,116.85459 L 672.96684,115.64213 C 672.96684,115.64213 672.88601,114.18719 672.56269,114.02552 C 672.23936,113.86386 670.94608,112.16642 670.94608,112.16642 L 668.76366,112.40891 L 667.14704,112.57057 L 666.82372,113.7022 z M 697.86007,177.23689 L 694.62686,168.9922 L 692.36361,159.93922 L 689.93871,156.70601 L 687.35214,154.92774 L 685.73554,156.05937 L 681.85568,157.83763 L 679.91576,162.84911 L 677.16753,166.5673 L 676.03591,167.21394 L 674.58096,166.5673 C 674.58096,166.5673 671.9944,165.11235 672.15606,164.46571 C 672.31772,163.81907 672.64104,159.45424 672.64104,159.45424 L 676.03591,158.16095 L 676.84421,154.76608 L 677.49085,152.17952 L 679.91576,150.56291 L 679.59244,140.53996 L 677.97583,138.27672 L 676.68255,137.46841 L 675.87425,135.36683 L 676.68255,134.55853 L 678.29915,134.88185 L 678.46081,133.26524 L 676.03591,131.00199 L 674.74262,128.41543 L 672.15606,128.41543 L 667.62956,126.96048 L 662.13311,123.56561 L 659.38488,123.56561 L 658.73824,124.21226 L 657.76827,123.72727 L 654.69673,121.46403 L 651.78684,123.24229 L 648.87695,125.50554 L 649.20027,129.06207 L 650.17023,129.38539 L 652.27182,129.87037 L 652.7568,130.67867 L 650.17023,131.48698 L 647.58367,131.8103 L 646.12872,133.58856 L 645.8054,135.69015 L 646.12872,137.30675 L 646.45204,142.80321 L 642.89551,144.9048 L 642.24887,144.74313 L 642.24887,140.53996 L 643.54215,138.11506 L 644.1888,135.69015 L 643.38049,134.88185 L 641.44057,135.69015 L 640.4706,139.89332 L 637.72238,141.02494 L 635.94411,142.96487 L 635.78245,143.93483 L 636.42909,144.74313 L 635.78245,147.3297 L 633.5192,147.81468 L 633.5192,148.94631 L 634.32751,151.37121 L 633.19588,157.51431 L 631.57928,161.55582 L 632.22592,166.24398 L 632.7109,167.3756 L 631.9026,169.80051 L 631.57928,170.60881 L 631.25596,173.35704 L 634.81249,179.33847 L 637.72238,185.80489 L 639.17732,190.65471 L 638.36902,195.34286 L 637.39906,201.3243 L 634.97415,206.49743 L 634.65083,209.24566 L 631.39196,212.33081 L 635.80057,212.16876 L 657.21906,209.90551 L 664.4969,208.91845 L 664.59327,210.5848 L 671.44521,209.37234 L 681.74329,207.86921 L 685.59749,207.4083 L 685.73554,206.82075 L 685.8972,205.36581 L 687.99878,201.64762 L 689.99934,199.90977 L 689.77705,194.85788 L 691.37404,193.26089 L 692.46466,192.91795 L 692.68694,189.36142 L 694.22271,186.3303 L 695.2735,186.93652 L 695.43516,187.58316 L 696.24347,187.74482 L 698.18339,186.77486 z M 567.49209,111.21318 L 568.20837,110.63278 L 570.9566,109.82447 L 574.51313,107.56123 L 574.51313,106.59126 L 575.15978,105.94462 L 581.14121,104.97466 L 583.56612,103.03473 L 587.93095,100.93315 L 588.09261,99.639864 L 590.03254,96.729975 L 591.8108,95.921673 L 593.10409,94.143408 L 595.36733,91.880161 L 599.73217,89.455254 L 604.42032,88.970273 L 605.55194,90.101896 L 605.22862,91.071859 L 601.51043,92.041822 L 600.05549,95.113371 L 597.79224,95.921673 L 597.30726,98.34658 L 594.88235,101.57979 L 594.55903,104.16636 L 595.36733,104.65134 L 596.3373,103.51972 L 599.89383,100.60983 L 601.18711,101.90311 L 603.45036,101.90311 L 606.68357,102.87307 L 608.13851,104.0047 L 609.59345,107.07625 L 612.34168,109.82447 L 616.22153,109.66281 L 617.67648,108.69285 L 619.29308,109.98613 L 620.90969,110.47112 L 622.20297,109.66281 L 623.33459,109.66281 L 624.9512,108.69285 L 628.99271,105.13632 L 632.38758,104.0047 L 639.01566,103.68138 L 643.54215,101.74145 L 646.12872,100.44817 L 647.58367,100.60983 L 647.58367,106.26794 L 648.06865,106.59126 L 650.97853,107.39957 L 652.91846,106.91458 L 659.06156,105.29798 L 660.19318,104.16636 L 661.64813,104.65134 L 661.64813,111.60274 L 664.88134,114.67429 L 666.17462,115.32093 L 667.4679,116.29089 L 666.17462,116.61421 L 665.36632,116.29089 L 661.64813,115.80591 L 659.54654,116.45255 L 657.28329,116.29089 L 654.05008,117.74584 L 652.27182,117.74584 L 646.45204,116.45255 L 641.27891,116.61421 L 639.33898,119.20078 L 632.38758,119.84742 L 629.96267,120.65572 L 628.83105,123.72727 L 627.53777,124.8589 L 627.05279,124.69724 L 625.59784,123.08063 L 621.07135,125.50554 L 620.42471,125.50554 L 619.29308,123.88893 L 618.48478,124.05059 L 616.54486,128.41543 L 615.57489,132.45694 L 612.39377,139.45774 L 611.21701,138.42347 L 609.84527,137.39215 L 607.90449,127.10413 L 604.36001,125.73408 L 602.30743,123.44785 L 590.18707,120.70437 L 587.3318,119.67473 L 579.10138,117.50199 L 571.21139,116.35887 z",WY:"M 354.25168,143.77587 L 343.70253,142.96884 L 311.61454,139.67342 L 295.38233,137.61582 L 267.03312,133.50061 L 247.14296,130.52852 L 245.72387,141.70448 L 241.88464,165.96502 L 236.62631,196.37183 L 235.09531,206.88801 L 233.4256,218.77684 L 239.94947,219.70521 L 265.82883,222.20513 L 286.39795,224.51213 L 323.18167,228.62731 L 347.00271,231.48733 L 351.50702,187.295 L 352.94689,161.91789 z",MT:"M 356.67064,122.27385 L 357.31846,111.12326 L 359.57695,86.336144 C 360.0342,81.306439 360.66066,77.864038 360.94869,70.926078 L 361.88845,56.374463 L 331.21413,53.56663 L 301.95358,50.0101 L 272.69304,45.968588 L 240.36094,40.633793 L 221.93165,37.238923 L 189.208,30.306187 L 184.72898,51.653719 L 188.15832,59.19826 L 186.78658,63.770712 L 188.61556,68.343163 L 191.81629,69.714902 L 196.43711,80.484355 L 199.13221,83.660878 L 199.58945,84.803996 L 203.01879,85.947114 L 203.47604,88.004707 L 196.38874,105.60866 L 196.38874,108.12351 L 198.90359,111.32422 L 199.81807,111.32422 L 204.61914,108.35213 L 205.30502,107.20901 L 206.90538,107.89488 L 206.67675,113.1532 L 209.42023,125.72745 L 212.39232,128.24229 L 213.3068,128.92816 L 215.13579,131.21438 L 214.67854,134.64373 L 215.36441,138.07306 L 216.50753,138.98756 L 218.79375,136.70133 L 221.53722,136.70133 L 224.73794,138.30169 L 227.25279,137.3872 L 231.368,137.3872 L 235.02595,138.98756 L 237.76943,138.53031 L 238.22667,135.55821 L 241.19876,134.87235 L 242.5705,136.24409 L 243.02775,139.4448 L 244.80717,140.80977 L 246.34057,129.2447 L 267.03312,132.21679 L 295.22184,136.17153 L 311.77502,138.06865 L 343.2211,141.52455 L 354.21124,143.04862 L 355.26321,127.62136 z",ID:"M 162.11948,180.95969 C 139.5086,176.61641 147.97221,178.11269 140.97881,176.60895 L 145.40585,159.10648 L 149.74968,141.38823 L 151.12142,137.15871 L 153.63626,131.21453 L 152.37884,128.9283 L 149.86398,129.04261 L 149.06381,128.01381 L 149.52106,126.8707 L 149.86398,123.78429 L 154.32213,118.29734 L 156.15111,117.8401 L 157.29422,116.69699 L 157.86578,113.49627 L 158.78026,112.81041 L 162.66685,106.98053 L 166.55344,102.6367 L 166.78206,98.864432 L 163.35272,96.235269 L 162.03814,91.834286 L 162.43823,82.174988 L 166.09619,65.714155 L 170.55433,44.909503 L 174.3266,31.420781 L 175.08853,27.617595 L 188.08467,30.145706 L 183.92659,51.653719 L 186.8745,59.358741 L 185.82372,63.931193 L 187.81318,68.503644 L 191.0139,70.196335 L 195.47424,80.002923 L 198.16934,83.821359 L 198.78707,84.964477 L 202.21641,86.107595 L 202.67365,88.646611 L 195.74683,105.44818 L 196.06779,108.76541 L 198.7431,111.64517 L 200.62046,112.1266 L 205.42153,108.51261 L 205.78645,108.01139 L 205.94251,108.85775 L 206.19532,112.99272 L 208.77832,125.88793 L 212.23184,128.56324 L 212.6649,129.40959 L 214.81483,131.85629 L 214.03664,134.64373 L 214.7225,138.39401 L 216.66801,139.30851 L 218.79375,137.6642 L 221.37674,137.18276 L 224.73794,138.78312 L 227.25279,138.18958 L 231.04705,138.0291 L 235.02595,139.62946 L 237.76943,139.3327 L 238.70811,137.0025 L 241.19876,135.35378 L 241.9286,137.04647 L 242.54631,139.28432 L 244.85453,141.82336 L 241.08226,165.80454 L 235.9382,194.8133 L 231.779,194.4946 L 223.59476,192.96239 L 213.78818,191.13341 L 201.62502,188.75485 L 189.09694,186.25099 L 180.61372,184.41102 L 171.35451,182.74252 z",WA:"M 93.573239,6.3617734 L 97.938071,7.8167177 L 107.6377,10.564946 L 116.2057,12.504871 L 136.2516,18.162988 L 159.20739,23.821104 L 174.36801,27.215777 L 173.36373,31.099829 L 169.27051,44.909503 L 164.81238,65.714155 L 161.63584,81.854036 L 161.28429,91.232806 L 148.10315,87.33877 L 132.53264,83.955591 L 118.86585,84.551329 L 117.28528,83.01913 L 111.95881,84.916253 L 107.9821,84.665645 L 105.2606,82.904814 L 103.68223,83.430208 L 99.476903,83.201576 L 97.601755,81.829846 L 92.824862,80.093194 L 91.382778,79.886558 L 86.397035,78.560984 L 84.614222,80.069004 L 78.922841,79.726077 L 74.101997,75.931831 L 74.30643,75.131651 L 74.374575,67.197996 L 72.248826,63.31142 L 68.133618,62.57938 L 67.768708,60.225014 L 65.2543,59.597968 L 62.372763,59.063086 L 60.594498,60.033049 L 58.331251,57.123161 L 58.654572,54.213272 L 61.4028,53.889951 L 63.019405,49.84844 L 60.432837,48.716816 L 60.594498,44.998625 L 64.959331,44.351984 L 62.211103,41.603756 L 60.756158,34.490695 L 61.4028,31.580807 L 61.4028,23.659444 L 59.624535,20.426234 L 61.887782,11.049927 L 63.989368,11.534908 L 66.414275,14.444797 L 69.162503,17.031364 L 72.395712,18.97129 L 76.922205,21.072876 L 79.993756,21.719518 L 82.903645,23.174462 L 86.298518,24.144425 L 88.561764,23.982765 L 88.561764,21.557857 L 89.855048,20.426234 L 91.956634,19.13295 L 92.279955,20.264574 L 92.603276,22.042839 L 90.340029,22.52782 L 90.016708,24.629406 L 91.794974,26.084351 L 92.926597,28.509258 L 93.573239,30.449183 L 95.028183,30.287523 L 95.189843,28.994239 L 94.219881,27.700955 L 93.734899,24.467746 L 94.543201,22.689481 L 93.89656,21.234537 L 93.89656,18.97129 L 95.674825,15.41476 L 94.543201,12.828192 L 92.118294,7.9783781 L 92.441615,7.1700758 z M 84.116548,12.340738 L 86.137312,12.179078 L 86.622294,13.553197 L 88.158073,11.936582 L 90.502155,11.936582 L 91.310458,13.472361 L 89.774678,15.169801 L 90.42133,15.978114 L 89.693853,17.998875 L 88.319734,18.403021 C 88.319734,18.403021 87.430596,18.483857 87.430596,18.160536 C 87.430596,17.837215 88.885551,15.573958 88.885551,15.573958 L 87.188111,15.008141 L 86.86479,16.463095 L 86.137312,17.109737 L 84.60153,14.84648 z",TX:"M 357.05332,333.3739 L 379.74411,334.45984 L 410.8368,335.60296 L 408.50219,359.05876 L 408.20543,377.21228 L 408.27357,379.29407 L 412.6174,383.1125 L 414.35405,383.93466 L 416.16326,384.18747 L 416.84913,382.93225 L 417.73945,383.79837 L 419.47609,384.2798 L 421.08086,383.54998 L 422.21956,383.95885 L 421.92279,387.364 L 426.19848,388.39501 L 428.8738,389.21718 L 432.82854,389.74256 L 435.02242,391.57154 L 438.27152,389.99537 L 441.05896,390.36028 L 443.09237,393.14772 L 444.16733,393.46868 L 444.00686,395.43395 L 447.09547,396.60124 L 449.86312,394.79644 L 451.37114,395.16136 L 453.72552,395.32184 L 454.15859,397.19478 L 458.79918,399.18423 L 461.45473,398.9798 L 463.4442,394.86459 L 463.78492,394.86459 L 464.92804,396.76172 L 469.3642,397.76853 L 472.7012,398.9798 L 475.99425,399.73382 L 478.14419,398.9798 L 478.99053,396.46496 L 482.69245,396.46496 L 484.58958,397.21896 L 487.654,395.64279 L 488.31569,395.64279 L 488.6806,396.76172 L 492.95629,396.76172 L 495.35904,395.5065 L 497.02754,395.80326 L 498.44324,397.67621 L 501.32299,399.34471 L 504.84467,400.41968 L 507.58814,401.83759 L 510.03484,403.45991 L 513.32788,402.56962 L 515.26897,403.55225 L 515.78008,413.69188 L 516.11532,423.39405 L 516.80118,432.92806 L 517.32658,436.97511 L 520.00191,441.57175 L 521.07687,445.63859 L 524.93927,451.92792 L 525.48884,454.80769 L 526.01424,455.8145 L 525.32836,463.31069 L 522.67723,467.69847 L 523.63568,470.55845 L 523.27076,473.0733 L 522.42442,480.38923 L 521.05268,483.10852 L 521.65692,487.49475 L 515.99204,489.07993 L 506.13075,493.60643 L 505.16079,495.54635 L 502.57422,497.48628 L 500.47264,498.94122 L 499.17935,499.74952 L 493.52124,505.08432 L 490.77301,507.18591 L 485.43821,510.41911 L 479.7801,512.84402 L 473.47534,516.23889 L 471.69708,517.69384 L 465.8773,521.25037 L 462.48243,521.89701 L 458.60258,527.39346 L 454.56107,527.71679 L 453.5911,529.65671 L 455.85435,531.59664 L 454.3994,537.09309 L 453.10612,541.61959 L 451.9745,545.49944 L 451.1662,550.02593 L 451.9745,552.45084 L 453.75276,559.40224 L 454.72273,565.54533 L 456.50099,568.29356 L 455.53103,569.74851 L 452.45948,571.68843 L 446.80136,567.80858 L 441.30491,566.67696 L 440.01162,567.16194 L 436.77841,566.5153 L 432.57524,563.44375 L 427.40211,562.31213 L 419.80406,558.91726 L 417.70248,555.0374 L 416.40919,548.57099 L 413.17599,546.63106 L 412.52934,544.36781 L 413.17599,543.72117 L 413.49931,540.3263 L 412.20602,539.67966 L 411.55938,538.7097 L 412.85266,534.34486 L 411.23606,532.08162 L 408.00285,530.78833 L 404.60798,526.4235 L 401.05145,519.79542 L 396.84828,517.20885 L 397.00994,515.26893 L 391.67514,502.98273 L 390.86684,498.77956 L 389.08858,496.83964 L 388.92692,495.38469 L 382.94548,490.0499 L 380.35891,486.97835 L 380.35891,485.84672 L 377.77234,483.74514 L 370.9826,482.61351 L 363.54622,481.96687 L 360.47467,479.70363 L 355.94818,481.48189 L 352.39165,482.93684 L 350.1284,486.17004 L 349.15844,489.88824 L 344.79361,496.03133 L 342.3687,498.45624 L 339.78213,497.48628 L 338.00387,496.35465 L 336.06394,495.70801 L 332.18409,493.44477 L 332.18409,492.79812 L 330.40583,490.8582 L 325.23269,488.75661 L 317.79631,480.99691 L 315.53306,476.30876 L 315.53306,468.22573 L 312.29985,461.75931 L 311.81487,459.01109 L 310.19827,458.04112 L 309.06664,455.93954 L 304.05517,453.83795 L 302.76189,452.22135 L 295.64882,444.29998 L 294.35554,441.06677 L 289.66738,438.80352 L 288.21243,434.43865 L 285.62584,431.52878 L 283.68593,431.04382 L 283.0367,426.36618 L 291.03857,427.05207 L 320.07356,429.79552 L 349.10864,431.39588 L 351.39487,407.61912 L 355.28142,352.0641 L 356.88181,333.31678 L 358.25355,333.34536 M 457.2302,567.32304 L 456.66439,560.20996 L 453.91615,553.01604 L 453.35033,545.98379 L 454.88611,537.73908 L 458.20017,530.86849 L 461.67587,525.45284 L 464.82827,521.89629 L 465.47491,522.13879 L 460.70591,528.76689 L 456.34107,535.31417 L 454.3203,541.94226 L 453.99698,547.11542 L 454.88611,553.25854 L 457.47269,560.45246 L 457.95767,565.6256 L 458.11933,567.08056 L 457.2302,567.32304 z",CA:"M 136.74132,386.75359 L 140.5564,386.26497 L 142.04244,384.25353 L 142.77448,382.31244 L 139.59796,382.22232 L 138.49879,380.45929 L 139.27701,378.74462 L 139.23083,372.59378 L 141.44892,371.266 L 144.14622,368.68302 L 144.5573,363.76763 L 146.20382,360.27014 L 148.14711,358.16638 L 151.41598,356.45171 L 152.69537,355.72188 L 153.4516,354.23804 L 152.58327,353.34553 L 151.62262,351.8353 L 150.68615,346.48685 L 147.7822,341.25051 L 147.87926,338.46426 L 145.67843,335.2162 L 130.67947,311.98682 L 111.24655,283.27272 L 88.819562,250.23896 L 76.117107,230.69405 L 77.913818,223.48571 L 84.726337,197.53705 L 92.84244,166.10144 L 80.477041,162.76442 L 66.988306,159.33508 L 54.414067,155.21987 L 46.869522,153.16227 L 35.438394,150.19018 L 28.387579,147.77848 L 26.80746,152.50284 L 26.645799,159.93922 L 21.472664,171.74043 L 18.401116,174.327 L 18.077795,175.45862 L 16.299529,176.26693 L 14.844585,180.4701 L 14.036283,183.70331 L 16.784511,187.90648 L 18.401116,192.10965 L 19.532739,195.66618 L 19.209418,202.1326 L 17.431153,205.20415 L 16.784511,211.02393 L 15.814548,214.74212 L 17.592813,218.62197 L 20.341041,223.14846 L 22.604288,227.99828 L 23.897571,232.03979 L 23.574251,235.273 L 23.25093,235.75798 L 23.25093,237.85956 L 28.909046,244.16432 L 28.424065,246.58923 L 27.777423,248.85248 L 27.130781,250.7924 L 27.292441,259.03709 L 29.394027,262.75528 L 31.333953,265.34184 L 34.082181,265.82683 L 35.052144,268.57505 L 33.920521,272.13158 L 31.818934,273.74819 L 30.687311,273.74819 L 29.879009,277.62804 L 30.36399,280.53793 L 33.5972,284.90276 L 35.213804,290.23756 L 36.668748,294.92571 L 37.962032,297.99726 L 41.356902,303.81704 L 42.811846,306.4036 L 43.296828,309.31349 L 44.913432,310.28345 L 44.913432,312.70836 L 44.10513,314.64829 L 42.326865,321.76135 L 41.841883,323.70127 L 44.266791,326.4495 L 48.469963,326.93448 L 52.996456,328.71275 L 56.876307,330.81433 L 59.786196,330.81433 L 62.696084,333.88588 L 65.282651,338.7357 L 66.414275,340.99894 L 70.294126,343.10053 L 75.14394,343.90883 L 76.598884,346.01042 L 77.245526,349.24363 L 75.790582,349.89027 L 76.113903,350.86023 L 79.347114,351.66853 L 82.095342,351.8302 L 85.005231,356.51835 L 88.885085,360.72152 L 89.693387,362.98477 L 92.279955,367.18794 L 92.603276,370.42115 L 92.603276,379.79746 L 93.088257,381.57572 L 103.11121,383.03067 L 122.83378,385.77889 z M 48.793607,337.03691 L 50.086895,338.57269 L 49.925235,339.86598 L 46.692014,339.78515 L 46.1262,338.57269 L 45.479556,337.11774 z M 50.733539,337.03691 L 51.945997,336.39027 L 55.50254,338.49186 L 58.5741,339.70431 L 57.684964,340.35097 L 53.158455,340.10847 L 51.541845,338.49186 z M 71.426153,356.84039 L 73.204418,359.18447 L 74.012731,360.15444 L 75.54851,360.72025 L 76.114317,359.2653 L 75.144354,357.48703 L 72.476951,355.46627 L 71.426153,355.62793 z M 69.971198,365.48925 L 71.749474,368.64164 L 72.961932,370.58158 L 71.506978,370.82406 L 70.213694,369.61161 C 70.213694,369.61161 69.486217,368.15666 69.486217,367.7525 C 69.486217,367.34836 69.486217,365.57008 69.486217,365.57008 z",AZ:"M 137.74699,387.50041 L 135.11998,389.65874 L 134.79666,391.11369 L 135.28164,392.08365 L 154.19591,402.75324 L 166.32045,410.35128 L 181.03155,418.91929 L 197.84424,428.94224 L 210.13044,431.36715 L 235.25838,434.07206 L 237.7892,421.56511 L 241.54187,394.32217 L 248.50673,341.44101 L 252.76399,310.47532 L 228.16728,306.79655 L 200.96119,302.2241 L 167.53204,295.90642 L 164.61014,313.99826 L 164.1529,314.45551 L 162.43823,317.08467 L 159.92338,316.97035 L 158.66596,314.22688 L 155.92249,313.88395 L 155.00799,312.74084 L 154.09351,312.74084 L 153.17901,313.3124 L 151.23572,314.3412 L 151.12142,321.31418 L 150.89278,323.02885 L 150.32124,335.60309 L 148.83519,337.775 L 148.26363,341.09003 L 151.0071,346.00542 L 152.26452,351.8353 L 153.06471,352.8641 L 154.09351,353.43566 L 153.97919,355.72188 L 152.37884,357.09361 L 148.9495,358.80828 L 147.00621,360.75158 L 145.52016,364.40953 L 144.9486,369.32492 L 142.09082,372.06839 L 140.03322,372.75426 L 139.91891,378.58414 L 139.46166,380.29881 L 139.91891,381.09899 L 143.57687,381.67053 L 143.00531,384.41401 L 141.51926,386.58592 z",NV:"M 140.65786,177.57182 L 161.63805,182.08304 L 171.35451,184.02634 L 180.61372,185.85531 L 187.22838,187.48864 L 186.67001,193.35369 L 183.12636,210.68284 L 179.03314,230.66313 L 177.08985,240.3818 L 174.91793,253.66389 L 171.76337,270.07854 L 168.24171,285.76337 L 166.27332,295.94373 L 163.80775,312.71445 L 163.35051,313.8136 L 162.27775,316.28228 L 160.40481,316.16797 L 159.30786,313.4245 L 156.56439,312.92108 L 155.16847,311.93845 L 153.13064,312.25941 L 152.21615,312.99145 L 150.91477,314.3412 L 150.47951,321.31418 L 149.92992,323.02885 L 149.51885,335.12166 L 148.19675,336.83582 L 146.32033,334.57429 L 131.80281,311.82634 L 112.36989,282.79128 L 89.621946,248.95514 L 77.240446,230.3731 L 78.87668,223.80666 L 85.849676,197.858 L 93.737155,166.51015 L 127.34467,174.65279 L 141.06203,177.62488",UT:"M 252.97063,309.30699 L 228.32776,305.83369 L 201.76357,300.94029 L 167.93683,294.92034 L 169.52553,285.76337 L 172.72624,270.55998 L 176.04127,253.98484 L 178.21319,240.3818 L 180.15648,231.46552 L 183.92875,211.00379 L 187.4724,193.51417 L 188.58694,187.94149 L 201.30406,190.19914 L 213.30675,192.25674 L 223.59476,194.08573 L 231.93948,195.45747 L 235.61725,195.93663 L 234.13245,206.56705 L 231.82083,219.73971 L 239.62852,220.66808 L 256.03504,222.47287 L 264.24601,223.32851 L 262.11553,245.29707 L 258.91482,267.86257 L 255.16215,295.68875 L 253.49601,306.79655 z",CO:"M 378.62078,256.79629 L 380.06066,235.51461 L 347.96558,232.45018 L 323.50262,229.75064 L 286.23746,225.63547 L 265.5471,223.12065 L 262.91791,245.29707 L 259.7172,267.70209 L 255.96454,295.68875 L 254.45888,306.79655 L 254.20828,309.55981 L 288.13455,313.35406 L 325.87526,317.62063 L 357.83587,320.7865 L 374.44407,321.63284",NM:"M 282.72425,431.045 L 282.07384,424.9219 L 290.71762,425.4473 L 320.23405,428.5117 L 348.62721,429.95159 L 350.59248,407.61912 L 354.31856,351.74315 L 355.43752,332.35392 L 357.45116,332.70345 L 357.43687,321.62845 L 325.23335,319.22539 L 288.29503,314.79835 L 253.83017,310.68314 L 249.63006,341.44101 L 242.6652,394.64312 L 238.91254,421.56511 L 236.86315,434.87445 L 252.32382,436.8636 L 253.6171,426.84065 L 270.26813,429.42722 z",OR:"M 140.30581,176.68623 L 144.60346,158.78553 L 149.26824,140.9068 L 150.31903,136.67728 L 152.6734,131.05405 L 152.05789,129.89117 L 149.54303,129.84499 L 148.26143,128.17429 L 148.71867,126.71022 L 149.22208,123.46334 L 153.68023,117.97639 L 155.50921,116.87724 L 156.65232,115.73413 L 158.13836,112.1685 L 162.18542,106.4991 L 165.75105,102.6367 L 165.97967,99.185383 L 162.71081,96.716701 L 161.50192,92.206659 L 148.26363,88.462106 L 133.17454,84.918456 L 117.74252,85.032762 L 117.28528,83.661033 L 111.79833,85.718637 L 107.34019,85.147078 L 104.93965,83.546717 L 103.68223,84.232592 L 98.99547,84.00396 L 97.280804,82.632231 L 92.022478,80.574627 L 91.222297,80.688943 L 86.878467,79.202887 L 84.935176,81.03187 L 78.762364,80.688943 L 72.818181,76.573734 L 73.504046,75.773554 L 73.732667,68.000381 L 71.446442,64.113804 L 67.331234,63.542245 L 66.645369,61.027398 L 64.291437,60.560833 L 58.492912,62.619617 L 56.229665,69.086035 L 52.996456,79.108984 L 49.763246,85.575403 L 44.751772,99.639864 L 38.285353,113.21934 L 30.20233,125.82886 L 28.262404,128.73875 L 27.454102,137.30675 L 26.160818,143.28819 L 28.86901,146.81562 L 35.598871,149.06684 L 47.190476,152.35988 L 55.055974,154.89892 L 67.469737,158.5327 L 80.797995,162.12252 L 93.965776,165.68813",ND:"M 471.30528,127.66846 L 470.94037,120.17229 L 468.95092,112.85637 L 467.12193,99.207152 L 466.66469,89.376374 L 464.67523,86.267982 L 463.07487,80.917336 L 463.07487,70.629316 L 463.76073,66.742729 L 461.64538,61.243718 L 433.22188,60.679691 L 414.63093,60.033049 L 388.11861,58.739765 L 363.17227,56.855896 L 361.91155,71.086559 L 360.53981,86.175663 L 358.28133,111.12326 L 357.79515,122.14348 L 414.61127,125.90763 z",SD:"M 472.79706,203.1809 L 471.84336,202.10003 L 470.32265,198.47334 L 472.15163,194.77142 L 473.20241,189.21633 L 470.61942,187.15872 L 470.32265,184.41526 L 470.91618,181.41897 L 473.06612,180.61658 L 473.36289,174.88124 L 473.29475,144.79538 L 472.67702,141.82329 L 468.56181,138.23348 L 467.57918,136.24402 L 467.57918,134.3227 L 469.4763,133.0433 L 471.00852,131.19013 L 471.19098,128.47084 L 413.80889,126.87049 L 357.63468,122.9839 L 356.86798,128.26326 L 355.25497,144.1315 L 353.90976,162.07837 L 352.30941,186.67509 L 368.33718,187.70389 L 387.97453,188.847 L 405.96758,190.15059 L 429.74434,191.45417 L 440.4896,190.67598 L 443.34959,192.96221 L 447.66923,195.93431 L 448.65187,196.68831 L 452.19331,195.798 L 456.24038,195.50124 L 458.98385,195.43309 L 462.09665,196.64436 L 466.64491,198.08424 L 469.77747,199.84507 L 470.3952,201.76638 L 471.30969,203.66351 L 472.01534,203.18207 z",NE:"M 484.24444,246.9897 L 485.61618,249.66503 L 485.70851,251.79078 L 488.06288,255.51689 L 490.78217,258.66923 L 485.73269,258.66923 L 442.25013,257.73055 L 401.46327,256.84025 L 380.27171,255.8796 L 381.34448,234.55175 L 347.96558,231.80828 L 352.30941,187.79842 L 367.85574,188.82723 L 387.97453,189.97033 L 405.8071,191.11345 L 429.58386,192.25656 L 440.32912,191.79932 L 442.38672,194.08554 L 447.1878,197.05764 L 448.33091,197.97213 L 452.67474,196.60039 L 456.56133,196.14315 L 459.3048,195.91452 L 461.13378,197.28626 L 466.16348,198.88662 L 469.13557,200.48698 L 469.59282,202.08734 L 470.50731,204.14494 L 472.33629,204.14494 L 473.13427,204.19111 L 474.11689,209.40326 L 476.86037,217.42924 L 478.09582,222.06983 L 480.22156,225.88828 L 480.74695,230.82564 L 482.18684,235.10132 L 482.73641,241.57092",IA:"M 566.59351,201.62843 L 566.76414,203.57088 L 569.05036,204.71064 L 570.1918,205.96722 L 570.53556,207.22883 L 574.42215,210.43123 L 575.10802,212.60398 L 574.30868,215.46595 L 572.82012,219.01043 L 572.02078,221.75222 L 569.84803,223.35426 L 568.13252,223.92666 L 562.64725,225.41186 L 561.96138,227.69475 L 561.16204,229.9793 L 561.73443,231.35104 L 563.44994,233.06488 L 563.44826,236.72617 L 561.27886,238.32653 L 560.81995,239.81342 L 560.81995,242.32994 L 559.33139,242.78718 L 557.61755,244.15725 L 557.16198,245.64246 L 557.61755,247.35964 L 556.24331,248.56409 L 553.94955,245.87276 L 552.46601,243.24611 L 544.12548,244.04544 L 533.95428,244.61617 L 508.91758,245.30372 L 495.88274,245.53234 L 486.50922,245.76096 L 485.19344,245.88221 L 483.53879,241.41044 L 483.31017,234.78037 L 481.70981,230.66516 L 481.02395,225.40685 L 478.73772,221.74888 L 477.82324,216.94781 L 475.07976,209.40326 L 473.93665,204.03062 L 472.56491,201.85871 L 470.96455,199.11525 L 472.79353,194.77142 L 474.16527,189.05585 L 471.4218,186.99824 L 470.96455,184.25477 L 471.87905,181.73992 L 473.59372,181.73992 L 485.13916,181.73992 L 534.75027,181.05405 L 554.62705,180.36819 L 556.47778,183.115 L 558.31012,185.73663 L 558.76569,186.541 L 556.93503,189.28949 L 557.3906,193.51148 L 559.90546,197.39807 L 562.8742,199.22202 L 565.27892,199.45232 z",MS:"M 624.55882,466.96958 L 624.30456,468.22573 L 619.13142,468.22573 L 617.67648,467.41743 L 615.57489,467.09411 L 608.78515,469.03403 L 607.00689,468.22573 L 604.42032,472.4289 L 603.31778,473.20692 L 602.19395,470.71894 L 601.05083,466.83235 L 597.6215,463.63164 L 598.7646,456.08709 L 598.07874,455.1726 L 596.24976,455.40122 L 588.01934,456.08709 L 563.78534,456.77296 L 563.3281,455.1726 L 564.01397,447.1708 L 567.44331,440.99799 L 572.70163,431.85309 L 571.78714,429.79549 L 572.93025,429.79549 L 573.61612,426.59477 L 571.32989,424.76579 L 571.55852,422.93681 L 569.50091,418.36436 L 569.21513,413.0203 L 570.58686,410.36256 L 570.18678,406.01873 L 568.81504,403.04663 L 570.18678,401.6749 L 568.81504,399.6173 L 569.27229,397.78832 L 570.18678,391.6155 L 573.15887,388.87204 L 572.473,386.81443 L 576.13097,381.5561 L 578.87444,380.64162 L 578.87444,378.12677 L 578.18857,376.75503 L 580.93204,371.49672 L 583.67551,370.3536 L 583.78295,366.94152 L 592.4584,366.86408 L 616.54585,364.92416 L 621.12643,364.69553 L 621.13451,371.06725 L 621.29617,387.71831 L 620.48787,418.75716 L 620.32621,432.82165 L 623.07445,451.57429 z",IN:"M 618.42049,300.8552 L 618.48577,297.99662 L 618.97076,293.47011 L 621.234,290.56023 L 623.01228,286.68036 L 625.59884,282.47719 L 625.11386,276.6574 L 623.3356,273.90917 L 623.01228,270.67596 L 623.82058,265.17949 L 623.3356,258.22808 L 622.0423,242.22367 L 620.74902,226.86591 L 619.77855,215.14589 L 622.84961,216.0354 L 624.30456,217.00536 L 625.43618,216.68204 L 627.53777,214.74212 L 630.36734,213.12513 L 635.46014,212.96309 L 657.44601,210.69983 L 663.02174,210.16667 L 664.52488,226.12288 L 668.77623,262.96443 L 669.37469,268.73603 L 669.00319,270.99928 L 670.23117,272.79465 L 670.32756,274.1672 L 667.80627,275.76671 L 664.26684,277.31802 L 661.06471,277.8683 L 660.46625,282.73523 L 655.89156,286.0477 L 653.09514,290.05814 L 653.41846,292.43487 L 652.83712,293.96907 L 649.51065,293.96907 L 647.92512,292.35247 L 645.43181,293.61467 L 642.74885,295.11781 L 642.91052,298.17226 L 641.71673,298.43029 L 641.24885,297.41215 L 639.08197,295.90901 L 635.83165,297.25049 L 634.28034,300.25674 L 632.8425,299.44844 L 631.38755,297.84893 L 626.92321,298.33392 L 621.33038,299.30388 z",IL:"M 617.80493,301.60133 L 617.80493,297.99662 L 618.06296,293.12969 L 620.43968,289.99286 L 622.21795,286.22646 L 624.80452,282.36371 L 624.43302,277.11131 L 622.42781,273.56874 L 622.33143,270.22206 L 623.02626,264.95255 L 622.20085,257.77418 L 621.13451,241.99673 L 619.84123,226.97939 L 618.91895,215.34019 L 618.64644,214.4188 L 617.83814,211.83223 L 616.54486,208.11404 L 614.92825,206.33577 L 613.47331,203.74921 L 613.23974,198.26025 L 603.33707,199.57249 L 576.13098,201.28716 L 567.44331,200.8585 L 567.67193,203.23045 L 569.95816,203.91632 L 570.87264,205.05943 L 571.32989,206.88841 L 575.21647,210.31775 L 575.90235,212.60398 L 575.21647,216.03332 L 573.38749,219.69128 L 572.70163,222.20612 L 570.4154,224.03511 L 568.58642,224.72098 L 563.3281,226.09271 L 562.64223,227.92169 L 561.95636,229.9793 L 562.64223,231.35104 L 564.47121,232.9514 L 564.24259,237.0666 L 562.4136,238.66696 L 561.72774,240.26732 L 561.72774,243.01079 L 559.89876,243.46803 L 558.2984,244.61115 L 558.06978,245.98289 L 558.2984,248.04049 L 556.58373,249.35506 L 555.55493,252.1557 L 556.01217,255.81365 L 558.2984,263.12958 L 565.61433,270.67413 L 571.10126,274.33209 L 570.87264,278.67592 L 571.78714,280.04766 L 578.18857,280.5049 L 580.93204,281.87664 L 580.24618,285.5346 L 577.95995,291.47879 L 577.27408,294.67951 L 579.5603,298.56609 L 585.96174,303.82441 L 590.5342,304.51028 L 592.59179,309.53998 L 594.6494,312.74069 L 593.73491,315.71278 L 595.33527,319.82799 L 597.16425,321.8856 L 599.10861,321.0933 L 599.7953,318.93012 L 601.8316,317.49228 L 605.06793,316.39174 L 608.15659,317.57154 L 611.03228,318.63788 L 611.82348,318.42804 L 611.75819,317.18606 L 610.69186,314.42072 L 611.12866,312.044 L 613.409,310.47557 L 615.76863,309.48851 L 616.93134,309.06882 L 616.34998,307.74444 L 615.58986,305.57757 L 616.83496,304.31536 z",MN:"M 471.87905,128.47084 L 471.4218,120.0118 L 469.59282,112.69588 L 467.76384,99.207152 L 467.30659,89.376374 L 465.47761,85.947031 L 463.87725,80.917336 L 463.87725,70.629316 L 464.56311,66.742729 L 462.74218,61.291062 L 492.8746,61.326333 L 493.19792,53.081649 L 493.84456,52.919988 L 496.10781,53.40497 L 498.04773,54.213272 L 498.85603,59.709728 L 500.31098,65.852826 L 501.92758,67.469431 L 506.7774,67.469431 L 507.10072,68.924375 L 513.40548,69.247696 L 513.40548,71.349282 L 518.25529,71.349282 L 518.57861,70.055998 L 519.71023,68.924375 L 521.97348,68.277733 L 523.26676,69.247696 L 526.17665,69.247696 L 530.0565,71.834263 L 535.3913,74.25917 L 537.81621,74.744152 L 538.30119,73.774189 L 539.75613,73.289207 L 540.24111,76.199096 L 542.82768,77.49238 L 543.31266,77.007398 L 544.60595,77.169059 L 544.60595,79.270645 L 547.19251,80.240608 L 550.26406,80.240608 L 551.88067,79.432305 L 555.11388,76.199096 L 557.70044,75.714115 L 558.50875,77.49238 L 558.99373,78.785663 L 559.96369,78.785663 L 560.93365,77.977361 L 569.82498,77.65404 L 571.60324,80.725589 L 572.24989,80.725589 L 572.9635,79.64131 L 577.40341,79.270645 L 576.79131,81.550104 L 572.85259,83.387229 L 563.60681,87.448357 L 558.83207,89.455254 L 555.76052,92.041822 L 553.33561,95.598352 L 551.07237,99.478203 L 549.2941,100.28651 L 544.76761,105.29798 L 543.47432,105.45964 L 539.63268,108.39354 L 536.81624,111.55445 L 536.58762,114.52487 L 536.81457,122.30306 L 535.21755,123.90342 L 529.95924,128.01694 L 528.12691,133.73419 L 530.6451,137.38211 L 531.10402,139.90198 L 529.95589,142.87575 L 529.72893,146.53538 L 530.18618,153.61933 L 533.61218,157.72618 L 536.58762,157.72618 L 539.09745,160.01909 L 542.29984,161.38414 L 545.95948,166.41886 L 553.04677,171.44186 L 554.87742,173.50448 L 555.11107,179.00649 L 534.52332,179.69236 L 474.27457,180.15128 L 473.93665,144.47443 L 473.47941,141.50234 L 469.3642,138.073 L 468.22108,136.24402 L 468.22108,134.64365 L 470.27868,133.0433 L 471.65042,131.67156 z",WI:"M 612.94089,197.18116 L 613.31165,194.21124 L 611.69504,189.68474 L 611.0484,183.54165 L 609.91678,181.11674 L 610.88674,178.04519 L 611.69504,175.1353 L 613.14999,172.54874 L 612.50334,169.15387 L 611.8567,165.59734 L 612.34168,163.81907 L 614.28161,161.39416 L 614.44327,158.64593 L 613.63497,157.35265 L 614.28161,154.76608 L 614.76659,151.53287 L 617.51482,145.87476 L 620.42471,139.08502 L 620.58637,136.82177 L 620.26305,135.85181 L 619.45474,136.33679 L 615.25157,142.64155 L 612.50334,146.68306 L 610.56342,148.46133 L 609.75512,150.72457 L 608.30017,151.53287 L 607.16855,153.4728 L 605.7136,153.14948 L 605.55194,151.37121 L 606.84523,148.94631 L 608.94681,144.25815 L 610.72508,142.64155 L 611.8264,140.34999 L 610.19574,139.44474 L 608.824,138.073 L 607.22364,127.78498 L 603.56569,126.64187 L 602.19395,124.35564 L 589.6197,121.61217 L 587.10485,120.46906 L 578.87444,118.18283 L 570.64402,117.03971 L 566.47456,111.63491 L 565.94513,112.89602 L 564.81351,112.73436 L 564.16686,111.60274 L 561.41864,110.79444 L 560.28701,110.9561 L 558.50875,111.92606 L 557.53878,111.27942 L 558.18543,109.33949 L 560.12535,106.26794 L 561.25697,105.13632 L 559.31705,103.68138 L 557.21546,104.48968 L 554.30557,106.4296 L 546.86919,109.66281 L 543.9593,110.30945 L 541.04942,109.82447 L 540.06769,108.94622 L 537.95099,111.7814 L 537.72237,114.52487 L 537.72237,122.9839 L 536.57925,124.58427 L 531.32093,128.47084 L 529.03471,134.41503 L 529.49195,134.64365 L 532.0068,136.70126 L 532.69266,139.90198 L 530.86368,143.10269 L 530.86368,146.98928 L 531.32093,153.61933 L 534.29302,156.59143 L 537.72237,156.59143 L 539.55135,159.79215 L 542.98068,160.24939 L 546.86727,165.96496 L 553.95457,170.08017 L 556.01217,172.82364 L 556.92667,180.25388 L 557.61253,183.5689 L 559.89876,185.16926 L 560.12738,186.541 L 558.06978,189.97033 L 558.2984,193.17106 L 560.81325,197.05764 L 563.3281,198.20075 L 566.30019,198.65799 L 567.64253,200.03811 L 576.81603,200.03809 L 602.88316,198.55122 z",MO:"M 555.78857,249.52738 L 553.2687,246.44013 L 552.12558,244.1539 L 544.35242,244.83977 L 534.52164,245.29701 L 509.14453,246.21151 L 495.6558,246.44013 L 487.76835,246.55444 L 485.48209,246.66875 L 486.73952,249.1836 L 486.5109,251.46982 L 489.02574,255.35641 L 492.11214,259.47162 L 495.19855,262.21509 L 497.48478,262.44371 L 498.85651,263.35821 L 498.85651,266.3303 L 497.02754,267.93066 L 496.57028,270.21688 L 498.62789,273.64623 L 501.14275,276.61832 L 503.65759,278.4473 L 505.02932,290.10705 L 504.34346,325.42926 L 504.57208,330.11601 L 505.02932,335.49952 L 528.46231,335.3827 L 551.66834,334.69683 L 572.473,333.89582 L 584.12774,333.66552 L 586.29714,337.09152 L 585.61295,340.39902 L 582.5257,342.80206 L 581.95331,344.6394 L 587.3318,345.09666 L 591.22676,344.41078 L 592.94394,338.91715 L 593.59536,333.06036 L 595.91436,331.03553 L 597.62651,329.54864 L 599.68412,328.519 L 599.79926,325.65871 L 600.37334,323.9432 L 599.34202,322.19493 L 596.59688,322.3395 L 594.42748,319.71451 L 593.05406,315.48584 L 593.85507,312.96764 L 591.91094,309.53998 L 590.0803,304.96418 L 585.28089,304.16484 L 578.31209,298.56609 L 576.59323,294.45256 L 577.39258,291.25184 L 579.45185,285.19417 L 579.91077,282.33054 L 577.96163,281.29923 L 571.10629,280.50156 L 570.07832,278.7894 L 569.96652,274.55904 L 564.47958,271.12803 L 557.50407,263.35653 L 555.21785,256.0406 L 554.98756,251.81528 z",AR:"M 590.95215,344.95331 L 587.10485,345.89098 L 580.93204,345.43373 L 581.61791,342.46164 L 584.81863,339.71817 L 585.27587,337.43194 L 583.44689,334.45984 L 572.473,334.91709 L 551.66834,335.83158 L 528.34883,336.51745 L 505.02932,336.97469 L 506.62968,343.83338 L 506.62967,352.0638 L 508.00142,363.03779 L 508.23004,400.87472 L 510.51627,402.81801 L 513.48836,401.44628 L 516.23184,402.58939 L 516.66218,412.91269 L 539.548,412.77064 L 558.41187,411.96962 L 568.53344,411.77209 L 569.67907,409.68172 L 569.39245,406.13221 L 567.56682,403.16011 L 569.16551,401.6749 L 567.56682,399.1634 L 568.25102,396.65357 L 569.61941,391.04814 L 572.1376,388.98551 L 571.45173,386.70095 L 575.1097,381.32916 L 577.85317,379.96077 L 577.73969,378.46719 L 577.39425,376.64155 L 580.2512,371.04282 L 582.65424,369.78623 L 583.03837,366.3586 L 584.80904,365.1169 L 585.66552,360.88263 L 584.32406,356.87219 L 588.36558,354.49548 L 588.91584,352.47628 L 590.15112,348.2087 z",OK:"M 375.34313,322.57146 L 364.65498,322.11427 L 358.22497,321.62845 L 358.48217,321.82848 L 357.77873,332.25058 L 379.74411,333.65746 L 411.79966,334.96106 L 409.46506,359.37971 L 409.00781,377.21228 L 409.23644,378.81264 L 413.58027,382.4706 L 415.63787,383.61371 L 416.32374,383.38509 L 417.00961,381.32748 L 418.38135,383.15647 L 420.43895,383.15647 L 420.43895,381.78473 L 423.18242,383.15647 L 422.72518,387.04305 L 426.84039,387.27167 L 429.35523,388.41479 L 433.47044,389.10066 L 435.98529,390.92964 L 438.27152,388.87204 L 441.70086,389.5579 L 444.21571,392.98724 L 445.13019,392.98724 L 445.13019,395.27347 L 447.41642,395.95933 L 449.70264,393.67311 L 451.53163,394.35897 L 454.04647,394.35897 L 454.96097,396.87383 L 459.76204,398.7028 L 461.13378,398.01694 L 462.96276,393.90173 L 464.10587,393.90173 L 465.24899,395.95933 L 469.3642,396.6452 L 473.02215,398.01694 L 475.99425,398.93143 L 477.82324,398.01694 L 478.5091,395.50209 L 482.85293,395.50209 L 484.91053,396.41658 L 487.654,394.35897 L 488.79712,394.35897 L 489.48299,395.95933 L 493.59819,395.95933 L 495.19855,393.90173 L 497.02754,394.35897 L 499.08514,396.87383 L 502.28585,398.7028 L 505.48658,399.6173 L 507.42766,400.73623 L 507.03856,363.51922 L 505.66681,352.54524 L 505.50635,343.6729 L 504.06646,337.13517 L 503.28826,329.95553 L 503.22012,326.13931 L 491.08328,326.45805 L 444.67324,326.00081 L 399.63433,323.94319 z",KS:"M 503.38059,325.13028 L 490.76233,325.33471 L 444.67324,324.87748 L 400.11576,322.81985 L 375.48602,321.56244 L 379.62981,256.84247 L 401.46327,257.64264 L 441.92918,259.01437 L 486.05364,259.47162 L 491.14927,259.47162 L 494.39617,262.69652 L 497.16383,262.92514 L 498.05413,264.00011 L 498.05413,266.00934 L 496.22515,267.60971 L 495.7679,270.21688 L 497.98598,273.80671 L 500.50084,276.93927 L 503.01569,278.92873 L 504.06646,290.10705 z",LA:"M 602.20213,472.99473 L 601.17268,470.37851 L 600.02956,467.28625 L 596.7137,463.74511 L 597.62986,456.99488 L 597.51137,455.85345 L 596.24976,456.19555 L 588.01934,457.10836 L 562.99102,457.56728 L 562.30683,455.1726 L 563.21964,446.7169 L 566.53552,440.77105 L 571.56688,432.08003 L 570.99281,429.68201 L 572.2494,429.00116 L 572.70833,427.04867 L 570.42209,424.99274 L 570.3103,423.05029 L 568.47964,418.70478 L 568.02323,412.76393 L 558.2984,412.87741 L 539.0941,413.79191 L 516.88913,413.82048 L 516.9177,423.39405 L 517.60357,432.76758 L 518.28944,436.65416 L 520.80429,440.76937 L 521.71878,445.79908 L 526.06261,451.28601 L 526.29123,454.48673 L 526.9771,455.1726 L 526.29123,463.63164 L 523.31914,468.66133 L 524.9195,470.71894 L 524.23362,473.23378 L 523.54776,480.54971 L 522.17602,483.75042 L 522.29848,487.36687 L 526.98496,485.84672 L 535.06798,485.5234 L 545.41425,489.07993 L 551.88067,490.21156 L 555.59886,488.75661 L 558.83207,489.88824 L 562.06528,490.8582 L 562.87358,488.75661 L 559.64037,487.62499 L 557.0538,488.10997 L 554.30557,486.49337 C 554.30557,486.49337 554.46724,485.20008 555.11388,485.03842 C 555.76052,484.87676 558.18543,484.06846 558.18543,484.06846 L 559.96369,485.5234 L 561.74196,484.55344 L 564.97517,485.20008 L 566.43011,487.62499 L 566.75343,489.88824 L 571.27992,490.21156 L 573.05819,491.98982 L 572.24989,493.60643 L 570.9566,494.41473 L 572.57321,496.03133 L 580.97955,499.58786 L 584.53608,498.29458 L 585.50605,495.86967 L 588.09261,495.22303 L 589.87088,493.76809 L 591.16416,494.73805 L 591.97246,497.64794 L 589.70922,498.45624 L 590.35586,499.10288 L 593.75073,497.8096 L 596.01398,494.41473 L 596.82228,493.92975 L 594.72069,493.60643 L 595.52899,491.98982 L 595.36733,490.53488 L 597.46892,490.0499 L 598.60054,488.75661 L 599.24718,489.56491 C 599.24718,489.56491 599.08552,492.63646 599.89383,492.63646 C 600.70213,492.63646 604.097,493.28311 604.097,493.28311 L 608.13851,495.22303 L 609.10847,496.67798 L 612.01836,496.67798 L 613.14999,497.64794 L 615.41323,494.57639 L 615.41323,493.12144 L 614.11995,493.12144 L 610.72508,490.37322 L 604.9053,489.56491 L 601.67209,487.30167 L 602.80372,484.55344 L 605.06696,484.87676 L 605.22862,484.23012 L 603.45036,483.26016 L 603.45036,482.77517 L 606.68357,482.77517 L 608.46183,479.70363 L 607.16855,477.7637 L 606.84523,475.01547 L 605.39028,475.17713 L 603.45036,477.27872 L 602.80372,479.86529 L 599.73217,479.21864 L 598.7622,477.44038 L 600.54047,475.50045 L 602.56122,473.7222 z",VA:"M 828.90662,269.2457 L 828.76271,267.29867 L 835.21614,264.74879 L 834.44573,267.96663 L 831.52578,271.74574 L 831.10769,276.33156 L 831.56944,279.722 L 829.74147,284.70016 L 827.5772,286.6163 L 826.10686,281.97549 L 826.55275,276.52638 L 828.13975,272.34331 z M 831.18615,297.54706 L 773.01197,310.12249 L 735.585,315.40156 L 728.90667,315.02638 L 726.32142,316.95276 L 718.98229,317.17345 L 710.60018,318.15112 L 701.67396,319.10283 L 710.15465,314.15454 L 710.14153,312.07961 L 711.66158,309.93348 L 722.21536,298.43205 L 726.16208,302.90951 L 729.94509,303.87349 L 732.48855,302.73317 L 734.72577,301.42201 L 737.26238,302.76553 L 741.17655,301.33777 L 743.05328,296.78143 L 745.6542,297.32145 L 748.50944,295.1902 L 750.30871,295.6838 L 753.13592,292.00723 L 753.48417,289.92412 L 752.52051,288.64855 L 753.52328,286.78192 L 758.79755,274.50477 L 759.41432,268.76969 L 760.64321,268.24615 L 762.82174,270.68902 L 766.7576,270.38785 L 768.68681,262.81422 L 771.4808,262.25336 L 772.53055,259.51229 L 775.11037,257.16541 L 776.37834,254.8232 L 777.8822,251.47022 L 777.96713,246.40267 L 787.78864,250.22549 C 788.46949,250.56591 788.44474,245.44151 788.44474,245.44151 L 792.49505,246.81886 L 792.03305,249.44766 L 800.18916,252.38732 L 801.48203,254.18171 L 800.61409,257.86385 L 799.35101,259.18967 L 798.84509,260.93571 L 799.339,263.33843 L 801.29798,264.61681 L 805.21607,266.06202 L 808.16474,267.02998 L 813.02121,267.97209 L 815.17352,270.06055 L 818.36396,270.46308 L 819.23203,271.6631 L 818.79254,276.35318 L 820.16727,277.45573 L 819.68832,279.38612 L 820.91773,280.17589 L 820.69593,281.56049 L 818.00194,281.46555 L 818.0909,283.08107 L 820.37189,284.62394 L 820.49343,286.03584 L 822.26654,287.82122 L 822.75833,290.34535 L 820.20529,291.72666 L 821.77751,293.22096 L 827.57853,291.53513 z",DC:"M 801.75695,253.84384 L 800.67992,252.20717 L 799.66604,251.36463 L 800.7653,249.74841 L 802.99814,251.25941 z",HI:"m 264.86254,475.31675 c -4.11668,2.2946 -5.54199,0.83475 -9.10997,9.79227 -1.26445,3.14107 -2.70416,9.13652 -2.99211,12.42282 -0.12519,1.44473 -0.37556,2.85189 -0.50076,3.10603 -0.25039,0.36306 -1.51483,0.57589 -4.36921,0.72612 -4.94509,0.25038 -7.2236,1.08917 -9.27675,3.43026 -1.62749,1.84158 -2.34109,3.90099 -3.39271,9.71367 -0.75115,3.97236 -0.75115,5.52475 -0.75115,18.23589 0,15.41881 0.25037,17.3693 2.41621,22.67759 2.49132,5.99295 8.60071,10.03916 13.90386,9.24544 1.12673,-0.17527 1.58993,-0.10826 1.70261,0.25038 0.10771,0.28795 0.37558,4.08127 0.75116,8.45049 0.25037,4.3692 0.75115,8.41417 0.25037,9.02762 0.50078,1.29949 0.50078,2.96079 3.29256,3.61178 1.25193,0.65101 7.32376,1.8779 10.79157,2.16709 4.9451,0.43816 9.71493,-0.90138 11.95588,-3.32135 2.49133,-2.6353 3.54294,-6.49874 3.83089,-13.75814 0.25037,-6.28466 0.37557,-18.798 2.77926,-12.88354 2.56645,0 2.66659,12.40656 2.85438,18.54511 0.25039,8.70212 1.24255,9.01075 6.74786,11.37497 3.83089,0.97651 9.50211,1.15177 11.37999,0.40062 3.17988,-1.2995 5.3457,-3.86344 6.93564,-8.23389 0.87634,-2.60025 3.83089,-16.24997 4.40678,-20.87194 0.62596,-4.40677 0.75115,-9.31681 1.12672,-22.60534 l 0.25039,-12.1324 1.33956,-2.49133 c 1.66506,-3.17737 2.37865,-5.705 2.67912,-9.13652 0.50076,-6.13818 -1.25193,-10.14809 -6.93566,-16.46705 -2.16583,-2.38365 -5.38327,-6.06682 -7.11093,-8.19633 -1.7652,-2.12952 -4.44431,-4.83869 -5.95916,-6.06682 -3.43025,-2.70917 -9.7149,-5.85024 -13.79492,-6.89684 -3.9686,-1.01407 -11.88076,-1.2632 -15.92572,-0.50077 z"},a=copy(s);for(n in used=[],s)for(failed=!0;failed;){for(v in nnn=(L=a,t=void 0,t=Object.keys(L),L[t[t.length*Math.random()<<0]]),ff=!0,used)if(used[v]==nnn){ff=!1;break}ff&&(used.push(nnn),s[n]=nnn,failed=!1)}var o,n={};for(o in s)n={},this.options.stateSpecificStyles[o]?b.extend(n,e,this.options.stateSpecificStyles[o]):n=e,this.stateShapes[o]=i.path(s[o]).attr(n),this.topShape=this.stateShapes[o],this.stateHitAreas[o]=i.path(s[o]).attr({fill:"#000","stroke-width":0,opacity:0,cursor:"pointer"}),this.stateHitAreas[o].node.dataState=o;for(o in this._onClickProxy=b.proxy(this,"_onClick"),this._onMouseOverProxy=b.proxy(this,"_onMouseOver"),this._onMouseOutProxy=b.proxy(this,"_onMouseOut"),this.stateHitAreas)this.stateHitAreas[o].toFront(),b(this.stateHitAreas[o].node).bind("mouseout",this._onMouseOutProxy),b(this.stateHitAreas[o].node).bind("click",this._onClickProxy),b(this.stateHitAreas[o].node).bind("mouseover",this._onMouseOverProxy)},_initCreateLabels:function(){for(var L,t,e,i=this.paper,s=["VT","NH","MA","RI","CT","NJ","DE","MD","DC"],a=this.options.labelWidth,o=this.options.labelHeight,n=this.options.labelGap,l=this.options.labelRadius,r=a/this.scale,h=o/this.scale,c=(a+n)/this.scale,p=(o+n)/this.scale*.5,M=l/this.scale,u=this.options.labelBackingStyles,S=this.options.labelTextStyles,f={},z=0;z<s.length;++z)e=s[z],L=(z+1)%2*c+860,t=z*p+220,f={},this.options.stateSpecificLabelBackingStyles[e]?b.extend(f,u,this.options.stateSpecificLabelBackingStyles[e]):f=u,this.labelShapes[e]=i.rect(L,t,r,h,M).attr(f),f={},this.options.stateSpecificLabelTextStyles[e]?b.extend(f,S,this.options.stateSpecificLabelTextStyles[e]):b.extend(f,S),f["font-size"]&&(f["font-size"]=parseInt(f["font-size"])/this.scale+"px"),this.labelTexts[e]=i.text(L+r/2,t+h/2,e).attr(f),this.labelHitAreas[e]=i.rect(L,t,r,h,M).attr({fill:"#000","stroke-width":0,opacity:0,cursor:"pointer"}),this.labelHitAreas[e].node.dataState=e;for(e in this.labelHitAreas)this.labelHitAreas[e].toFront(),b(this.labelHitAreas[e].node).bind("mouseout",this._onMouseOutProxy),b(this.labelHitAreas[e].node).bind("click",this._onClickProxy),b(this.labelHitAreas[e].node).bind("mouseover",this._onMouseOverProxy)},_getStateFromEvent:function(L){L=L.target&&L.target.dataState||L.dataState;return this._getState(L)},_getState:function(L){return{shape:this.stateShapes[L],hitArea:this.stateHitAreas[L],name:L,labelBacking:this.labelShapes[L],labelText:this.labelTexts[L],labelHitArea:this.labelHitAreas[L]}},_onMouseOut:function(L){var t=this._getStateFromEvent(L);if(t.hitArea)return!this._triggerEvent("mouseout",L,t)},_defaultMouseOutAction:function(L){var t={};this.options.stateSpecificStyles[L.name]?b.extend(t,this.options.stateStyles,this.options.stateSpecificStyles[L.name]):t=this.options.stateStyles,L.shape.animate(t,this.options.stateHoverAnimation),L.labelBacking&&(t={},this.options.stateSpecificLabelBackingStyles[L.name]?b.extend(t,this.options.labelBackingStyles,this.options.stateSpecificLabelBackingStyles[L.name]):t=this.options.labelBackingStyles,L.labelBacking.animate(t,this.options.stateHoverAnimation))},_onClick:function(L){var t=this._getStateFromEvent(L);if(t.hitArea)return!this._triggerEvent("click",L,t)},_onMouseOver:function(L){var t=this._getStateFromEvent(L);if(t.hitArea)return!this._triggerEvent("mouseover",L,t)},_defaultMouseOverAction:function(L){this.bringShapeToFront(L.shape),this.paper.safari();var t={};this.options.stateSpecificHoverStyles[L.name]?b.extend(t,this.options.stateHoverStyles,this.options.stateSpecificHoverStyles[L.name]):t=this.options.stateHoverStyles,L.shape.animate(t,this.options.stateHoverAnimation),L.labelBacking&&(t={},this.options.stateSpecificLabelBackingHoverStyles[L.name]?b.extend(t,this.options.labelBackingHoverStyles,this.options.stateSpecificLabelBackingHoverStyles[L.name]):t=this.options.labelBackingHoverStyles,L.labelBacking.animate(t,this.options.stateHoverAnimation))},_triggerEvent:function(L,t,e){var i=e.name,s=!1,a=b.Event("usmap"+L+i);if(a.originalEvent=t,this.options[L+"State"][i]&&(s=!1===this.options[L+"State"][i](a,e)),a.isPropagationStopped()&&(this.element.trigger(a,[e]),s=s||a.isDefaultPrevented()),a.isPropagationStopped()||((a=b.Event("usmap"+L)).originalEvent=t,this.options[L]&&(s=!1===this.options[L](a,e)||s),a.isPropagationStopped()||(this.element.trigger(a,[e]),s=s||a.isDefaultPrevented())),!s)switch(L){case"mouseover":this._defaultMouseOverAction(e);break;case"mouseout":this._defaultMouseOutAction(e)}return!s},trigger:function(L,t,e){t=t.replace("usmap",""),L=L.toUpperCase();L=this._getState(L);this._triggerEvent(t,e,L)},bringShapeToFront:function(L){}};!function(a,o,L,t){t=t instanceof Array?t:[];for(var n={},e=0;e<t.length;e++)n[t[e]]=!0;function l(L){this.element=L}l.prototype=L,a.fn[o]=function(){var i=arguments,s=this;return this.each(function(){var L,t=a(this),e=t.data("plugin-"+o);e?"string"==typeof i[0]&&"_"!=i[0].charAt(0)&&"function"==typeof e[i[0]]&&(L=Array.prototype.slice.call(i,1),L=e[i[0]].apply(e,L),i[0]in n&&(s=L)):(e=new l(t),t.data("plugin-"+o,e),e._init&&e._init.apply(e,i))}),s}}(b,"usmap",L,[])}(jQuery,(document,window,Raphael));
		                	var important_code = setInterval(function() {
			                	$("#view_electoral_map").click(function() {
			                        var e = A(return_type = 2);
			                    	_(e)
			                    })
		    	            	$("#answer_select_button").click(function() {
		    	                    var t = $("input:radio[name=game_answers]:checked").val();
		    	                	null == t ? C(e.election_id) : n(t)
		        	            })
		            	        if ($("#answer_select_button")[0] != null) {
		                	    	clearInterval(important_code)
	                    		}
	                    	}, 1000);
	                	} else {
	                		aaa = election_HTML(t, i, a)
		                	aaa = "../static/questionset/"+aaa
		                	$("#game_window").load(aaa)
		                	e.question_number = 0, e.questions_json = campaignTrail_temp.questions_json, e.answers_json = campaignTrail_temp.answers_json, e.states_json = campaignTrail_temp.states_json, e.issues_json = campaignTrail_temp.issues_json, e.state_issue_score_json = campaignTrail_temp.state_issue_score_json, e.candidate_issue_score_json = campaignTrail_temp.candidate_issue_score_json, e.running_mate_issue_score_json = campaignTrail_temp.running_mate_issue_score_json, e.candidate_state_multiplier_json = campaignTrail_temp.candidate_state_multiplier_json, e.answer_score_global_json = campaignTrail_temp.answer_score_global_json, e.answer_score_issue_json = campaignTrail_temp.answer_score_issue_json, e.answer_score_state_json = campaignTrail_temp.answer_score_state_json, e.answer_feedback_json = campaignTrail_temp.answer_feedback_json, e.candidate_image_url = campaignTrail_temp.candidate_image_url, e.running_mate_image_url = campaignTrail_temp.running_mate_image_url, e.candidate_last_name = campaignTrail_temp.candidate_last_name, e.running_mate_last_name = campaignTrail_temp.running_mate_last_name, e.running_mate_state_id = campaignTrail_temp.running_mate_state_id, e.player_answers = campaignTrail_temp.player_answers, e.player_visits = campaignTrail_temp.player_visits, e.answer_feedback_flg = campaignTrail_temp.answer_feedback_flg, e.election_id = Number(e.election_id), e.candidate_id = Number(e.candidate_id), e.running_mate_id = Number(e.running_mate_id), e.difficulty_level_id = Number(e.difficulty_level_id), e.game_start_logging_id = Number(campaignTrail_temp.game_start_logging_id)
		                			                		    	function copy(L){let t={},e;for(e in L)t[e]=L[e];return t}const mainObject={a:1,b:3,c:{x:5,y:4}};console.log(copy(mainObject)),function(b,s){var a={stateStyles:{fill:"#333",stroke:"#666","stroke-width":1,"stroke-linejoin":"round",scale:[1,1]},stateHoverStyles:{fill:"#33c",stroke:"#000",scale:[1.1,1.1]},stateHoverAnimation:500,stateSpecificStyles:{},stateSpecificHoverStyles:{},click:null,mouseover:null,mouseout:null,clickState:{},mouseoverState:{},mouseoutState:{},showLabels:!0,labelWidth:20,labelHeight:15,labelGap:6,labelRadius:3,labelBackingStyles:{fill:"#333",stroke:"#666","stroke-width":1,"stroke-linejoin":"round",scale:[1,1]},labelBackingHoverStyles:{fill:"#33c",stroke:"#000"},stateSpecificLabelBackingStyles:{},stateSpecificLabelBackingHoverStyles:{},labelTextStyles:{fill:"#fff",stroke:"none","font-weight":300,"stroke-width":0,"font-size":"10px"},labelTextHoverStyles:{},stateSpecificLabelTextStyles:{},stateSpecificLabelTextHoverStyles:{}},L={_init:function(L){this.options={},b.extend(this.options,a,L);var t=this.element.width(),e=this.element.height(),i=this.element.width()/930,L=this.element.height()/630;this.scale=Math.min(i,L),this.labelAreaWidth=Math.ceil(70/this.scale);L=930+Math.max(0,this.labelAreaWidth-70);this.paper=s(this.element.get(0),L,630),this.paper.setSize(t,e),this.paper.setViewBox(0,0,L,630,!1),this.stateHitAreas={},this.stateShapes={},this.topShape=null,this._initCreateStates(),this.labelShapes={},this.labelTexts={},this.labelHitAreas={},this.options.showLabels&&this._initCreateLabels()},_initCreateStates:function(){var L,t,e=this.options.stateStyles,i=this.paper,s={AK:"M 158.07671,453.67502 L 157.75339,539.03215 L 159.36999,540.00211 L 162.44156,540.16377 L 163.8965,539.03215 L 166.48308,539.03215 L 166.64475,541.94205 L 173.59618,548.73182 L 174.08117,551.3184 L 177.47605,549.37846 L 178.1227,549.2168 L 178.44602,546.14524 L 179.90096,544.52863 L 181.0326,544.36697 L 182.97253,542.91201 L 186.04409,545.01361 L 186.69074,547.92352 L 188.63067,549.05514 L 189.7623,551.48006 L 193.64218,553.25833 L 197.03706,559.2398 L 199.78529,563.11966 L 202.04855,565.86791 L 203.50351,569.58611 L 208.515,571.36439 L 213.68817,573.46598 L 214.65813,577.83084 L 215.14311,580.9024 L 214.17315,584.29729 L 212.39487,586.56054 L 210.77826,585.75224 L 209.32331,582.68067 L 206.57507,581.22573 L 204.7968,580.09409 L 203.98849,580.9024 L 205.44344,583.65065 L 205.6051,587.36885 L 204.47347,587.85383 L 202.53354,585.9139 L 200.43195,584.62061 L 200.91693,586.23722 L 202.21021,588.0155 L 201.40191,588.8238 C 201.40191,588.8238 200.59361,588.50048 200.10863,587.85383 C 199.62363,587.20719 198.00703,584.45895 198.00703,584.45895 L 197.03706,582.19569 C 197.03706,582.19569 196.71374,583.48898 196.06709,583.16565 C 195.42044,582.84233 194.7738,581.71071 194.7738,581.71071 L 196.55207,579.77077 L 195.09712,578.31582 L 195.09712,573.30432 L 194.28882,573.30432 L 193.48052,576.6992 L 192.34888,577.1842 L 191.37892,573.46598 L 190.73227,569.74777 L 189.92396,569.26279 L 190.24729,574.92094 L 190.24729,576.05256 L 188.79233,574.75928 L 185.23579,568.77781 L 183.13419,568.29283 L 182.48755,564.57462 L 180.87094,561.66472 L 179.25432,560.53308 L 179.25432,558.26983 L 181.35592,556.97654 L 180.87094,556.65322 L 178.28436,557.29986 L 174.88947,554.87495 L 172.30289,551.96504 L 167.45306,549.37846 L 163.41152,546.79188 L 164.70482,543.55866 L 164.70482,541.94205 L 162.92654,543.55866 L 160.01664,544.69029 L 156.29843,543.55866 L 150.64028,541.13375 L 145.14381,541.13375 L 144.49717,541.61873 L 138.03072,537.73885 L 135.92912,537.41553 L 133.18088,531.59573 L 129.62433,531.91905 L 126.06778,533.374 L 126.55277,537.90052 L 127.68439,534.99062 L 128.65437,535.31394 L 127.19941,539.67879 L 130.43263,536.93055 L 131.07928,538.54716 L 127.19941,542.91201 L 125.90612,542.58869 L 125.42114,540.64875 L 124.12785,539.84045 L 122.83456,540.97208 L 120.08632,539.19381 L 117.01475,541.29541 L 115.23649,543.397 L 111.8416,545.4986 L 107.15342,545.33693 L 106.66844,543.23534 L 110.38664,542.58869 L 110.38664,541.29541 L 108.12338,540.64875 L 109.09336,538.22384 L 111.35661,534.34397 L 111.35661,532.5657 L 111.51827,531.75739 L 115.88313,529.49413 L 116.85309,530.78742 L 119.60134,530.78742 L 118.30805,528.20085 L 114.58983,527.87752 L 109.57834,530.62576 L 107.15342,534.02064 L 105.37515,536.60723 L 104.24352,538.87049 L 100.04033,540.32543 L 96.96876,542.91201 L 96.645439,544.52863 L 98.908696,545.4986 L 99.717009,547.60018 L 96.96876,550.83341 L 90.502321,555.03661 L 82.742574,559.2398 L 80.640977,560.37142 L 75.306159,561.50306 L 69.971333,563.76631 L 71.749608,565.0596 L 70.294654,566.51455 L 69.809672,567.64618 L 67.061434,566.67621 L 63.828214,566.83787 L 63.019902,569.10113 L 62.049939,569.10113 L 62.37326,566.67621 L 58.816709,567.96951 L 55.90681,568.93947 L 52.511924,567.64618 L 49.602023,569.58611 L 46.368799,569.58611 L 44.267202,570.87941 L 42.65059,571.68771 L 40.548995,571.36439 L 37.962415,570.23276 L 35.699158,570.87941 L 34.729191,571.84937 L 33.112578,570.71775 L 33.112578,568.77781 L 36.184142,567.48452 L 42.488929,568.13117 L 46.853782,566.51455 L 48.955378,564.41296 L 51.86528,563.76631 L 53.643553,562.958 L 56.391794,563.11966 L 58.008406,564.41296 L 58.978369,564.08964 L 61.241626,561.3414 L 64.313196,560.37142 L 67.708076,559.72478 L 69.00137,559.40146 L 69.648012,559.88644 L 70.456324,559.88644 L 71.749608,556.16823 L 75.791141,554.71329 L 77.731077,550.99508 L 79.994336,546.46856 L 81.610951,545.01361 L 81.934272,542.42703 L 80.317657,543.72032 L 76.922764,544.36697 L 76.276122,541.94205 L 74.982838,541.61873 L 74.012865,542.58869 L 73.851205,545.4986 L 72.39625,545.33693 L 70.941306,539.51713 L 69.648012,540.81041 L 68.516388,540.32543 L 68.193068,538.3855 L 64.151535,538.54716 L 62.049939,539.67879 L 59.463361,539.35547 L 60.918305,537.90052 L 61.403286,535.31394 L 60.756645,533.374 L 62.211599,532.40404 L 63.504883,532.24238 L 62.858241,530.4641 L 62.858241,526.09925 L 61.888278,525.12928 L 61.079966,526.58423 L 54.936843,526.58423 L 53.481892,525.29094 L 52.835247,521.41108 L 50.733651,517.85452 L 50.733651,516.88456 L 52.835247,516.07625 L 52.996908,513.97465 L 54.128536,512.84303 L 53.320231,512.35805 L 52.026941,512.84303 L 50.895313,510.09479 L 51.86528,505.08328 L 56.391794,501.85007 L 58.978369,500.23345 L 60.918305,496.51525 L 63.666554,495.22195 L 66.253132,496.35359 L 66.576453,498.77851 L 69.00137,498.45517 L 72.23459,496.03026 L 73.851205,496.67691 L 74.821167,497.32355 L 76.437782,497.32355 L 78.701041,496.03026 L 79.509354,491.6654 C 79.509354,491.6654 79.832675,488.75551 80.479317,488.27052 C 81.125959,487.78554 81.44928,487.30056 81.44928,487.30056 L 80.317657,485.36062 L 77.731077,486.16893 L 74.497847,486.97723 L 72.557911,486.49225 L 69.00137,484.71397 L 63.989875,484.55231 L 60.433324,480.83411 L 60.918305,476.95424 L 61.564957,474.52932 L 59.463361,472.75105 L 57.523423,469.03283 L 58.008406,468.22453 L 64.798177,467.73955 L 66.899773,467.73955 L 67.869736,468.70951 L 68.516388,468.70951 L 68.354728,467.0929 L 72.23459,466.44626 L 74.821167,466.76958 L 76.276122,467.90121 L 74.821167,470.00281 L 74.336186,471.45775 L 77.084435,473.07437 L 82.095932,474.85264 L 83.874208,473.88268 L 81.610951,469.51783 L 80.640977,466.2846 L 81.610951,465.47629 L 78.21606,463.53636 L 77.731077,462.40472 L 78.21606,460.78812 L 77.407756,456.90825 L 74.497847,452.22007 L 72.072929,448.01688 L 74.982838,446.07694 L 78.21606,446.07694 L 79.994336,446.72359 L 84.197528,446.56193 L 87.915733,443.00539 L 89.047366,439.93382 L 92.765578,437.5089 L 94.382182,438.47887 L 97.130421,437.83222 L 100.84863,435.73062 L 101.98027,435.56896 L 102.95023,436.37728 L 107.47674,436.21561 L 110.22498,433.14405 L 111.35661,433.14405 L 114.91316,435.56896 L 116.85309,437.67056 L 116.36811,438.80219 L 117.01475,439.93382 L 118.63137,438.31721 L 122.51124,438.64053 L 122.83456,442.35873 L 124.7745,443.81369 L 131.88759,444.46033 L 138.19238,448.66352 L 139.64732,447.69356 L 144.82049,450.28014 L 146.92208,449.6335 L 148.86202,448.82518 L 153.71185,450.76512 L 158.07671,453.67502 z M 42.973913,482.61238 L 45.075509,487.9472 L 44.913847,488.91717 L 42.003945,488.59384 L 40.225672,484.55231 L 38.447399,483.09737 L 36.02248,483.09737 L 35.86082,480.51078 L 37.639093,478.08586 L 38.770722,480.51078 L 40.225672,481.96573 z M 40.387333,516.07625 L 44.105542,516.88456 L 47.823749,517.85452 L 48.632056,518.8245 L 47.015444,522.5427 L 43.94388,522.38104 L 40.548995,518.8245 z M 19.694697,502.01173 L 20.826327,504.5983 L 21.957955,506.21492 L 20.826327,507.02322 L 18.72473,503.95166 L 18.72473,502.01173 z M 5.9534943,575.0826 L 9.3483796,572.81934 L 12.743265,571.84937 L 15.329845,572.17269 L 15.814828,573.7893 L 17.754763,574.27429 L 19.694697,572.33436 L 19.371375,570.71775 L 22.119616,570.0711 L 25.029518,572.65768 L 23.897889,574.43595 L 19.533037,575.56758 L 16.784795,575.0826 L 13.066588,573.95097 L 8.7017347,575.40592 L 7.0851227,575.72924 z M 54.936843,570.55609 L 56.553455,572.49602 L 58.655048,570.87941 L 57.2001,569.58611 z M 57.846745,573.62764 L 58.978369,571.36439 L 61.079966,571.68771 L 60.271663,573.62764 z M 81.44928,571.68771 L 82.904234,573.46598 L 83.874208,572.33436 L 83.065895,570.39442 z M 90.17899,559.2398 L 91.310623,565.0596 L 94.220522,565.86791 L 99.232017,562.958 L 103.59687,560.37142 L 101.98027,557.94651 L 102.46525,555.52159 L 100.36365,556.81488 L 97.453752,556.00657 L 99.070357,554.87495 L 101.01029,555.68325 L 104.89016,553.90497 L 105.37515,552.45003 L 102.95023,551.64172 L 103.75853,549.70178 L 101.01029,551.64172 L 96.322118,555.19827 L 91.472284,558.10817 z M 132.53423,539.35547 L 134.95915,537.90052 L 133.98918,536.12224 L 132.21091,537.09221 z",FL:"M 755.39728,445.50676 L 757.66294,452.82536 L 761.39264,462.56762 L 766.72743,471.94392 L 770.44562,478.24868 L 775.29544,483.74514 L 779.33695,487.46333 L 780.95355,490.37322 L 779.82193,491.6665 L 779.01363,492.95978 L 781.92351,500.39617 L 784.8334,503.30605 L 787.41997,508.64085 L 790.9765,514.46063 L 795.50299,522.70531 L 796.79628,530.30335 L 797.28126,542.26623 L 797.9279,544.04449 L 797.60458,547.43936 L 795.17967,548.73265 L 795.50299,550.67257 L 794.85635,552.6125 L 795.17967,555.0374 L 795.66465,556.97733 L 792.91643,560.21054 L 789.84488,561.66548 L 785.96503,561.82714 L 784.51008,563.44375 L 782.08518,564.41371 L 780.79189,563.92873 L 779.66027,562.95877 L 779.33695,560.04888 L 778.52864,556.65401 L 775.13377,551.48087 L 771.57724,549.21763 L 767.69739,548.89431 L 766.88909,550.18759 L 763.81754,545.82276 L 763.1709,542.26623 L 760.58433,538.22472 L 758.80607,537.09309 L 757.18946,539.19468 L 755.4112,538.87136 L 753.30961,533.85988 L 750.39972,529.98003 L 747.48983,524.64524 L 744.90327,521.57369 L 741.34674,517.8555 L 743.44832,515.43059 L 746.68153,509.93413 L 746.51987,508.31753 L 741.99338,507.34757 L 740.37677,507.99421 L 740.7001,508.64085 L 743.28666,509.61081 L 741.83172,514.13731 L 741.02342,514.62229 L 739.24515,510.58078 L 737.95187,505.73096 L 737.62855,502.98273 L 739.08349,498.29458 L 739.08349,488.75661 L 736.01194,485.03842 L 734.71866,481.96687 L 729.54552,480.67359 L 727.6056,480.02695 L 725.98899,477.44038 L 722.59412,475.82377 L 721.4625,472.4289 L 718.71427,471.45894 L 716.28936,467.74075 L 712.08619,466.28581 L 709.1763,464.83086 L 706.58974,464.83086 L 702.54822,465.63917 L 702.38656,467.57909 L 703.19487,468.54905 L 702.70988,469.68068 L 699.63834,469.51902 L 695.92015,473.07555 L 692.36361,475.01547 L 688.48376,475.01547 L 685.25055,476.30876 L 684.92723,473.56053 L 683.31063,471.6206 L 680.40074,470.48898 L 678.78414,469.03403 L 670.70111,465.15418 L 663.10307,463.37592 L 658.73824,464.02256 L 652.7568,464.50754 L 646.77536,466.60913 L 643.29612,467.22209 L 643.0582,459.17234 L 640.47163,457.23242 L 638.69336,455.45415 L 639.01668,452.38259 L 649.2013,451.08931 L 674.7437,448.17942 L 681.53345,447.53278 L 686.96945,447.81305 L 689.55602,451.69291 L 691.01096,453.14785 L 699.10912,453.66307 L 709.92887,453.01643 L 731.44126,451.72314 L 736.88698,451.04877 L 741.46423,451.0765 L 741.62589,453.98639 L 745.44989,454.79469 L 745.77321,449.98792 L 744.15661,445.46141 L 745.11145,444.72869 L 750.22414,445.18344 z M 767.94269,577.91184 L 770.36761,577.2652 L 771.66089,577.02271 L 773.11585,574.67862 L 775.45993,573.06201 L 776.75322,573.547 L 778.45066,573.87032 L 778.85481,574.92111 L 775.37911,576.13357 L 771.17591,577.58852 L 768.83183,578.80098 z M 781.44139,572.90035 L 782.65385,573.95115 L 785.40209,571.84956 L 790.7369,567.64637 L 794.4551,563.7665 L 796.96085,557.1384 L 797.93082,555.44096 L 798.09248,552.04608 L 797.365,552.53106 L 796.39504,555.36013 L 794.94008,559.96746 L 791.70686,565.22146 L 787.34202,569.42464 L 783.94714,571.36457 z",SC:"M 761.23097,412.93785 L 759.45391,413.90735 L 756.86734,412.61406 L 756.2207,410.51247 L 754.92742,406.95594 L 752.66416,404.85434 L 750.07759,404.2077 L 748.46099,399.35789 L 745.71275,393.37644 L 741.50958,391.4365 L 739.40798,389.49658 L 738.1147,386.91001 L 736.01311,384.97007 L 733.74986,383.67679 L 731.48661,380.7669 L 728.41506,378.50366 L 723.88855,376.72538 L 723.40357,375.27044 L 720.97867,372.36055 L 720.49368,370.90559 L 717.0988,365.73246 L 713.70393,365.89412 L 709.66241,363.4692 L 708.36913,362.17592 L 708.04581,360.39765 L 708.85411,358.45773 L 711.11736,357.48775 L 710.79404,355.38617 L 716.93714,352.7996 L 725.99014,348.2731 L 733.26487,347.46479 L 749.75427,346.97981 L 752.01752,348.91974 L 753.63412,352.15296 L 757.99897,351.66798 L 770.6085,350.21302 L 773.51839,351.02133 L 786.12793,358.61939 L 796.23601,366.74107 L 790.81484,372.19941 L 788.22827,378.34251 L 787.74329,384.64727 L 786.12669,385.45557 L 784.99506,388.2038 L 782.57016,388.85044 L 780.46857,392.40697 L 777.72034,395.1552 L 775.4571,398.55007 L 773.84049,399.35837 L 770.28396,402.75324 L 767.37407,402.9149 L 768.34404,406.14811 L 763.33256,411.64457 z",GA:"M 689.61648,357.97274 L 684.76666,358.78105 L 676.3603,359.91267 L 667.79229,360.8018 L 667.79229,362.98422 L 667.95395,365.08582 L 668.60059,368.48069 L 671.99547,376.40206 L 674.42038,386.26337 L 675.87532,392.40648 L 677.49193,397.25629 L 678.94688,404.2077 L 681.04847,410.51247 L 683.63504,413.90735 L 684.12002,417.30222 L 686.05995,418.11052 L 686.22161,420.21212 L 684.44334,425.06193 L 683.95836,428.29515 L 683.7967,430.23508 L 685.41331,434.59992 L 685.73663,439.93472 L 684.92832,442.35963 L 685.57497,443.16794 L 687.02992,443.97624 L 687.67656,447.37111 L 690.26313,451.25097 L 691.71807,452.70591 L 699.63945,452.86757 L 710.4592,452.22093 L 731.97159,450.92765 L 737.41731,450.25328 L 741.99456,450.28101 L 742.15622,453.1909 L 744.74279,453.9992 L 745.06611,449.63436 L 743.4495,445.10786 L 744.58113,443.49126 L 750.40091,444.29956 L 755.37832,444.61734 L 754.6029,438.31855 L 756.86614,428.2956 L 758.32109,424.09242 L 757.8361,421.50586 L 761.17051,415.26156 L 760.66021,413.90988 L 758.7468,414.61446 L 756.16024,413.32116 L 755.51359,411.21957 L 754.22031,407.66304 L 751.95705,405.56145 L 749.37049,404.91481 L 747.75388,400.06499 L 744.82887,393.72999 L 740.6257,391.79006 L 738.5241,389.85013 L 737.23081,387.26356 L 735.12923,385.32363 L 732.86598,384.03034 L 730.60273,381.12045 L 727.53118,378.85721 L 723.00467,377.07893 L 722.51969,375.62399 L 720.09478,372.7141 L 719.6098,371.25915 L 716.21492,366.35117 L 712.82005,366.51284 L 708.69014,363.4692 L 707.39686,362.17592 L 707.07354,360.39765 L 707.88184,358.45773 L 710.23348,357.22259 L 709.09954,356.00037 L 709.17743,355.70949 L 703.35764,356.67945 L 696.40623,357.48775 z",AL:"M 625.59784,466.77079 L 623.98224,451.57429 L 621.234,432.82165 L 621.39566,418.75716 L 622.20396,387.71831 L 622.0423,371.06725 L 622.20739,364.64819 L 629.96369,364.2775 L 657.76933,361.69094 L 666.69187,361.02874 L 666.54407,363.21116 L 666.70573,365.31276 L 667.35238,368.70763 L 670.74726,376.629 L 673.17216,386.49031 L 674.62711,392.63342 L 676.24371,397.48324 L 677.69867,404.43465 L 679.80025,410.73941 L 682.38682,414.1343 L 682.8718,417.52916 L 684.81174,418.33747 L 684.9734,420.43906 L 683.19512,425.28888 L 682.71014,428.5221 L 682.54848,430.46202 L 684.1651,434.82687 L 684.48842,440.16166 L 683.6801,442.58658 L 684.32676,443.39488 L 685.7817,444.20318 L 686.81695,446.73845 L 680.51218,446.73845 L 673.72243,447.3851 L 648.18003,450.29498 L 637.76847,451.70175 L 637.67209,455.45415 L 639.45036,457.23242 L 642.03693,459.17234 L 642.61779,467.10778 L 637.07573,469.68068 L 634.32751,469.35736 L 637.07573,467.41743 L 637.07573,466.44747 L 634.00419,460.46603 L 631.74094,459.81939 L 630.28599,464.18422 L 628.99271,466.93245 L 628.34607,466.77079 z",NC:"M 832.10653,298.47179 L 833.81653,303.17039 L 837.37306,309.63681 L 839.79796,312.06172 L 840.4446,314.32497 L 838.0197,314.48663 L 838.828,315.13327 L 838.50468,319.33644 L 835.91811,320.62972 L 835.27147,322.73131 L 833.97819,325.6412 L 830.25999,327.2578 L 827.83509,326.93448 L 826.38014,326.77282 L 824.76354,325.47954 L 825.08686,326.77282 L 825.08686,327.74279 L 827.02679,327.74279 L 827.83509,329.03607 L 825.89516,335.34083 L 830.09833,335.34083 L 830.74498,336.95743 L 833.00822,334.69419 L 834.30151,334.2092 L 832.36158,337.76573 L 829.29003,342.61555 L 827.99675,342.61555 L 826.86512,342.13057 L 824.1169,342.77721 L 818.94376,345.20212 L 812.47734,350.53691 L 809.08247,355.22506 L 807.14255,361.69148 L 806.65757,364.11639 L 801.96941,364.60137 L 796.51628,365.93803 L 786.56987,357.7355 L 773.96033,350.13745 L 771.05044,349.32914 L 758.44091,350.78409 L 754.16445,351.53424 L 752.54785,348.30102 L 749.57749,346.18432 L 733.0881,346.6693 L 725.81336,347.4776 L 716.76037,352.00411 L 710.61726,354.59067 L 709.00066,354.91399 L 703.18087,355.88396 L 696.22946,356.69226 L 689.43971,357.17725 L 689.9398,353.12292 L 691.71807,351.66798 L 694.46631,351.02133 L 695.11295,347.30313 L 699.31613,344.55491 L 703.19598,343.09995 L 707.39917,339.54342 L 711.764,337.44183 L 712.41064,334.37027 L 716.2905,330.49042 L 716.93714,330.32876 C 716.93714,330.32876 716.93714,331.46039 717.74545,331.46039 C 718.55375,331.46039 719.68538,331.78371 719.68538,331.78371 L 721.94863,328.22717 L 724.05022,327.58052 L 726.31346,327.90385 L 727.93008,324.34732 L 730.83997,321.76074 L 731.32495,319.65915 L 731.32495,315.69846 L 735.85145,316.42594 L 742.98754,315.13265 L 758.80727,313.19272 L 775.94331,310.60615 L 795.86504,306.60555 L 815.59836,302.44073 L 826.9628,299.6443 z M 836.00199,331.45961 L 838.58857,328.95386 L 841.74095,326.36728 L 843.27673,325.72064 L 843.43839,323.69988 L 842.79175,317.55676 L 841.3368,315.21268 L 840.69015,313.35358 L 841.41763,313.11108 L 844.16587,318.60756 L 844.57002,323.05323 L 844.40836,326.44812 L 841.01348,327.98389 L 838.18441,330.40881 L 837.05279,331.62127 z",TN:"M 697.05288,320.62911 L 645.15979,325.6406 L 629.40023,327.41886 L 624.77903,327.93157 L 620.91068,327.90385 L 620.91068,331.78371 L 612.50433,332.26869 L 605.55292,332.91533 L 594.45689,332.96824 L 594.19215,338.80367 L 592.05398,345.07921 L 591.05891,348.09522 L 589.71017,352.47628 L 589.38685,355.06285 L 585.34533,357.32609 L 586.80027,360.88263 L 585.83031,365.24747 L 584.86193,366.03712 L 592.11797,365.84281 L 616.20542,363.90289 L 621.54027,363.74122 L 629.62326,363.25623 L 657.42891,360.66967 L 667.59966,359.86136 L 676.01988,358.8914 L 684.42624,357.75978 L 689.27606,356.95147 L 689.14548,352.44207 L 690.92375,350.98713 L 693.67198,350.34049 L 694.31863,346.62229 L 698.52181,343.87406 L 702.40166,342.4191 L 706.60484,338.86257 L 710.96967,336.76099 L 711.84326,333.23553 L 716.17702,329.35568 L 716.82367,329.19402 C 716.82367,329.19402 716.82367,330.32564 717.63197,330.32564 C 718.44027,330.32564 719.5719,330.64896 719.5719,330.64896 L 721.83515,327.09242 L 723.93674,326.44578 L 726.19998,326.7691 L 727.8166,323.21257 L 729.93216,320.96641 L 730.53062,319.99957 L 730.70699,316.06745 L 729.22336,315.77929 L 726.79845,317.71923 L 718.87707,317.88089 L 706.88174,319.78157 z",RI:"M 874.07001,179.82344 L 873.58706,175.61904 L 872.77876,171.2542 L 871.08133,165.35359 L 876.82028,163.81781 L 878.43688,164.94943 L 881.83176,169.31427 L 884.74063,173.76056 L 881.82968,175.29696 L 880.5364,175.1353 L 879.40478,176.91357 L 876.97987,178.85349 z",CT:"M 873.19331,180.05038 L 872.56579,175.84599 L 871.75749,171.48115 L 870.14088,165.4997 L 865.989,166.40438 L 844.16479,171.17336 L 844.81143,174.48742 L 846.26638,181.76216 L 846.26638,189.84519 L 845.13475,192.10845 L 846.96715,194.21757 L 851.9225,190.81637 L 855.47903,187.58316 L 857.41895,185.48157 L 858.22726,186.12821 L 860.97548,184.67327 L 866.14862,183.54165 z",MA:"M 899.97704,173.85121 L 902.14896,173.16533 L 902.60622,171.45066 L 903.63502,171.56497 L 904.66382,173.85121 L 903.4064,174.30845 L 899.5198,174.42277 z M 890.6035,174.65139 L 892.88972,172.02222 L 894.49009,172.02222 L 896.31908,173.50827 L 893.91854,174.53707 L 891.74662,175.56587 z M 855.80437,152.6632 L 873.26374,148.46002 L 875.527,147.81338 L 877.62858,144.58017 L 881.36535,142.91686 L 884.25459,147.3297 L 881.82968,152.50284 L 881.50636,153.95778 L 883.44629,156.54435 L 884.57791,155.73605 L 886.35618,155.73605 L 888.61942,158.32261 L 892.49928,164.30405 L 896.05581,164.78903 L 898.31905,163.81907 L 900.09732,162.0408 L 899.28901,159.29258 L 897.18743,157.67597 L 895.73248,158.48427 L 894.76252,157.19099 L 895.2475,156.70601 L 897.34909,156.54435 L 899.12735,157.35265 L 901.06728,159.77756 L 902.03724,162.68745 L 902.36056,165.11235 L 898.15739,166.5673 L 894.27754,168.50722 L 890.39769,173.03372 L 888.45776,174.48866 L 888.45776,173.5187 L 890.88267,172.06375 L 891.36765,170.28549 L 890.55935,167.21394 L 887.64946,168.66888 L 886.84116,170.12383 L 887.32614,172.38707 L 885.25981,173.3875 L 882.51261,168.86037 L 879.11773,164.49553 L 877.04723,162.68306 L 870.51396,164.55926 L 865.42163,165.61005 L 843.59742,170.37904 L 843.19483,165.43441 L 843.84147,154.84564 L 849.01462,153.9565 z",ME:"M 923.21476,77.330719 L 925.15469,79.432305 L 927.41794,83.150496 L 927.41794,85.090422 L 925.31635,89.778575 L 923.37642,90.425217 L 919.98155,93.496766 L 915.13174,98.993222 C 915.13174,98.993222 914.4851,98.993222 913.83846,98.993222 C 913.19182,98.993222 912.86849,96.891636 912.86849,96.891636 L 911.09023,97.053296 L 910.12027,98.508241 L 907.69536,99.963185 L 906.7254,101.41813 L 908.342,102.87307 L 907.85702,103.51972 L 907.37204,106.26794 L 905.43211,106.10628 L 905.43211,104.48968 L 905.10879,103.19639 L 903.65385,103.51972 L 901.87558,100.28651 L 899.774,101.57979 L 901.06728,103.03473 L 901.3906,104.16636 L 900.5823,105.45964 L 900.90562,108.53119 L 901.06728,110.14779 L 899.45068,112.73436 L 896.54079,113.21934 L 896.21747,116.12923 L 890.88267,119.20078 L 889.58939,119.68576 L 887.97278,118.23082 L 884.90123,121.78735 L 885.8712,125.02056 L 884.41625,126.31384 L 884.25459,130.67867 L 883.13131,136.93803 L 880.66906,135.78208 L 880.18407,132.71052 L 876.30422,131.57889 L 875.9809,128.83065 L 868.70615,105.38983 L 864.50757,91.750088 L 865.92811,91.631923 L 867.4419,92.041822 L 867.4419,89.455254 L 868.2502,83.958798 L 870.83677,79.270645 L 872.29172,75.229133 L 870.35179,72.804226 L 870.35179,66.822789 L 871.16009,65.852826 L 871.9684,63.104598 L 871.80674,61.649654 L 871.64507,56.79984 L 873.42334,51.950026 L 876.33323,43.0587 L 878.43481,38.855528 L 879.7281,38.855528 L 881.02138,39.017188 L 881.02138,40.148811 L 882.31467,42.412058 L 885.06289,43.0587 L 885.8712,42.250397 L 885.8712,41.280435 L 889.91271,38.370546 L 891.69097,36.592281 L 893.14592,36.753942 L 899.12735,39.178849 L 901.06728,40.148811 L 910.12027,70.055998 L 916.1017,70.055998 L 916.91001,71.995924 L 917.07167,76.845738 L 919.98155,79.108984 L 920.78986,79.108984 L 920.95152,78.624003 L 920.46654,77.49238 z M 902.28301,107.47825 L 903.81879,105.94247 L 905.19291,106.99327 L 905.75872,109.41819 L 904.06128,110.30732 z M 908.99194,101.57763 L 910.77021,103.43673 C 910.77021,103.43673 912.0635,103.51755 912.0635,103.19423 C 912.0635,102.87091 912.30599,101.17347 912.30599,101.17347 L 913.19513,100.36517 L 912.38682,98.586893 L 910.36606,99.31437 z",NH:"M 880.79902,142.42476 L 881.66802,141.34826 L 882.75824,138.05724 L 880.21516,137.14377 L 879.73017,134.07221 L 875.85032,132.94059 L 875.527,130.19235 L 868.25225,106.75153 L 863.65083,92.208542 L 862.75375,92.203482 L 862.10711,93.820087 L 861.46047,93.335106 L 860.4905,92.365143 L 859.03556,94.305068 L 858.98709,99.337122 L 859.29874,105.00434 L 861.23866,107.75258 L 861.23866,111.7941 L 857.52046,116.85688 L 854.93389,117.98852 L 854.93389,119.12014 L 856.06552,120.89841 L 856.06552,129.46643 L 855.25721,138.6811 L 855.09555,143.53092 L 856.06552,144.82422 L 855.90386,149.35071 L 855.41887,151.12899 L 856.87382,152.01499 L 873.26374,147.32527 L 875.527,146.67863 L 877.06121,144.12627 z",VT:"M 844.34355,153.72643 L 843.53525,148.0683 L 841.14454,138.09663 L 840.4979,137.77331 L 837.588,136.48002 L 838.3963,133.57013 L 837.588,131.46854 L 834.88795,126.82856 L 835.85792,122.9487 L 835.04961,117.77555 L 832.6247,111.30911 L 831.81913,106.3866 L 858.06661,99.63916 L 858.39094,105.45824 L 860.33087,108.20648 L 860.33087,112.248 L 856.61267,116.28952 L 854.0261,117.42115 L 854.0261,118.55277 L 855.15772,120.33104 L 855.15772,128.89906 L 854.34942,138.11373 L 854.18776,142.96356 L 855.15772,144.25685 L 854.99606,148.78334 L 854.51108,150.56162 L 855.1717,152.12847 L 848.22029,153.5026 z",NY:"M 828.61427,189.42238 L 827.48264,188.45242 L 824.89606,188.29076 L 822.63282,186.35084 L 821.00221,180.22171 L 817.54375,180.31225 L 815.10004,177.60405 L 795.71472,181.98599 L 752.71294,190.71568 L 745.18329,191.94367 L 744.44513,185.47533 L 745.87323,184.34995 L 747.16651,183.21833 L 748.13648,181.60172 L 749.91474,180.4701 L 751.85467,178.69183 L 752.33965,177.07523 L 754.44123,174.327 L 755.57286,173.35704 L 755.4112,172.38707 L 754.11791,169.31553 L 752.33965,169.15387 L 750.39972,163.01077 L 753.30961,161.2325 L 757.67444,159.77756 L 761.71596,158.48427 L 764.94917,157.99929 L 771.25392,157.83763 L 773.19385,159.13092 L 774.81045,159.29258 L 776.91204,157.99929 L 779.49861,156.86767 L 784.67174,156.38269 L 786.77333,154.60442 L 788.55159,151.37121 L 790.1682,149.43129 L 792.26978,149.43129 L 794.20971,148.29966 L 794.37137,146.03642 L 792.91643,143.93483 L 792.59311,142.47989 L 793.72473,140.3783 L 793.72473,138.92336 L 791.94646,138.92336 L 790.1682,138.11506 L 789.3599,136.98343 L 789.19824,134.39686 L 795.01801,128.90041 L 795.66465,128.09211 L 797.1196,125.18222 L 800.02949,120.65572 L 802.77772,116.93753 L 804.8793,114.51263 L 807.2944,112.68702 L 810.37576,111.44108 L 815.87221,110.14779 L 819.10542,110.30945 L 823.63192,108.85451 L 831.19711,106.78334 L 831.7169,111.76301 L 834.14182,118.22945 L 834.95012,123.4026 L 833.98016,127.28246 L 836.56673,131.80896 L 837.37503,133.91055 L 836.56673,136.82045 L 839.47663,138.11373 L 840.12327,138.43705 L 843.19483,149.42999 L 842.65854,154.48966 L 842.17356,165.32093 L 842.98186,170.8174 L 843.79016,174.37394 L 845.24511,181.64868 L 845.24511,189.73172 L 844.11348,191.99497 L 845.95281,193.98776 L 846.74936,195.66618 L 844.80944,197.44445 L 845.13276,198.73773 L 846.42604,198.41441 L 847.88099,197.12113 L 850.14423,194.53456 L 851.27586,193.88792 L 852.89246,194.53456 L 855.15571,194.69622 L 863.07707,190.81637 L 865.98696,188.06814 L 867.28024,186.6132 L 871.48341,188.2298 L 868.08854,191.78633 L 864.20869,194.69622 L 857.09563,200.03101 L 854.50907,201.00098 L 848.68929,202.9409 L 844.64778,204.07253 L 843.47304,203.5396 L 843.22902,199.85107 L 843.714,197.10283 L 843.55234,195.00125 L 840.73883,193.30225 L 836.21233,192.33228 L 832.33247,191.20066 z",NJ:"M 828.16036,190.33018 L 826.05878,192.75509 L 826.05878,195.82665 L 824.11884,198.8982 L 823.95718,200.51482 L 825.25048,201.8081 L 825.08882,204.23302 L 822.82556,205.36464 L 823.63386,208.11287 L 823.79552,209.2445 L 826.54376,209.56782 L 827.51372,212.15439 L 831.07026,214.57931 L 833.49517,216.19591 L 833.49517,217.00422 L 830.26196,220.07578 L 828.64535,222.33902 L 827.1904,225.08726 L 824.92715,226.38054 L 823.7147,227.10802 L 823.4722,228.32048 L 822.86297,230.92722 L 823.95524,233.17141 L 827.18845,236.0813 L 832.03826,238.34455 L 836.07977,238.99119 L 836.24143,240.44613 L 835.43313,241.41609 L 835.75645,244.16432 L 836.56475,244.16432 L 838.66634,241.73942 L 839.47464,236.8896 L 842.22287,232.84809 L 845.29442,226.38167 L 846.42604,220.88522 L 845.7794,219.75359 L 845.61774,210.37728 L 844.00113,206.98242 L 842.86951,207.79072 L 840.12128,208.11404 L 839.6363,207.62906 L 840.76793,206.65909 L 842.86951,204.71917 L 842.93257,203.62534 L 842.54818,200.1915 L 843.03316,197.44326 L 842.8715,195.34167 L 840.28493,194.21004 L 835.75843,193.24008 L 831.87857,192.10845 z",PA:"M 822.20688,226.45982 L 823.33852,225.81317 L 825.60176,225.20074 L 827.05671,222.4525 L 828.67332,220.18925 L 831.90653,217.11769 L 831.90653,216.30939 L 829.48162,214.69279 L 825.92508,212.26787 L 824.95512,209.6813 L 822.20688,209.35798 L 822.04522,208.22635 L 821.23692,205.47812 L 823.50018,204.3465 L 823.66184,201.92158 L 822.36854,200.62829 L 822.5302,199.01168 L 824.47014,195.94013 L 824.47014,192.86857 L 826.81422,190.44366 L 827.02874,189.36021 L 824.44216,189.19855 L 822.17892,187.25863 L 819.754,181.92382 L 816.74942,180.99309 L 814.41919,178.85226 L 795.8282,182.89378 L 752.82642,191.62347 L 743.93507,193.07841 L 743.4394,185.99452 L 737.95187,191.62467 L 736.65858,192.10965 L 732.45629,195.11854 L 735.36705,214.25599 L 737.84871,223.98535 L 741.42051,243.24684 L 744.68982,242.60916 L 756.6334,241.10669 L 794.56003,233.44149 L 809.43624,230.61817 L 817.73659,228.99581 L 818.0037,228.75728 L 820.1053,227.14066 z",DE:"M 822.35259,230.42318 L 822.94187,228.32048 L 822.96339,227.11557 L 821.69394,227.02719 L 819.59234,228.6438 L 818.13739,230.09874 L 819.59234,234.30193 L 821.8556,239.96005 L 823.95718,249.6597 L 825.5738,255.96448 L 830.58528,255.80282 L 836.7274,254.59089 L 834.46317,247.23587 L 833.4932,247.72085 L 829.93667,245.29595 L 828.15841,240.60779 L 826.21848,237.05126 L 823.95524,236.0813 L 821.85365,232.52477 z",MD:"M 836.95336,255.30492 L 830.81223,256.59715 L 825.00642,256.75881 L 823.16286,249.6597 L 821.06127,239.96005 L 818.79801,234.30193 L 817.50963,229.9036 L 810.00361,231.52596 L 795.1274,234.34928 L 757.67597,241.90018 L 758.80727,246.91184 L 759.77723,252.56995 L 760.10055,252.24663 L 762.20215,249.82173 L 764.46539,247.20407 L 766.8903,246.58851 L 768.34526,245.13356 L 770.12352,242.54699 L 771.4168,243.19364 L 774.32669,242.87031 L 776.91327,240.76873 L 778.92016,239.31546 L 780.76539,238.83048 L 782.40974,239.96043 L 785.31963,241.41537 L 787.25955,243.19364 L 788.47201,244.72942 L 792.59436,246.42685 L 792.59436,249.33674 L 798.09082,250.63003 L 799.23526,251.17201 L 800.64716,249.14369 L 803.52913,251.11385 L 802.25096,253.59578 L 801.48569,257.58144 L 799.70743,260.16801 L 799.70743,262.2696 L 800.35407,264.04787 L 805.41802,265.40356 L 809.72912,265.34184 L 812.80066,266.31181 L 814.90225,266.63513 L 815.87221,264.53354 L 814.41727,262.43196 L 814.41727,260.65369 L 811.99236,258.5521 L 809.89078,253.05565 L 811.18406,247.72085 L 811.0224,245.61927 L 809.72912,244.32598 C 809.72912,244.32598 811.18406,242.70938 811.18406,242.06274 C 811.18406,241.41609 811.66904,239.96115 811.66904,239.96115 L 813.60897,238.66787 L 815.54889,237.05126 L 816.03387,238.02123 L 814.57893,239.63783 L 813.28565,243.35602 L 813.60897,244.48764 L 815.38723,244.81096 L 815.87221,250.30742 L 813.77063,251.27738 L 814.09395,254.83391 L 814.57893,254.67225 L 815.71055,252.73233 L 817.32716,254.51059 L 815.71055,255.80388 L 815.38723,259.19875 L 817.9738,262.59362 L 821.85365,263.0786 L 823.47026,262.2703 L 826.70681,266.45323 L 828.06516,266.98953 L 834.71883,264.19258 L 836.72641,260.16871 z M 820.32087,264.28945 L 821.45249,266.7952 L 821.61415,268.57347 L 822.74578,270.43257 C 822.74578,270.43257 823.63492,269.54343 823.63492,269.22011 C 823.63492,268.89679 822.90745,266.14855 822.90745,266.14855 L 822.17997,263.80446 z",WV:"M 756.56051,241.96731 L 757.67252,246.91184 L 758.75596,253.81817 L 762.31563,251.06994 L 764.57887,247.99838 L 767.11725,247.38283 L 768.5722,245.92789 L 770.35047,243.34132 L 771.53028,243.98796 L 774.44017,243.66464 L 777.02675,241.56305 L 779.03364,240.10979 L 780.87887,239.6248 L 782.18279,240.64127 L 784.41183,241.75579 L 786.35176,243.53406 L 787.72588,244.82734 L 787.58288,249.4984 L 781.92475,246.42685 L 777.39825,244.64858 L 777.23659,249.98339 L 776.75161,252.08497 L 775.13501,254.83321 L 774.48835,256.44982 L 771.4168,258.87472 L 770.93182,261.13798 L 767.53694,261.4613 L 767.21362,264.53285 L 766.082,270.02932 L 763.49543,270.02932 L 762.20215,269.22101 L 760.58553,266.47277 L 758.80727,266.63443 L 758.48395,270.99928 L 756.38236,277.62737 L 751.37088,288.45864 L 752.17918,289.75192 L 752.01752,292.50015 L 749.91593,294.44008 L 748.46099,294.11676 L 745.22777,296.54167 L 742.6412,295.57171 L 740.86294,300.25986 C 740.86294,300.25986 737.14473,301.06817 736.49809,301.22983 C 735.85145,301.39149 734.07318,299.93654 734.07318,299.93654 L 731.64827,302.19979 L 729.0617,302.84644 L 726.1518,302.03813 L 724.85852,300.74485 L 722.6663,297.72149 L 719.52371,295.73337 L 716.93714,292.98513 L 714.02726,289.26694 L 713.38061,287.00369 L 710.79404,285.54874 L 709.98573,283.93214 L 709.74324,278.67816 L 711.92566,278.59733 L 713.8656,277.78903 L 714.02726,275.0408 L 715.64386,273.58585 L 715.80552,268.57437 L 716.77548,264.69451 L 718.06877,264.04787 L 719.36205,265.17949 L 719.84704,266.95776 L 721.62531,265.98779 L 722.11029,264.37119 L 720.97867,262.59292 L 720.97867,260.16801 L 721.94863,258.87472 L 724.21188,255.47985 L 725.50516,254.02491 L 727.60676,254.50989 L 729.87,252.89327 L 732.94155,249.4984 L 735.20481,245.61854 L 735.52813,239.96043 L 736.01311,234.94894 L 736.01311,230.26078 L 734.88149,227.18923 L 735.85145,225.73427 L 737.13493,224.44099 L 740.62618,244.26811 L 745.25719,243.51696 z",KY:"M 721.78301,297.81787 L 719.45844,300.5008 L 715.25525,304.05734 L 710.9557,309.95951 L 709.17743,311.73778 L 709.17743,313.83936 L 705.29757,315.94095 L 699.63945,319.33583 L 696.11989,319.72047 L 644.252,324.61933 L 628.49244,326.39759 L 623.87124,326.9103 L 620.00289,326.88258 L 619.77594,331.10286 L 611.59653,331.24742 L 604.64512,331.89406 L 594.21453,332.09966 L 596.12731,331.87803 L 598.30736,330.11601 L 600.36496,328.97291 L 600.59359,325.77218 L 601.50808,323.9432 L 599.90126,321.4043 L 600.70309,319.49749 L 602.96635,317.71923 L 605.06793,317.07258 L 607.81616,318.36587 L 611.3727,319.65915 L 612.50433,319.33583 L 612.66599,317.07258 L 611.3727,314.64767 L 611.69602,312.38442 L 613.63595,310.92948 L 616.22253,310.28283 L 617.83913,309.63619 L 617.03083,307.85792 L 616.38419,305.91799 L 617.51581,305.10969 L 618.5666,301.79563 L 621.55732,300.0982 L 627.37711,299.12824 L 630.93365,298.64326 L 632.38859,300.58319 L 634.16686,301.39149 L 635.94513,298.15828 L 638.85502,296.70333 L 640.79495,298.31994 L 641.60325,299.45156 L 643.70485,298.96658 L 643.54318,295.57171 L 646.45308,293.9551 L 647.5847,293.14679 L 648.71632,294.7634 L 653.40449,294.7634 L 654.21279,292.66181 L 653.88947,290.39857 L 656.79936,286.84202 L 661.48752,282.96217 L 661.9725,278.43567 L 664.72074,278.11235 L 668.60059,276.33408 L 671.34883,274.39415 L 671.0255,272.45422 L 669.57055,270.99928 L 670.13637,268.81687 L 674.25872,268.57437 L 676.68363,267.76607 L 679.59352,269.38267 L 681.21013,273.74751 L 687.02992,274.07083 L 688.80818,275.8491 L 690.90977,276.01076 L 693.33468,274.55582 L 696.40623,275.0408 L 697.69952,276.49574 L 700.44776,273.90917 L 702.22602,272.61588 L 703.84263,272.61588 L 704.48927,275.36412 L 706.26754,276.33408 L 708.68933,278.54915 L 708.85099,284.04561 L 709.65929,285.66222 L 712.24587,287.11716 L 712.89251,289.38042 L 715.8024,293.09861 L 718.38896,295.84685 z",OH:"M 731.43589,195.0077 L 725.34235,199.06105 L 721.4625,201.3243 L 718.06763,205.04249 L 714.02612,208.92234 L 710.79291,209.73064 L 707.88302,210.21562 L 702.38656,212.80219 L 700.28498,212.96385 L 696.89011,209.8923 L 691.71697,210.53895 L 689.13041,209.084 L 686.74934,207.73317 L 681.85677,208.43658 L 671.67215,210.05319 L 663.91243,211.26565 L 665.20572,225.89593 L 666.98399,239.6371 L 669.57055,263.0779 L 670.13637,267.90907 L 674.25872,267.78005 L 676.68363,266.97174 L 680.04743,268.47488 L 682.11792,272.83971 L 687.25686,272.82261 L 689.1486,274.94131 L 690.90977,274.87601 L 693.44816,273.53455 L 695.95233,273.90605 L 697.92646,275.361 L 699.65343,273.22832 L 701.99908,271.93504 L 704.06957,271.25419 L 704.71621,274.00243 L 706.49449,274.97239 L 709.97018,277.31646 L 712.1526,277.23564 L 713.29822,276.08691 L 713.23293,274.70038 L 714.84954,273.24542 L 715.0112,268.23395 C 715.0112,268.23395 715.98116,264.35409 715.98116,264.35409 L 717.5014,262.91312 L 719.02163,263.8178 L 719.84704,265.02868 L 721.05794,264.85305 L 720.63513,262.44212 L 720.07087,261.7986 L 720.07087,259.37368 L 721.04084,258.0804 L 723.30408,254.68553 L 724.59737,253.23058 L 726.69896,253.71556 L 728.96221,252.09895 L 732.03376,248.70408 L 734.29702,244.82422 L 734.50686,239.39306 L 734.99184,234.38157 L 734.99184,229.69341 L 733.86022,226.62186 L 734.83018,225.16691 L 735.75069,224.2123 L 734.34578,214.36947 z",MI:"M 581.61931,82.059006 L 583.4483,80.001402 L 585.62022,79.201221 L 590.99286,75.314624 L 593.27908,74.743065 L 593.73634,75.200319 L 588.59232,80.344339 L 585.27728,82.287628 L 583.21967,83.202124 z M 667.79369,114.18719 L 668.44033,116.69293 L 671.67355,116.85459 L 672.96684,115.64213 C 672.96684,115.64213 672.88601,114.18719 672.56269,114.02552 C 672.23936,113.86386 670.94608,112.16642 670.94608,112.16642 L 668.76366,112.40891 L 667.14704,112.57057 L 666.82372,113.7022 z M 697.86007,177.23689 L 694.62686,168.9922 L 692.36361,159.93922 L 689.93871,156.70601 L 687.35214,154.92774 L 685.73554,156.05937 L 681.85568,157.83763 L 679.91576,162.84911 L 677.16753,166.5673 L 676.03591,167.21394 L 674.58096,166.5673 C 674.58096,166.5673 671.9944,165.11235 672.15606,164.46571 C 672.31772,163.81907 672.64104,159.45424 672.64104,159.45424 L 676.03591,158.16095 L 676.84421,154.76608 L 677.49085,152.17952 L 679.91576,150.56291 L 679.59244,140.53996 L 677.97583,138.27672 L 676.68255,137.46841 L 675.87425,135.36683 L 676.68255,134.55853 L 678.29915,134.88185 L 678.46081,133.26524 L 676.03591,131.00199 L 674.74262,128.41543 L 672.15606,128.41543 L 667.62956,126.96048 L 662.13311,123.56561 L 659.38488,123.56561 L 658.73824,124.21226 L 657.76827,123.72727 L 654.69673,121.46403 L 651.78684,123.24229 L 648.87695,125.50554 L 649.20027,129.06207 L 650.17023,129.38539 L 652.27182,129.87037 L 652.7568,130.67867 L 650.17023,131.48698 L 647.58367,131.8103 L 646.12872,133.58856 L 645.8054,135.69015 L 646.12872,137.30675 L 646.45204,142.80321 L 642.89551,144.9048 L 642.24887,144.74313 L 642.24887,140.53996 L 643.54215,138.11506 L 644.1888,135.69015 L 643.38049,134.88185 L 641.44057,135.69015 L 640.4706,139.89332 L 637.72238,141.02494 L 635.94411,142.96487 L 635.78245,143.93483 L 636.42909,144.74313 L 635.78245,147.3297 L 633.5192,147.81468 L 633.5192,148.94631 L 634.32751,151.37121 L 633.19588,157.51431 L 631.57928,161.55582 L 632.22592,166.24398 L 632.7109,167.3756 L 631.9026,169.80051 L 631.57928,170.60881 L 631.25596,173.35704 L 634.81249,179.33847 L 637.72238,185.80489 L 639.17732,190.65471 L 638.36902,195.34286 L 637.39906,201.3243 L 634.97415,206.49743 L 634.65083,209.24566 L 631.39196,212.33081 L 635.80057,212.16876 L 657.21906,209.90551 L 664.4969,208.91845 L 664.59327,210.5848 L 671.44521,209.37234 L 681.74329,207.86921 L 685.59749,207.4083 L 685.73554,206.82075 L 685.8972,205.36581 L 687.99878,201.64762 L 689.99934,199.90977 L 689.77705,194.85788 L 691.37404,193.26089 L 692.46466,192.91795 L 692.68694,189.36142 L 694.22271,186.3303 L 695.2735,186.93652 L 695.43516,187.58316 L 696.24347,187.74482 L 698.18339,186.77486 z M 567.49209,111.21318 L 568.20837,110.63278 L 570.9566,109.82447 L 574.51313,107.56123 L 574.51313,106.59126 L 575.15978,105.94462 L 581.14121,104.97466 L 583.56612,103.03473 L 587.93095,100.93315 L 588.09261,99.639864 L 590.03254,96.729975 L 591.8108,95.921673 L 593.10409,94.143408 L 595.36733,91.880161 L 599.73217,89.455254 L 604.42032,88.970273 L 605.55194,90.101896 L 605.22862,91.071859 L 601.51043,92.041822 L 600.05549,95.113371 L 597.79224,95.921673 L 597.30726,98.34658 L 594.88235,101.57979 L 594.55903,104.16636 L 595.36733,104.65134 L 596.3373,103.51972 L 599.89383,100.60983 L 601.18711,101.90311 L 603.45036,101.90311 L 606.68357,102.87307 L 608.13851,104.0047 L 609.59345,107.07625 L 612.34168,109.82447 L 616.22153,109.66281 L 617.67648,108.69285 L 619.29308,109.98613 L 620.90969,110.47112 L 622.20297,109.66281 L 623.33459,109.66281 L 624.9512,108.69285 L 628.99271,105.13632 L 632.38758,104.0047 L 639.01566,103.68138 L 643.54215,101.74145 L 646.12872,100.44817 L 647.58367,100.60983 L 647.58367,106.26794 L 648.06865,106.59126 L 650.97853,107.39957 L 652.91846,106.91458 L 659.06156,105.29798 L 660.19318,104.16636 L 661.64813,104.65134 L 661.64813,111.60274 L 664.88134,114.67429 L 666.17462,115.32093 L 667.4679,116.29089 L 666.17462,116.61421 L 665.36632,116.29089 L 661.64813,115.80591 L 659.54654,116.45255 L 657.28329,116.29089 L 654.05008,117.74584 L 652.27182,117.74584 L 646.45204,116.45255 L 641.27891,116.61421 L 639.33898,119.20078 L 632.38758,119.84742 L 629.96267,120.65572 L 628.83105,123.72727 L 627.53777,124.8589 L 627.05279,124.69724 L 625.59784,123.08063 L 621.07135,125.50554 L 620.42471,125.50554 L 619.29308,123.88893 L 618.48478,124.05059 L 616.54486,128.41543 L 615.57489,132.45694 L 612.39377,139.45774 L 611.21701,138.42347 L 609.84527,137.39215 L 607.90449,127.10413 L 604.36001,125.73408 L 602.30743,123.44785 L 590.18707,120.70437 L 587.3318,119.67473 L 579.10138,117.50199 L 571.21139,116.35887 z",WY:"M 354.25168,143.77587 L 343.70253,142.96884 L 311.61454,139.67342 L 295.38233,137.61582 L 267.03312,133.50061 L 247.14296,130.52852 L 245.72387,141.70448 L 241.88464,165.96502 L 236.62631,196.37183 L 235.09531,206.88801 L 233.4256,218.77684 L 239.94947,219.70521 L 265.82883,222.20513 L 286.39795,224.51213 L 323.18167,228.62731 L 347.00271,231.48733 L 351.50702,187.295 L 352.94689,161.91789 z",MT:"M 356.67064,122.27385 L 357.31846,111.12326 L 359.57695,86.336144 C 360.0342,81.306439 360.66066,77.864038 360.94869,70.926078 L 361.88845,56.374463 L 331.21413,53.56663 L 301.95358,50.0101 L 272.69304,45.968588 L 240.36094,40.633793 L 221.93165,37.238923 L 189.208,30.306187 L 184.72898,51.653719 L 188.15832,59.19826 L 186.78658,63.770712 L 188.61556,68.343163 L 191.81629,69.714902 L 196.43711,80.484355 L 199.13221,83.660878 L 199.58945,84.803996 L 203.01879,85.947114 L 203.47604,88.004707 L 196.38874,105.60866 L 196.38874,108.12351 L 198.90359,111.32422 L 199.81807,111.32422 L 204.61914,108.35213 L 205.30502,107.20901 L 206.90538,107.89488 L 206.67675,113.1532 L 209.42023,125.72745 L 212.39232,128.24229 L 213.3068,128.92816 L 215.13579,131.21438 L 214.67854,134.64373 L 215.36441,138.07306 L 216.50753,138.98756 L 218.79375,136.70133 L 221.53722,136.70133 L 224.73794,138.30169 L 227.25279,137.3872 L 231.368,137.3872 L 235.02595,138.98756 L 237.76943,138.53031 L 238.22667,135.55821 L 241.19876,134.87235 L 242.5705,136.24409 L 243.02775,139.4448 L 244.80717,140.80977 L 246.34057,129.2447 L 267.03312,132.21679 L 295.22184,136.17153 L 311.77502,138.06865 L 343.2211,141.52455 L 354.21124,143.04862 L 355.26321,127.62136 z",ID:"M 162.11948,180.95969 C 139.5086,176.61641 147.97221,178.11269 140.97881,176.60895 L 145.40585,159.10648 L 149.74968,141.38823 L 151.12142,137.15871 L 153.63626,131.21453 L 152.37884,128.9283 L 149.86398,129.04261 L 149.06381,128.01381 L 149.52106,126.8707 L 149.86398,123.78429 L 154.32213,118.29734 L 156.15111,117.8401 L 157.29422,116.69699 L 157.86578,113.49627 L 158.78026,112.81041 L 162.66685,106.98053 L 166.55344,102.6367 L 166.78206,98.864432 L 163.35272,96.235269 L 162.03814,91.834286 L 162.43823,82.174988 L 166.09619,65.714155 L 170.55433,44.909503 L 174.3266,31.420781 L 175.08853,27.617595 L 188.08467,30.145706 L 183.92659,51.653719 L 186.8745,59.358741 L 185.82372,63.931193 L 187.81318,68.503644 L 191.0139,70.196335 L 195.47424,80.002923 L 198.16934,83.821359 L 198.78707,84.964477 L 202.21641,86.107595 L 202.67365,88.646611 L 195.74683,105.44818 L 196.06779,108.76541 L 198.7431,111.64517 L 200.62046,112.1266 L 205.42153,108.51261 L 205.78645,108.01139 L 205.94251,108.85775 L 206.19532,112.99272 L 208.77832,125.88793 L 212.23184,128.56324 L 212.6649,129.40959 L 214.81483,131.85629 L 214.03664,134.64373 L 214.7225,138.39401 L 216.66801,139.30851 L 218.79375,137.6642 L 221.37674,137.18276 L 224.73794,138.78312 L 227.25279,138.18958 L 231.04705,138.0291 L 235.02595,139.62946 L 237.76943,139.3327 L 238.70811,137.0025 L 241.19876,135.35378 L 241.9286,137.04647 L 242.54631,139.28432 L 244.85453,141.82336 L 241.08226,165.80454 L 235.9382,194.8133 L 231.779,194.4946 L 223.59476,192.96239 L 213.78818,191.13341 L 201.62502,188.75485 L 189.09694,186.25099 L 180.61372,184.41102 L 171.35451,182.74252 z",WA:"M 93.573239,6.3617734 L 97.938071,7.8167177 L 107.6377,10.564946 L 116.2057,12.504871 L 136.2516,18.162988 L 159.20739,23.821104 L 174.36801,27.215777 L 173.36373,31.099829 L 169.27051,44.909503 L 164.81238,65.714155 L 161.63584,81.854036 L 161.28429,91.232806 L 148.10315,87.33877 L 132.53264,83.955591 L 118.86585,84.551329 L 117.28528,83.01913 L 111.95881,84.916253 L 107.9821,84.665645 L 105.2606,82.904814 L 103.68223,83.430208 L 99.476903,83.201576 L 97.601755,81.829846 L 92.824862,80.093194 L 91.382778,79.886558 L 86.397035,78.560984 L 84.614222,80.069004 L 78.922841,79.726077 L 74.101997,75.931831 L 74.30643,75.131651 L 74.374575,67.197996 L 72.248826,63.31142 L 68.133618,62.57938 L 67.768708,60.225014 L 65.2543,59.597968 L 62.372763,59.063086 L 60.594498,60.033049 L 58.331251,57.123161 L 58.654572,54.213272 L 61.4028,53.889951 L 63.019405,49.84844 L 60.432837,48.716816 L 60.594498,44.998625 L 64.959331,44.351984 L 62.211103,41.603756 L 60.756158,34.490695 L 61.4028,31.580807 L 61.4028,23.659444 L 59.624535,20.426234 L 61.887782,11.049927 L 63.989368,11.534908 L 66.414275,14.444797 L 69.162503,17.031364 L 72.395712,18.97129 L 76.922205,21.072876 L 79.993756,21.719518 L 82.903645,23.174462 L 86.298518,24.144425 L 88.561764,23.982765 L 88.561764,21.557857 L 89.855048,20.426234 L 91.956634,19.13295 L 92.279955,20.264574 L 92.603276,22.042839 L 90.340029,22.52782 L 90.016708,24.629406 L 91.794974,26.084351 L 92.926597,28.509258 L 93.573239,30.449183 L 95.028183,30.287523 L 95.189843,28.994239 L 94.219881,27.700955 L 93.734899,24.467746 L 94.543201,22.689481 L 93.89656,21.234537 L 93.89656,18.97129 L 95.674825,15.41476 L 94.543201,12.828192 L 92.118294,7.9783781 L 92.441615,7.1700758 z M 84.116548,12.340738 L 86.137312,12.179078 L 86.622294,13.553197 L 88.158073,11.936582 L 90.502155,11.936582 L 91.310458,13.472361 L 89.774678,15.169801 L 90.42133,15.978114 L 89.693853,17.998875 L 88.319734,18.403021 C 88.319734,18.403021 87.430596,18.483857 87.430596,18.160536 C 87.430596,17.837215 88.885551,15.573958 88.885551,15.573958 L 87.188111,15.008141 L 86.86479,16.463095 L 86.137312,17.109737 L 84.60153,14.84648 z",TX:"M 357.05332,333.3739 L 379.74411,334.45984 L 410.8368,335.60296 L 408.50219,359.05876 L 408.20543,377.21228 L 408.27357,379.29407 L 412.6174,383.1125 L 414.35405,383.93466 L 416.16326,384.18747 L 416.84913,382.93225 L 417.73945,383.79837 L 419.47609,384.2798 L 421.08086,383.54998 L 422.21956,383.95885 L 421.92279,387.364 L 426.19848,388.39501 L 428.8738,389.21718 L 432.82854,389.74256 L 435.02242,391.57154 L 438.27152,389.99537 L 441.05896,390.36028 L 443.09237,393.14772 L 444.16733,393.46868 L 444.00686,395.43395 L 447.09547,396.60124 L 449.86312,394.79644 L 451.37114,395.16136 L 453.72552,395.32184 L 454.15859,397.19478 L 458.79918,399.18423 L 461.45473,398.9798 L 463.4442,394.86459 L 463.78492,394.86459 L 464.92804,396.76172 L 469.3642,397.76853 L 472.7012,398.9798 L 475.99425,399.73382 L 478.14419,398.9798 L 478.99053,396.46496 L 482.69245,396.46496 L 484.58958,397.21896 L 487.654,395.64279 L 488.31569,395.64279 L 488.6806,396.76172 L 492.95629,396.76172 L 495.35904,395.5065 L 497.02754,395.80326 L 498.44324,397.67621 L 501.32299,399.34471 L 504.84467,400.41968 L 507.58814,401.83759 L 510.03484,403.45991 L 513.32788,402.56962 L 515.26897,403.55225 L 515.78008,413.69188 L 516.11532,423.39405 L 516.80118,432.92806 L 517.32658,436.97511 L 520.00191,441.57175 L 521.07687,445.63859 L 524.93927,451.92792 L 525.48884,454.80769 L 526.01424,455.8145 L 525.32836,463.31069 L 522.67723,467.69847 L 523.63568,470.55845 L 523.27076,473.0733 L 522.42442,480.38923 L 521.05268,483.10852 L 521.65692,487.49475 L 515.99204,489.07993 L 506.13075,493.60643 L 505.16079,495.54635 L 502.57422,497.48628 L 500.47264,498.94122 L 499.17935,499.74952 L 493.52124,505.08432 L 490.77301,507.18591 L 485.43821,510.41911 L 479.7801,512.84402 L 473.47534,516.23889 L 471.69708,517.69384 L 465.8773,521.25037 L 462.48243,521.89701 L 458.60258,527.39346 L 454.56107,527.71679 L 453.5911,529.65671 L 455.85435,531.59664 L 454.3994,537.09309 L 453.10612,541.61959 L 451.9745,545.49944 L 451.1662,550.02593 L 451.9745,552.45084 L 453.75276,559.40224 L 454.72273,565.54533 L 456.50099,568.29356 L 455.53103,569.74851 L 452.45948,571.68843 L 446.80136,567.80858 L 441.30491,566.67696 L 440.01162,567.16194 L 436.77841,566.5153 L 432.57524,563.44375 L 427.40211,562.31213 L 419.80406,558.91726 L 417.70248,555.0374 L 416.40919,548.57099 L 413.17599,546.63106 L 412.52934,544.36781 L 413.17599,543.72117 L 413.49931,540.3263 L 412.20602,539.67966 L 411.55938,538.7097 L 412.85266,534.34486 L 411.23606,532.08162 L 408.00285,530.78833 L 404.60798,526.4235 L 401.05145,519.79542 L 396.84828,517.20885 L 397.00994,515.26893 L 391.67514,502.98273 L 390.86684,498.77956 L 389.08858,496.83964 L 388.92692,495.38469 L 382.94548,490.0499 L 380.35891,486.97835 L 380.35891,485.84672 L 377.77234,483.74514 L 370.9826,482.61351 L 363.54622,481.96687 L 360.47467,479.70363 L 355.94818,481.48189 L 352.39165,482.93684 L 350.1284,486.17004 L 349.15844,489.88824 L 344.79361,496.03133 L 342.3687,498.45624 L 339.78213,497.48628 L 338.00387,496.35465 L 336.06394,495.70801 L 332.18409,493.44477 L 332.18409,492.79812 L 330.40583,490.8582 L 325.23269,488.75661 L 317.79631,480.99691 L 315.53306,476.30876 L 315.53306,468.22573 L 312.29985,461.75931 L 311.81487,459.01109 L 310.19827,458.04112 L 309.06664,455.93954 L 304.05517,453.83795 L 302.76189,452.22135 L 295.64882,444.29998 L 294.35554,441.06677 L 289.66738,438.80352 L 288.21243,434.43865 L 285.62584,431.52878 L 283.68593,431.04382 L 283.0367,426.36618 L 291.03857,427.05207 L 320.07356,429.79552 L 349.10864,431.39588 L 351.39487,407.61912 L 355.28142,352.0641 L 356.88181,333.31678 L 358.25355,333.34536 M 457.2302,567.32304 L 456.66439,560.20996 L 453.91615,553.01604 L 453.35033,545.98379 L 454.88611,537.73908 L 458.20017,530.86849 L 461.67587,525.45284 L 464.82827,521.89629 L 465.47491,522.13879 L 460.70591,528.76689 L 456.34107,535.31417 L 454.3203,541.94226 L 453.99698,547.11542 L 454.88611,553.25854 L 457.47269,560.45246 L 457.95767,565.6256 L 458.11933,567.08056 L 457.2302,567.32304 z",CA:"M 136.74132,386.75359 L 140.5564,386.26497 L 142.04244,384.25353 L 142.77448,382.31244 L 139.59796,382.22232 L 138.49879,380.45929 L 139.27701,378.74462 L 139.23083,372.59378 L 141.44892,371.266 L 144.14622,368.68302 L 144.5573,363.76763 L 146.20382,360.27014 L 148.14711,358.16638 L 151.41598,356.45171 L 152.69537,355.72188 L 153.4516,354.23804 L 152.58327,353.34553 L 151.62262,351.8353 L 150.68615,346.48685 L 147.7822,341.25051 L 147.87926,338.46426 L 145.67843,335.2162 L 130.67947,311.98682 L 111.24655,283.27272 L 88.819562,250.23896 L 76.117107,230.69405 L 77.913818,223.48571 L 84.726337,197.53705 L 92.84244,166.10144 L 80.477041,162.76442 L 66.988306,159.33508 L 54.414067,155.21987 L 46.869522,153.16227 L 35.438394,150.19018 L 28.387579,147.77848 L 26.80746,152.50284 L 26.645799,159.93922 L 21.472664,171.74043 L 18.401116,174.327 L 18.077795,175.45862 L 16.299529,176.26693 L 14.844585,180.4701 L 14.036283,183.70331 L 16.784511,187.90648 L 18.401116,192.10965 L 19.532739,195.66618 L 19.209418,202.1326 L 17.431153,205.20415 L 16.784511,211.02393 L 15.814548,214.74212 L 17.592813,218.62197 L 20.341041,223.14846 L 22.604288,227.99828 L 23.897571,232.03979 L 23.574251,235.273 L 23.25093,235.75798 L 23.25093,237.85956 L 28.909046,244.16432 L 28.424065,246.58923 L 27.777423,248.85248 L 27.130781,250.7924 L 27.292441,259.03709 L 29.394027,262.75528 L 31.333953,265.34184 L 34.082181,265.82683 L 35.052144,268.57505 L 33.920521,272.13158 L 31.818934,273.74819 L 30.687311,273.74819 L 29.879009,277.62804 L 30.36399,280.53793 L 33.5972,284.90276 L 35.213804,290.23756 L 36.668748,294.92571 L 37.962032,297.99726 L 41.356902,303.81704 L 42.811846,306.4036 L 43.296828,309.31349 L 44.913432,310.28345 L 44.913432,312.70836 L 44.10513,314.64829 L 42.326865,321.76135 L 41.841883,323.70127 L 44.266791,326.4495 L 48.469963,326.93448 L 52.996456,328.71275 L 56.876307,330.81433 L 59.786196,330.81433 L 62.696084,333.88588 L 65.282651,338.7357 L 66.414275,340.99894 L 70.294126,343.10053 L 75.14394,343.90883 L 76.598884,346.01042 L 77.245526,349.24363 L 75.790582,349.89027 L 76.113903,350.86023 L 79.347114,351.66853 L 82.095342,351.8302 L 85.005231,356.51835 L 88.885085,360.72152 L 89.693387,362.98477 L 92.279955,367.18794 L 92.603276,370.42115 L 92.603276,379.79746 L 93.088257,381.57572 L 103.11121,383.03067 L 122.83378,385.77889 z M 48.793607,337.03691 L 50.086895,338.57269 L 49.925235,339.86598 L 46.692014,339.78515 L 46.1262,338.57269 L 45.479556,337.11774 z M 50.733539,337.03691 L 51.945997,336.39027 L 55.50254,338.49186 L 58.5741,339.70431 L 57.684964,340.35097 L 53.158455,340.10847 L 51.541845,338.49186 z M 71.426153,356.84039 L 73.204418,359.18447 L 74.012731,360.15444 L 75.54851,360.72025 L 76.114317,359.2653 L 75.144354,357.48703 L 72.476951,355.46627 L 71.426153,355.62793 z M 69.971198,365.48925 L 71.749474,368.64164 L 72.961932,370.58158 L 71.506978,370.82406 L 70.213694,369.61161 C 70.213694,369.61161 69.486217,368.15666 69.486217,367.7525 C 69.486217,367.34836 69.486217,365.57008 69.486217,365.57008 z",AZ:"M 137.74699,387.50041 L 135.11998,389.65874 L 134.79666,391.11369 L 135.28164,392.08365 L 154.19591,402.75324 L 166.32045,410.35128 L 181.03155,418.91929 L 197.84424,428.94224 L 210.13044,431.36715 L 235.25838,434.07206 L 237.7892,421.56511 L 241.54187,394.32217 L 248.50673,341.44101 L 252.76399,310.47532 L 228.16728,306.79655 L 200.96119,302.2241 L 167.53204,295.90642 L 164.61014,313.99826 L 164.1529,314.45551 L 162.43823,317.08467 L 159.92338,316.97035 L 158.66596,314.22688 L 155.92249,313.88395 L 155.00799,312.74084 L 154.09351,312.74084 L 153.17901,313.3124 L 151.23572,314.3412 L 151.12142,321.31418 L 150.89278,323.02885 L 150.32124,335.60309 L 148.83519,337.775 L 148.26363,341.09003 L 151.0071,346.00542 L 152.26452,351.8353 L 153.06471,352.8641 L 154.09351,353.43566 L 153.97919,355.72188 L 152.37884,357.09361 L 148.9495,358.80828 L 147.00621,360.75158 L 145.52016,364.40953 L 144.9486,369.32492 L 142.09082,372.06839 L 140.03322,372.75426 L 139.91891,378.58414 L 139.46166,380.29881 L 139.91891,381.09899 L 143.57687,381.67053 L 143.00531,384.41401 L 141.51926,386.58592 z",NV:"M 140.65786,177.57182 L 161.63805,182.08304 L 171.35451,184.02634 L 180.61372,185.85531 L 187.22838,187.48864 L 186.67001,193.35369 L 183.12636,210.68284 L 179.03314,230.66313 L 177.08985,240.3818 L 174.91793,253.66389 L 171.76337,270.07854 L 168.24171,285.76337 L 166.27332,295.94373 L 163.80775,312.71445 L 163.35051,313.8136 L 162.27775,316.28228 L 160.40481,316.16797 L 159.30786,313.4245 L 156.56439,312.92108 L 155.16847,311.93845 L 153.13064,312.25941 L 152.21615,312.99145 L 150.91477,314.3412 L 150.47951,321.31418 L 149.92992,323.02885 L 149.51885,335.12166 L 148.19675,336.83582 L 146.32033,334.57429 L 131.80281,311.82634 L 112.36989,282.79128 L 89.621946,248.95514 L 77.240446,230.3731 L 78.87668,223.80666 L 85.849676,197.858 L 93.737155,166.51015 L 127.34467,174.65279 L 141.06203,177.62488",UT:"M 252.97063,309.30699 L 228.32776,305.83369 L 201.76357,300.94029 L 167.93683,294.92034 L 169.52553,285.76337 L 172.72624,270.55998 L 176.04127,253.98484 L 178.21319,240.3818 L 180.15648,231.46552 L 183.92875,211.00379 L 187.4724,193.51417 L 188.58694,187.94149 L 201.30406,190.19914 L 213.30675,192.25674 L 223.59476,194.08573 L 231.93948,195.45747 L 235.61725,195.93663 L 234.13245,206.56705 L 231.82083,219.73971 L 239.62852,220.66808 L 256.03504,222.47287 L 264.24601,223.32851 L 262.11553,245.29707 L 258.91482,267.86257 L 255.16215,295.68875 L 253.49601,306.79655 z",CO:"M 378.62078,256.79629 L 380.06066,235.51461 L 347.96558,232.45018 L 323.50262,229.75064 L 286.23746,225.63547 L 265.5471,223.12065 L 262.91791,245.29707 L 259.7172,267.70209 L 255.96454,295.68875 L 254.45888,306.79655 L 254.20828,309.55981 L 288.13455,313.35406 L 325.87526,317.62063 L 357.83587,320.7865 L 374.44407,321.63284",NM:"M 282.72425,431.045 L 282.07384,424.9219 L 290.71762,425.4473 L 320.23405,428.5117 L 348.62721,429.95159 L 350.59248,407.61912 L 354.31856,351.74315 L 355.43752,332.35392 L 357.45116,332.70345 L 357.43687,321.62845 L 325.23335,319.22539 L 288.29503,314.79835 L 253.83017,310.68314 L 249.63006,341.44101 L 242.6652,394.64312 L 238.91254,421.56511 L 236.86315,434.87445 L 252.32382,436.8636 L 253.6171,426.84065 L 270.26813,429.42722 z",OR:"M 140.30581,176.68623 L 144.60346,158.78553 L 149.26824,140.9068 L 150.31903,136.67728 L 152.6734,131.05405 L 152.05789,129.89117 L 149.54303,129.84499 L 148.26143,128.17429 L 148.71867,126.71022 L 149.22208,123.46334 L 153.68023,117.97639 L 155.50921,116.87724 L 156.65232,115.73413 L 158.13836,112.1685 L 162.18542,106.4991 L 165.75105,102.6367 L 165.97967,99.185383 L 162.71081,96.716701 L 161.50192,92.206659 L 148.26363,88.462106 L 133.17454,84.918456 L 117.74252,85.032762 L 117.28528,83.661033 L 111.79833,85.718637 L 107.34019,85.147078 L 104.93965,83.546717 L 103.68223,84.232592 L 98.99547,84.00396 L 97.280804,82.632231 L 92.022478,80.574627 L 91.222297,80.688943 L 86.878467,79.202887 L 84.935176,81.03187 L 78.762364,80.688943 L 72.818181,76.573734 L 73.504046,75.773554 L 73.732667,68.000381 L 71.446442,64.113804 L 67.331234,63.542245 L 66.645369,61.027398 L 64.291437,60.560833 L 58.492912,62.619617 L 56.229665,69.086035 L 52.996456,79.108984 L 49.763246,85.575403 L 44.751772,99.639864 L 38.285353,113.21934 L 30.20233,125.82886 L 28.262404,128.73875 L 27.454102,137.30675 L 26.160818,143.28819 L 28.86901,146.81562 L 35.598871,149.06684 L 47.190476,152.35988 L 55.055974,154.89892 L 67.469737,158.5327 L 80.797995,162.12252 L 93.965776,165.68813",ND:"M 471.30528,127.66846 L 470.94037,120.17229 L 468.95092,112.85637 L 467.12193,99.207152 L 466.66469,89.376374 L 464.67523,86.267982 L 463.07487,80.917336 L 463.07487,70.629316 L 463.76073,66.742729 L 461.64538,61.243718 L 433.22188,60.679691 L 414.63093,60.033049 L 388.11861,58.739765 L 363.17227,56.855896 L 361.91155,71.086559 L 360.53981,86.175663 L 358.28133,111.12326 L 357.79515,122.14348 L 414.61127,125.90763 z",SD:"M 472.79706,203.1809 L 471.84336,202.10003 L 470.32265,198.47334 L 472.15163,194.77142 L 473.20241,189.21633 L 470.61942,187.15872 L 470.32265,184.41526 L 470.91618,181.41897 L 473.06612,180.61658 L 473.36289,174.88124 L 473.29475,144.79538 L 472.67702,141.82329 L 468.56181,138.23348 L 467.57918,136.24402 L 467.57918,134.3227 L 469.4763,133.0433 L 471.00852,131.19013 L 471.19098,128.47084 L 413.80889,126.87049 L 357.63468,122.9839 L 356.86798,128.26326 L 355.25497,144.1315 L 353.90976,162.07837 L 352.30941,186.67509 L 368.33718,187.70389 L 387.97453,188.847 L 405.96758,190.15059 L 429.74434,191.45417 L 440.4896,190.67598 L 443.34959,192.96221 L 447.66923,195.93431 L 448.65187,196.68831 L 452.19331,195.798 L 456.24038,195.50124 L 458.98385,195.43309 L 462.09665,196.64436 L 466.64491,198.08424 L 469.77747,199.84507 L 470.3952,201.76638 L 471.30969,203.66351 L 472.01534,203.18207 z",NE:"M 484.24444,246.9897 L 485.61618,249.66503 L 485.70851,251.79078 L 488.06288,255.51689 L 490.78217,258.66923 L 485.73269,258.66923 L 442.25013,257.73055 L 401.46327,256.84025 L 380.27171,255.8796 L 381.34448,234.55175 L 347.96558,231.80828 L 352.30941,187.79842 L 367.85574,188.82723 L 387.97453,189.97033 L 405.8071,191.11345 L 429.58386,192.25656 L 440.32912,191.79932 L 442.38672,194.08554 L 447.1878,197.05764 L 448.33091,197.97213 L 452.67474,196.60039 L 456.56133,196.14315 L 459.3048,195.91452 L 461.13378,197.28626 L 466.16348,198.88662 L 469.13557,200.48698 L 469.59282,202.08734 L 470.50731,204.14494 L 472.33629,204.14494 L 473.13427,204.19111 L 474.11689,209.40326 L 476.86037,217.42924 L 478.09582,222.06983 L 480.22156,225.88828 L 480.74695,230.82564 L 482.18684,235.10132 L 482.73641,241.57092",IA:"M 566.59351,201.62843 L 566.76414,203.57088 L 569.05036,204.71064 L 570.1918,205.96722 L 570.53556,207.22883 L 574.42215,210.43123 L 575.10802,212.60398 L 574.30868,215.46595 L 572.82012,219.01043 L 572.02078,221.75222 L 569.84803,223.35426 L 568.13252,223.92666 L 562.64725,225.41186 L 561.96138,227.69475 L 561.16204,229.9793 L 561.73443,231.35104 L 563.44994,233.06488 L 563.44826,236.72617 L 561.27886,238.32653 L 560.81995,239.81342 L 560.81995,242.32994 L 559.33139,242.78718 L 557.61755,244.15725 L 557.16198,245.64246 L 557.61755,247.35964 L 556.24331,248.56409 L 553.94955,245.87276 L 552.46601,243.24611 L 544.12548,244.04544 L 533.95428,244.61617 L 508.91758,245.30372 L 495.88274,245.53234 L 486.50922,245.76096 L 485.19344,245.88221 L 483.53879,241.41044 L 483.31017,234.78037 L 481.70981,230.66516 L 481.02395,225.40685 L 478.73772,221.74888 L 477.82324,216.94781 L 475.07976,209.40326 L 473.93665,204.03062 L 472.56491,201.85871 L 470.96455,199.11525 L 472.79353,194.77142 L 474.16527,189.05585 L 471.4218,186.99824 L 470.96455,184.25477 L 471.87905,181.73992 L 473.59372,181.73992 L 485.13916,181.73992 L 534.75027,181.05405 L 554.62705,180.36819 L 556.47778,183.115 L 558.31012,185.73663 L 558.76569,186.541 L 556.93503,189.28949 L 557.3906,193.51148 L 559.90546,197.39807 L 562.8742,199.22202 L 565.27892,199.45232 z",MS:"M 624.55882,466.96958 L 624.30456,468.22573 L 619.13142,468.22573 L 617.67648,467.41743 L 615.57489,467.09411 L 608.78515,469.03403 L 607.00689,468.22573 L 604.42032,472.4289 L 603.31778,473.20692 L 602.19395,470.71894 L 601.05083,466.83235 L 597.6215,463.63164 L 598.7646,456.08709 L 598.07874,455.1726 L 596.24976,455.40122 L 588.01934,456.08709 L 563.78534,456.77296 L 563.3281,455.1726 L 564.01397,447.1708 L 567.44331,440.99799 L 572.70163,431.85309 L 571.78714,429.79549 L 572.93025,429.79549 L 573.61612,426.59477 L 571.32989,424.76579 L 571.55852,422.93681 L 569.50091,418.36436 L 569.21513,413.0203 L 570.58686,410.36256 L 570.18678,406.01873 L 568.81504,403.04663 L 570.18678,401.6749 L 568.81504,399.6173 L 569.27229,397.78832 L 570.18678,391.6155 L 573.15887,388.87204 L 572.473,386.81443 L 576.13097,381.5561 L 578.87444,380.64162 L 578.87444,378.12677 L 578.18857,376.75503 L 580.93204,371.49672 L 583.67551,370.3536 L 583.78295,366.94152 L 592.4584,366.86408 L 616.54585,364.92416 L 621.12643,364.69553 L 621.13451,371.06725 L 621.29617,387.71831 L 620.48787,418.75716 L 620.32621,432.82165 L 623.07445,451.57429 z",IN:"M 618.42049,300.8552 L 618.48577,297.99662 L 618.97076,293.47011 L 621.234,290.56023 L 623.01228,286.68036 L 625.59884,282.47719 L 625.11386,276.6574 L 623.3356,273.90917 L 623.01228,270.67596 L 623.82058,265.17949 L 623.3356,258.22808 L 622.0423,242.22367 L 620.74902,226.86591 L 619.77855,215.14589 L 622.84961,216.0354 L 624.30456,217.00536 L 625.43618,216.68204 L 627.53777,214.74212 L 630.36734,213.12513 L 635.46014,212.96309 L 657.44601,210.69983 L 663.02174,210.16667 L 664.52488,226.12288 L 668.77623,262.96443 L 669.37469,268.73603 L 669.00319,270.99928 L 670.23117,272.79465 L 670.32756,274.1672 L 667.80627,275.76671 L 664.26684,277.31802 L 661.06471,277.8683 L 660.46625,282.73523 L 655.89156,286.0477 L 653.09514,290.05814 L 653.41846,292.43487 L 652.83712,293.96907 L 649.51065,293.96907 L 647.92512,292.35247 L 645.43181,293.61467 L 642.74885,295.11781 L 642.91052,298.17226 L 641.71673,298.43029 L 641.24885,297.41215 L 639.08197,295.90901 L 635.83165,297.25049 L 634.28034,300.25674 L 632.8425,299.44844 L 631.38755,297.84893 L 626.92321,298.33392 L 621.33038,299.30388 z",IL:"M 617.80493,301.60133 L 617.80493,297.99662 L 618.06296,293.12969 L 620.43968,289.99286 L 622.21795,286.22646 L 624.80452,282.36371 L 624.43302,277.11131 L 622.42781,273.56874 L 622.33143,270.22206 L 623.02626,264.95255 L 622.20085,257.77418 L 621.13451,241.99673 L 619.84123,226.97939 L 618.91895,215.34019 L 618.64644,214.4188 L 617.83814,211.83223 L 616.54486,208.11404 L 614.92825,206.33577 L 613.47331,203.74921 L 613.23974,198.26025 L 603.33707,199.57249 L 576.13098,201.28716 L 567.44331,200.8585 L 567.67193,203.23045 L 569.95816,203.91632 L 570.87264,205.05943 L 571.32989,206.88841 L 575.21647,210.31775 L 575.90235,212.60398 L 575.21647,216.03332 L 573.38749,219.69128 L 572.70163,222.20612 L 570.4154,224.03511 L 568.58642,224.72098 L 563.3281,226.09271 L 562.64223,227.92169 L 561.95636,229.9793 L 562.64223,231.35104 L 564.47121,232.9514 L 564.24259,237.0666 L 562.4136,238.66696 L 561.72774,240.26732 L 561.72774,243.01079 L 559.89876,243.46803 L 558.2984,244.61115 L 558.06978,245.98289 L 558.2984,248.04049 L 556.58373,249.35506 L 555.55493,252.1557 L 556.01217,255.81365 L 558.2984,263.12958 L 565.61433,270.67413 L 571.10126,274.33209 L 570.87264,278.67592 L 571.78714,280.04766 L 578.18857,280.5049 L 580.93204,281.87664 L 580.24618,285.5346 L 577.95995,291.47879 L 577.27408,294.67951 L 579.5603,298.56609 L 585.96174,303.82441 L 590.5342,304.51028 L 592.59179,309.53998 L 594.6494,312.74069 L 593.73491,315.71278 L 595.33527,319.82799 L 597.16425,321.8856 L 599.10861,321.0933 L 599.7953,318.93012 L 601.8316,317.49228 L 605.06793,316.39174 L 608.15659,317.57154 L 611.03228,318.63788 L 611.82348,318.42804 L 611.75819,317.18606 L 610.69186,314.42072 L 611.12866,312.044 L 613.409,310.47557 L 615.76863,309.48851 L 616.93134,309.06882 L 616.34998,307.74444 L 615.58986,305.57757 L 616.83496,304.31536 z",MN:"M 471.87905,128.47084 L 471.4218,120.0118 L 469.59282,112.69588 L 467.76384,99.207152 L 467.30659,89.376374 L 465.47761,85.947031 L 463.87725,80.917336 L 463.87725,70.629316 L 464.56311,66.742729 L 462.74218,61.291062 L 492.8746,61.326333 L 493.19792,53.081649 L 493.84456,52.919988 L 496.10781,53.40497 L 498.04773,54.213272 L 498.85603,59.709728 L 500.31098,65.852826 L 501.92758,67.469431 L 506.7774,67.469431 L 507.10072,68.924375 L 513.40548,69.247696 L 513.40548,71.349282 L 518.25529,71.349282 L 518.57861,70.055998 L 519.71023,68.924375 L 521.97348,68.277733 L 523.26676,69.247696 L 526.17665,69.247696 L 530.0565,71.834263 L 535.3913,74.25917 L 537.81621,74.744152 L 538.30119,73.774189 L 539.75613,73.289207 L 540.24111,76.199096 L 542.82768,77.49238 L 543.31266,77.007398 L 544.60595,77.169059 L 544.60595,79.270645 L 547.19251,80.240608 L 550.26406,80.240608 L 551.88067,79.432305 L 555.11388,76.199096 L 557.70044,75.714115 L 558.50875,77.49238 L 558.99373,78.785663 L 559.96369,78.785663 L 560.93365,77.977361 L 569.82498,77.65404 L 571.60324,80.725589 L 572.24989,80.725589 L 572.9635,79.64131 L 577.40341,79.270645 L 576.79131,81.550104 L 572.85259,83.387229 L 563.60681,87.448357 L 558.83207,89.455254 L 555.76052,92.041822 L 553.33561,95.598352 L 551.07237,99.478203 L 549.2941,100.28651 L 544.76761,105.29798 L 543.47432,105.45964 L 539.63268,108.39354 L 536.81624,111.55445 L 536.58762,114.52487 L 536.81457,122.30306 L 535.21755,123.90342 L 529.95924,128.01694 L 528.12691,133.73419 L 530.6451,137.38211 L 531.10402,139.90198 L 529.95589,142.87575 L 529.72893,146.53538 L 530.18618,153.61933 L 533.61218,157.72618 L 536.58762,157.72618 L 539.09745,160.01909 L 542.29984,161.38414 L 545.95948,166.41886 L 553.04677,171.44186 L 554.87742,173.50448 L 555.11107,179.00649 L 534.52332,179.69236 L 474.27457,180.15128 L 473.93665,144.47443 L 473.47941,141.50234 L 469.3642,138.073 L 468.22108,136.24402 L 468.22108,134.64365 L 470.27868,133.0433 L 471.65042,131.67156 z",WI:"M 612.94089,197.18116 L 613.31165,194.21124 L 611.69504,189.68474 L 611.0484,183.54165 L 609.91678,181.11674 L 610.88674,178.04519 L 611.69504,175.1353 L 613.14999,172.54874 L 612.50334,169.15387 L 611.8567,165.59734 L 612.34168,163.81907 L 614.28161,161.39416 L 614.44327,158.64593 L 613.63497,157.35265 L 614.28161,154.76608 L 614.76659,151.53287 L 617.51482,145.87476 L 620.42471,139.08502 L 620.58637,136.82177 L 620.26305,135.85181 L 619.45474,136.33679 L 615.25157,142.64155 L 612.50334,146.68306 L 610.56342,148.46133 L 609.75512,150.72457 L 608.30017,151.53287 L 607.16855,153.4728 L 605.7136,153.14948 L 605.55194,151.37121 L 606.84523,148.94631 L 608.94681,144.25815 L 610.72508,142.64155 L 611.8264,140.34999 L 610.19574,139.44474 L 608.824,138.073 L 607.22364,127.78498 L 603.56569,126.64187 L 602.19395,124.35564 L 589.6197,121.61217 L 587.10485,120.46906 L 578.87444,118.18283 L 570.64402,117.03971 L 566.47456,111.63491 L 565.94513,112.89602 L 564.81351,112.73436 L 564.16686,111.60274 L 561.41864,110.79444 L 560.28701,110.9561 L 558.50875,111.92606 L 557.53878,111.27942 L 558.18543,109.33949 L 560.12535,106.26794 L 561.25697,105.13632 L 559.31705,103.68138 L 557.21546,104.48968 L 554.30557,106.4296 L 546.86919,109.66281 L 543.9593,110.30945 L 541.04942,109.82447 L 540.06769,108.94622 L 537.95099,111.7814 L 537.72237,114.52487 L 537.72237,122.9839 L 536.57925,124.58427 L 531.32093,128.47084 L 529.03471,134.41503 L 529.49195,134.64365 L 532.0068,136.70126 L 532.69266,139.90198 L 530.86368,143.10269 L 530.86368,146.98928 L 531.32093,153.61933 L 534.29302,156.59143 L 537.72237,156.59143 L 539.55135,159.79215 L 542.98068,160.24939 L 546.86727,165.96496 L 553.95457,170.08017 L 556.01217,172.82364 L 556.92667,180.25388 L 557.61253,183.5689 L 559.89876,185.16926 L 560.12738,186.541 L 558.06978,189.97033 L 558.2984,193.17106 L 560.81325,197.05764 L 563.3281,198.20075 L 566.30019,198.65799 L 567.64253,200.03811 L 576.81603,200.03809 L 602.88316,198.55122 z",MO:"M 555.78857,249.52738 L 553.2687,246.44013 L 552.12558,244.1539 L 544.35242,244.83977 L 534.52164,245.29701 L 509.14453,246.21151 L 495.6558,246.44013 L 487.76835,246.55444 L 485.48209,246.66875 L 486.73952,249.1836 L 486.5109,251.46982 L 489.02574,255.35641 L 492.11214,259.47162 L 495.19855,262.21509 L 497.48478,262.44371 L 498.85651,263.35821 L 498.85651,266.3303 L 497.02754,267.93066 L 496.57028,270.21688 L 498.62789,273.64623 L 501.14275,276.61832 L 503.65759,278.4473 L 505.02932,290.10705 L 504.34346,325.42926 L 504.57208,330.11601 L 505.02932,335.49952 L 528.46231,335.3827 L 551.66834,334.69683 L 572.473,333.89582 L 584.12774,333.66552 L 586.29714,337.09152 L 585.61295,340.39902 L 582.5257,342.80206 L 581.95331,344.6394 L 587.3318,345.09666 L 591.22676,344.41078 L 592.94394,338.91715 L 593.59536,333.06036 L 595.91436,331.03553 L 597.62651,329.54864 L 599.68412,328.519 L 599.79926,325.65871 L 600.37334,323.9432 L 599.34202,322.19493 L 596.59688,322.3395 L 594.42748,319.71451 L 593.05406,315.48584 L 593.85507,312.96764 L 591.91094,309.53998 L 590.0803,304.96418 L 585.28089,304.16484 L 578.31209,298.56609 L 576.59323,294.45256 L 577.39258,291.25184 L 579.45185,285.19417 L 579.91077,282.33054 L 577.96163,281.29923 L 571.10629,280.50156 L 570.07832,278.7894 L 569.96652,274.55904 L 564.47958,271.12803 L 557.50407,263.35653 L 555.21785,256.0406 L 554.98756,251.81528 z",AR:"M 590.95215,344.95331 L 587.10485,345.89098 L 580.93204,345.43373 L 581.61791,342.46164 L 584.81863,339.71817 L 585.27587,337.43194 L 583.44689,334.45984 L 572.473,334.91709 L 551.66834,335.83158 L 528.34883,336.51745 L 505.02932,336.97469 L 506.62968,343.83338 L 506.62967,352.0638 L 508.00142,363.03779 L 508.23004,400.87472 L 510.51627,402.81801 L 513.48836,401.44628 L 516.23184,402.58939 L 516.66218,412.91269 L 539.548,412.77064 L 558.41187,411.96962 L 568.53344,411.77209 L 569.67907,409.68172 L 569.39245,406.13221 L 567.56682,403.16011 L 569.16551,401.6749 L 567.56682,399.1634 L 568.25102,396.65357 L 569.61941,391.04814 L 572.1376,388.98551 L 571.45173,386.70095 L 575.1097,381.32916 L 577.85317,379.96077 L 577.73969,378.46719 L 577.39425,376.64155 L 580.2512,371.04282 L 582.65424,369.78623 L 583.03837,366.3586 L 584.80904,365.1169 L 585.66552,360.88263 L 584.32406,356.87219 L 588.36558,354.49548 L 588.91584,352.47628 L 590.15112,348.2087 z",OK:"M 375.34313,322.57146 L 364.65498,322.11427 L 358.22497,321.62845 L 358.48217,321.82848 L 357.77873,332.25058 L 379.74411,333.65746 L 411.79966,334.96106 L 409.46506,359.37971 L 409.00781,377.21228 L 409.23644,378.81264 L 413.58027,382.4706 L 415.63787,383.61371 L 416.32374,383.38509 L 417.00961,381.32748 L 418.38135,383.15647 L 420.43895,383.15647 L 420.43895,381.78473 L 423.18242,383.15647 L 422.72518,387.04305 L 426.84039,387.27167 L 429.35523,388.41479 L 433.47044,389.10066 L 435.98529,390.92964 L 438.27152,388.87204 L 441.70086,389.5579 L 444.21571,392.98724 L 445.13019,392.98724 L 445.13019,395.27347 L 447.41642,395.95933 L 449.70264,393.67311 L 451.53163,394.35897 L 454.04647,394.35897 L 454.96097,396.87383 L 459.76204,398.7028 L 461.13378,398.01694 L 462.96276,393.90173 L 464.10587,393.90173 L 465.24899,395.95933 L 469.3642,396.6452 L 473.02215,398.01694 L 475.99425,398.93143 L 477.82324,398.01694 L 478.5091,395.50209 L 482.85293,395.50209 L 484.91053,396.41658 L 487.654,394.35897 L 488.79712,394.35897 L 489.48299,395.95933 L 493.59819,395.95933 L 495.19855,393.90173 L 497.02754,394.35897 L 499.08514,396.87383 L 502.28585,398.7028 L 505.48658,399.6173 L 507.42766,400.73623 L 507.03856,363.51922 L 505.66681,352.54524 L 505.50635,343.6729 L 504.06646,337.13517 L 503.28826,329.95553 L 503.22012,326.13931 L 491.08328,326.45805 L 444.67324,326.00081 L 399.63433,323.94319 z",KS:"M 503.38059,325.13028 L 490.76233,325.33471 L 444.67324,324.87748 L 400.11576,322.81985 L 375.48602,321.56244 L 379.62981,256.84247 L 401.46327,257.64264 L 441.92918,259.01437 L 486.05364,259.47162 L 491.14927,259.47162 L 494.39617,262.69652 L 497.16383,262.92514 L 498.05413,264.00011 L 498.05413,266.00934 L 496.22515,267.60971 L 495.7679,270.21688 L 497.98598,273.80671 L 500.50084,276.93927 L 503.01569,278.92873 L 504.06646,290.10705 z",LA:"M 602.20213,472.99473 L 601.17268,470.37851 L 600.02956,467.28625 L 596.7137,463.74511 L 597.62986,456.99488 L 597.51137,455.85345 L 596.24976,456.19555 L 588.01934,457.10836 L 562.99102,457.56728 L 562.30683,455.1726 L 563.21964,446.7169 L 566.53552,440.77105 L 571.56688,432.08003 L 570.99281,429.68201 L 572.2494,429.00116 L 572.70833,427.04867 L 570.42209,424.99274 L 570.3103,423.05029 L 568.47964,418.70478 L 568.02323,412.76393 L 558.2984,412.87741 L 539.0941,413.79191 L 516.88913,413.82048 L 516.9177,423.39405 L 517.60357,432.76758 L 518.28944,436.65416 L 520.80429,440.76937 L 521.71878,445.79908 L 526.06261,451.28601 L 526.29123,454.48673 L 526.9771,455.1726 L 526.29123,463.63164 L 523.31914,468.66133 L 524.9195,470.71894 L 524.23362,473.23378 L 523.54776,480.54971 L 522.17602,483.75042 L 522.29848,487.36687 L 526.98496,485.84672 L 535.06798,485.5234 L 545.41425,489.07993 L 551.88067,490.21156 L 555.59886,488.75661 L 558.83207,489.88824 L 562.06528,490.8582 L 562.87358,488.75661 L 559.64037,487.62499 L 557.0538,488.10997 L 554.30557,486.49337 C 554.30557,486.49337 554.46724,485.20008 555.11388,485.03842 C 555.76052,484.87676 558.18543,484.06846 558.18543,484.06846 L 559.96369,485.5234 L 561.74196,484.55344 L 564.97517,485.20008 L 566.43011,487.62499 L 566.75343,489.88824 L 571.27992,490.21156 L 573.05819,491.98982 L 572.24989,493.60643 L 570.9566,494.41473 L 572.57321,496.03133 L 580.97955,499.58786 L 584.53608,498.29458 L 585.50605,495.86967 L 588.09261,495.22303 L 589.87088,493.76809 L 591.16416,494.73805 L 591.97246,497.64794 L 589.70922,498.45624 L 590.35586,499.10288 L 593.75073,497.8096 L 596.01398,494.41473 L 596.82228,493.92975 L 594.72069,493.60643 L 595.52899,491.98982 L 595.36733,490.53488 L 597.46892,490.0499 L 598.60054,488.75661 L 599.24718,489.56491 C 599.24718,489.56491 599.08552,492.63646 599.89383,492.63646 C 600.70213,492.63646 604.097,493.28311 604.097,493.28311 L 608.13851,495.22303 L 609.10847,496.67798 L 612.01836,496.67798 L 613.14999,497.64794 L 615.41323,494.57639 L 615.41323,493.12144 L 614.11995,493.12144 L 610.72508,490.37322 L 604.9053,489.56491 L 601.67209,487.30167 L 602.80372,484.55344 L 605.06696,484.87676 L 605.22862,484.23012 L 603.45036,483.26016 L 603.45036,482.77517 L 606.68357,482.77517 L 608.46183,479.70363 L 607.16855,477.7637 L 606.84523,475.01547 L 605.39028,475.17713 L 603.45036,477.27872 L 602.80372,479.86529 L 599.73217,479.21864 L 598.7622,477.44038 L 600.54047,475.50045 L 602.56122,473.7222 z",VA:"M 828.90662,269.2457 L 828.76271,267.29867 L 835.21614,264.74879 L 834.44573,267.96663 L 831.52578,271.74574 L 831.10769,276.33156 L 831.56944,279.722 L 829.74147,284.70016 L 827.5772,286.6163 L 826.10686,281.97549 L 826.55275,276.52638 L 828.13975,272.34331 z M 831.18615,297.54706 L 773.01197,310.12249 L 735.585,315.40156 L 728.90667,315.02638 L 726.32142,316.95276 L 718.98229,317.17345 L 710.60018,318.15112 L 701.67396,319.10283 L 710.15465,314.15454 L 710.14153,312.07961 L 711.66158,309.93348 L 722.21536,298.43205 L 726.16208,302.90951 L 729.94509,303.87349 L 732.48855,302.73317 L 734.72577,301.42201 L 737.26238,302.76553 L 741.17655,301.33777 L 743.05328,296.78143 L 745.6542,297.32145 L 748.50944,295.1902 L 750.30871,295.6838 L 753.13592,292.00723 L 753.48417,289.92412 L 752.52051,288.64855 L 753.52328,286.78192 L 758.79755,274.50477 L 759.41432,268.76969 L 760.64321,268.24615 L 762.82174,270.68902 L 766.7576,270.38785 L 768.68681,262.81422 L 771.4808,262.25336 L 772.53055,259.51229 L 775.11037,257.16541 L 776.37834,254.8232 L 777.8822,251.47022 L 777.96713,246.40267 L 787.78864,250.22549 C 788.46949,250.56591 788.44474,245.44151 788.44474,245.44151 L 792.49505,246.81886 L 792.03305,249.44766 L 800.18916,252.38732 L 801.48203,254.18171 L 800.61409,257.86385 L 799.35101,259.18967 L 798.84509,260.93571 L 799.339,263.33843 L 801.29798,264.61681 L 805.21607,266.06202 L 808.16474,267.02998 L 813.02121,267.97209 L 815.17352,270.06055 L 818.36396,270.46308 L 819.23203,271.6631 L 818.79254,276.35318 L 820.16727,277.45573 L 819.68832,279.38612 L 820.91773,280.17589 L 820.69593,281.56049 L 818.00194,281.46555 L 818.0909,283.08107 L 820.37189,284.62394 L 820.49343,286.03584 L 822.26654,287.82122 L 822.75833,290.34535 L 820.20529,291.72666 L 821.77751,293.22096 L 827.57853,291.53513 z",DC:"M 801.75695,253.84384 L 800.67992,252.20717 L 799.66604,251.36463 L 800.7653,249.74841 L 802.99814,251.25941 z",HI:"m 264.86254,475.31675 c -4.11668,2.2946 -5.54199,0.83475 -9.10997,9.79227 -1.26445,3.14107 -2.70416,9.13652 -2.99211,12.42282 -0.12519,1.44473 -0.37556,2.85189 -0.50076,3.10603 -0.25039,0.36306 -1.51483,0.57589 -4.36921,0.72612 -4.94509,0.25038 -7.2236,1.08917 -9.27675,3.43026 -1.62749,1.84158 -2.34109,3.90099 -3.39271,9.71367 -0.75115,3.97236 -0.75115,5.52475 -0.75115,18.23589 0,15.41881 0.25037,17.3693 2.41621,22.67759 2.49132,5.99295 8.60071,10.03916 13.90386,9.24544 1.12673,-0.17527 1.58993,-0.10826 1.70261,0.25038 0.10771,0.28795 0.37558,4.08127 0.75116,8.45049 0.25037,4.3692 0.75115,8.41417 0.25037,9.02762 0.50078,1.29949 0.50078,2.96079 3.29256,3.61178 1.25193,0.65101 7.32376,1.8779 10.79157,2.16709 4.9451,0.43816 9.71493,-0.90138 11.95588,-3.32135 2.49133,-2.6353 3.54294,-6.49874 3.83089,-13.75814 0.25037,-6.28466 0.37557,-18.798 2.77926,-12.88354 2.56645,0 2.66659,12.40656 2.85438,18.54511 0.25039,8.70212 1.24255,9.01075 6.74786,11.37497 3.83089,0.97651 9.50211,1.15177 11.37999,0.40062 3.17988,-1.2995 5.3457,-3.86344 6.93564,-8.23389 0.87634,-2.60025 3.83089,-16.24997 4.40678,-20.87194 0.62596,-4.40677 0.75115,-9.31681 1.12672,-22.60534 l 0.25039,-12.1324 1.33956,-2.49133 c 1.66506,-3.17737 2.37865,-5.705 2.67912,-9.13652 0.50076,-6.13818 -1.25193,-10.14809 -6.93566,-16.46705 -2.16583,-2.38365 -5.38327,-6.06682 -7.11093,-8.19633 -1.7652,-2.12952 -4.44431,-4.83869 -5.95916,-6.06682 -3.43025,-2.70917 -9.7149,-5.85024 -13.79492,-6.89684 -3.9686,-1.01407 -11.88076,-1.2632 -15.92572,-0.50077 z"},a=copy(s);for(n in used=[],s)for(failed=!0;failed;){for(v in nnn=(L=a,t=void 0,t=Object.keys(L),L[t[t.length*Math.random()<<0]]),ff=!0,used)if(used[v]==nnn){ff=!1;break}ff&&(used.push(nnn),s[n]=nnn,failed=!1)}var o,n={};for(o in s)n={},this.options.stateSpecificStyles[o]?b.extend(n,e,this.options.stateSpecificStyles[o]):n=e,this.stateShapes[o]=i.path(s[o]).attr(n),this.topShape=this.stateShapes[o],this.stateHitAreas[o]=i.path(s[o]).attr({fill:"#000","stroke-width":0,opacity:0,cursor:"pointer"}),this.stateHitAreas[o].node.dataState=o;for(o in this._onClickProxy=b.proxy(this,"_onClick"),this._onMouseOverProxy=b.proxy(this,"_onMouseOver"),this._onMouseOutProxy=b.proxy(this,"_onMouseOut"),this.stateHitAreas)this.stateHitAreas[o].toFront(),b(this.stateHitAreas[o].node).bind("mouseout",this._onMouseOutProxy),b(this.stateHitAreas[o].node).bind("click",this._onClickProxy),b(this.stateHitAreas[o].node).bind("mouseover",this._onMouseOverProxy)},_initCreateLabels:function(){for(var L,t,e,i=this.paper,s=["VT","NH","MA","RI","CT","NJ","DE","MD","DC"],a=this.options.labelWidth,o=this.options.labelHeight,n=this.options.labelGap,l=this.options.labelRadius,r=a/this.scale,h=o/this.scale,c=(a+n)/this.scale,p=(o+n)/this.scale*.5,M=l/this.scale,u=this.options.labelBackingStyles,S=this.options.labelTextStyles,f={},z=0;z<s.length;++z)e=s[z],L=(z+1)%2*c+860,t=z*p+220,f={},this.options.stateSpecificLabelBackingStyles[e]?b.extend(f,u,this.options.stateSpecificLabelBackingStyles[e]):f=u,this.labelShapes[e]=i.rect(L,t,r,h,M).attr(f),f={},this.options.stateSpecificLabelTextStyles[e]?b.extend(f,S,this.options.stateSpecificLabelTextStyles[e]):b.extend(f,S),f["font-size"]&&(f["font-size"]=parseInt(f["font-size"])/this.scale+"px"),this.labelTexts[e]=i.text(L+r/2,t+h/2,e).attr(f),this.labelHitAreas[e]=i.rect(L,t,r,h,M).attr({fill:"#000","stroke-width":0,opacity:0,cursor:"pointer"}),this.labelHitAreas[e].node.dataState=e;for(e in this.labelHitAreas)this.labelHitAreas[e].toFront(),b(this.labelHitAreas[e].node).bind("mouseout",this._onMouseOutProxy),b(this.labelHitAreas[e].node).bind("click",this._onClickProxy),b(this.labelHitAreas[e].node).bind("mouseover",this._onMouseOverProxy)},_getStateFromEvent:function(L){L=L.target&&L.target.dataState||L.dataState;return this._getState(L)},_getState:function(L){return{shape:this.stateShapes[L],hitArea:this.stateHitAreas[L],name:L,labelBacking:this.labelShapes[L],labelText:this.labelTexts[L],labelHitArea:this.labelHitAreas[L]}},_onMouseOut:function(L){var t=this._getStateFromEvent(L);if(t.hitArea)return!this._triggerEvent("mouseout",L,t)},_defaultMouseOutAction:function(L){var t={};this.options.stateSpecificStyles[L.name]?b.extend(t,this.options.stateStyles,this.options.stateSpecificStyles[L.name]):t=this.options.stateStyles,L.shape.animate(t,this.options.stateHoverAnimation),L.labelBacking&&(t={},this.options.stateSpecificLabelBackingStyles[L.name]?b.extend(t,this.options.labelBackingStyles,this.options.stateSpecificLabelBackingStyles[L.name]):t=this.options.labelBackingStyles,L.labelBacking.animate(t,this.options.stateHoverAnimation))},_onClick:function(L){var t=this._getStateFromEvent(L);if(t.hitArea)return!this._triggerEvent("click",L,t)},_onMouseOver:function(L){var t=this._getStateFromEvent(L);if(t.hitArea)return!this._triggerEvent("mouseover",L,t)},_defaultMouseOverAction:function(L){this.bringShapeToFront(L.shape),this.paper.safari();var t={};this.options.stateSpecificHoverStyles[L.name]?b.extend(t,this.options.stateHoverStyles,this.options.stateSpecificHoverStyles[L.name]):t=this.options.stateHoverStyles,L.shape.animate(t,this.options.stateHoverAnimation),L.labelBacking&&(t={},this.options.stateSpecificLabelBackingHoverStyles[L.name]?b.extend(t,this.options.labelBackingHoverStyles,this.options.stateSpecificLabelBackingHoverStyles[L.name]):t=this.options.labelBackingHoverStyles,L.labelBacking.animate(t,this.options.stateHoverAnimation))},_triggerEvent:function(L,t,e){var i=e.name,s=!1,a=b.Event("usmap"+L+i);if(a.originalEvent=t,this.options[L+"State"][i]&&(s=!1===this.options[L+"State"][i](a,e)),a.isPropagationStopped()&&(this.element.trigger(a,[e]),s=s||a.isDefaultPrevented()),a.isPropagationStopped()||((a=b.Event("usmap"+L)).originalEvent=t,this.options[L]&&(s=!1===this.options[L](a,e)||s),a.isPropagationStopped()||(this.element.trigger(a,[e]),s=s||a.isDefaultPrevented())),!s)switch(L){case"mouseover":this._defaultMouseOverAction(e);break;case"mouseout":this._defaultMouseOutAction(e)}return!s},trigger:function(L,t,e){t=t.replace("usmap",""),L=L.toUpperCase();L=this._getState(L);this._triggerEvent(t,e,L)},bringShapeToFront:function(L){}};!function(a,o,L,t){t=t instanceof Array?t:[];for(var n={},e=0;e<t.length;e++)n[t[e]]=!0;function l(L){this.element=L}l.prototype=L,a.fn[o]=function(){var i=arguments,s=this;return this.each(function(){var L,t=a(this),e=t.data("plugin-"+o);e?"string"==typeof i[0]&&"_"!=i[0].charAt(0)&&"function"==typeof e[i[0]]&&(L=Array.prototype.slice.call(i,1),L=e[i[0]].apply(e,L),i[0]in n&&(s=L)):(e=new l(t),t.data("plugin-"+o,e),e._init&&e._init.apply(e,i))}),s}}(b,"usmap",L,[])}(jQuery,(document,window,Raphael));
		                	var important_code = setInterval(function() {
			                	$("#view_electoral_map").click(function() {
			                        var e = A(return_type = 2);
			                    	_(e)
			                    })
		    	            	$("#answer_select_button").click(function() {
		    	                    var t = $("input:radio[name=game_answers]:checked").val();
		    	                	null == t ? C(e.election_id) : n(t)
		        	            })
		        	            if (diff_mod) {
		        	            	var client = new XMLHttpRequest();
									client.open('GET', "../static/mods/"+$("#modSelect")[0].value+".html");
									client.onreadystatechange = function() {
										eval(client.responseText)
									}
									client.send();
								}
		            	        if ($("#answer_select_button")[0] != null) {
		                	    	clearInterval(important_code)
	                    		}
	                    	}, 1000);
	                	}
	                    console.log("e")
	                }(t, i, l, o, c)
	        })
	    }

	    function n(t) {
	        e.player_answers.push(Number(t));
	        var i = 0,
	            a = S(e.election_id);
	        if (1 == e.answer_feedback_flg) {
	            for (var s = 0; s < e.answer_feedback_json.length; s++)
	                if (e.answer_feedback_json[s].fields.answer == t && e.answer_feedback_json[s].fields.candidate == e.candidate_id) {
	                    i = 1;
	                    break
	                } if (1 == i) {
	                var n = '                    <div class="overlay" id="visit_overlay"></div>                    <div class="overlay_window" id="visit_window">                        <div class="overlay_window_content" id="visit_content">                        <h3>Advisor Feedback</h3>                        <img src="' + e.election_json[a].fields.advisor_url + '" width="208" height="128"/>                        <p>' + e.answer_feedback_json[s].fields.answer_feedback + '</p>                        </div>                        <div class="overlay_buttons" id="visit_buttons">                        <button id="ok_button">OK</button><br>                        <button id="no_feedback_button">Don\'t give me advice</button>                        </div>                    </div>';
	                $("#game_window").append(n), $("#ok_button").click(function() {
	                    l()
	                }), $("#no_feedback_button").click(function() {
	                    e.answer_feedback_flg = 0, l()
	                })
	            }
	            0 == i && l()
	        } else l()
	    }
function importgame(code)
{
starting_mult = encrypted + campaignTrail_temp.difficulty_level_multiplier	
A(1)
campaigntrail = JSON.parse(code)
e.election_id=campaigntrail.election_id
e.candidate_id=campaigntrail.player_candidate
e.player_answers=campaigntrail.player_answers
e.player_visits=campaigntrail.player_visits
e.final_overall_results=campaigntrail.overall_results
e.final_state_results=campaigntrail.state_results
e.difficulty_level_multiplier=campaigntrail.difficulty_multiplier
d()
}		

	    function l() {
	        var t = A(2);
	        if (e.question_number++, e.question_number == e.global_parameter_json[0].fields.question_count) {
	        	e.final_state_results = A(1), d();
	        }
	        else if (e.question_number % 2 == 0) {
	            var i = S(e.election_id);
	            1 == e.election_json[i].fields.has_visits ? function(e) {
                      $("#game_window").html('        <div class="game_header">            <h2>NEW CAMPAIGN TRAIL</h2>        </div>        <div id="main_content_area">            <div id="map_container"></div>            <div id="menu_container">                <div id="overall_result_container">                    <div id="overall_result">                        <h3>ESTIMATED SUPPORT</h3>                        <p>Click on a state to view more info.</p>                    </div>                </div>                <div id="state_result_container">                    <div id="state_info">                        <h3>STATE SUMMARY</h3>                        <p>Click/hover on a state to view more info.</p>                        <p>Precise results will be available on election night.</p>                    </div>                </div>            </div>        </div>        <p class="visit_text"><font size="2">Use this map to click on the next state you wish to visit. Choose wisely             and focus your efforts where they will have the most impact.</p>        </div>        ');
	                var t = r(e, 1);
	                $("#map_container").usmap(t)
	            }(t) : o(t)
	        } else o(t)
		if ($("#importfile")[0].value !="")
		{ 
		importgame(e.dagakotowaru)		
		}
		else
		{
		console.log("if failed")
		}	
	    }
		

	    function o(t, e=campaignTrail_temp) {
	        for (var i = [], a = 0; a < e.answers_json.length && (e.answers_json[a].fields.question != e.questions_json[e.question_number].pk || (i.push({
	                key: a,
	                order: Math.random()
	            }), 4 != i.length)); a++);
	        P(i, "order");
	        var s = "";
	        for (a = 0; a < i.length; a++) s += '<input type="radio" name="game_answers" class="game_answers"             id="game_answers[' + a.toString() + ']" value="' + e.answers_json[i[a].key].pk + '"/>\t\t    <label for="game_answers[' + a.toString() + ']">' + e.answers_json[i[a].key].fields.description + "</label><br>";
	        var l = '<div class="game_header">    <h2>NEW CAMPAIGN TRAIL</h2>    </div>    <div class="inner_window_question">        <div class="inner_inner_window">        <h3>' + e.questions_json[e.question_number].fields.description + '</h3>            <div id="question_form">                <form name="question">' + s + '</form>            </div>        </div>        <p><button id="answer_select_button" class="answer_select_button">CONTINUE</button>        <button id="view_electoral_map">Latest Polls/Electoral Map</button></p>    </div>    <img id="candidate_pic" src="' + e.candidate_image_url + '">    <img id="running_mate_pic" src="' + e.running_mate_image_url + '">    <div class="inner_window_sign_display">        <div id="progress_bar">\t    <h3>Question ' + (e.question_number + 1) + " of " + e.global_parameter_json[0].fields.question_count + '</h3>        </div>        <div id="campaign_sign">        <p>' + e.candidate_last_name + "</p>        <p>" + e.running_mate_last_name + "</p>        </div>    </div>";
	        $("#game_window").html(l), $("#answer_select_button").click(function() {
	            var t = $("input:radio[name=game_answers]:checked").val();
	            null == t ? C(e.election_id) : n(t)
	        }), $("#view_electoral_map").click(function() {
	            _(t)
	        })
	    }

	    function _(e) {
	        $("#game_window").html('        <div class="game_header">            <h2>NEW CAMPAIGN TRAIL</h2>        </div>        <div id="main_content_area">            <div id="map_container"></div>            <div id="menu_container">                <div id="overall_result_container">                    <div id="overall_result">                        <h3>ESTIMATED SUPPORT</h3>                        <p>Click on a state to view more info.</p>                    </div>                </div>                <div id="state_result_container">                    <div id="state_info">                        <h3>STATE SUMMARY</h3>                        <p>Click/hover on a state to view more info.</p>                        <p>Precise results will be available on election night.</p>                    </div>                </div>            </div>        </div>        <div id="map_footer">        <button id="resume_questions_button">Back to the game</button><button id="margin_switcher">Switch margin colouring gradient</button>        </div>');
	        var t = r(e, 0);
	        $("#map_container").usmap(t), $("#resume_questions_button").click(function() {
	            o(e)
	        })
	        $("#margin_switcher").click(function() {
	        	if (campaignTrail_temp.margin_format == "#C9C9C9") {
	        		campaignTrail_temp.margin_format = "#FFFFFF"
	        	} else {
	        		campaignTrail_temp.margin_format = "#C9C9C9"
	        	}
	        	window.localStorage.setItem("margin_form", campaignTrail_temp.margin_format)
	            o(e)
	        })
	    }

	    function r(t, i) {
	        for (var a = {}, s = 0; s < t.length; s++) {
	            for (var n = 0, l = 0, _ = 0; _ < t[s].result.length; _++) t[s].result[_].percent > l && (l = t[s].result[_].percent, n = t[s].result[_].candidate);
	            var r = 0;
	            for (_ = 0; _ < t[s].result.length; _++) t[s].result[_].candidate != n && t[s].result[_].percent > r && (r = t[s].result[_].percent);
	            var d = l - r;
	            for (_ = 0; _ < e.candidate_json.length; _++) e.candidate_json[_].pk == n && (a[t[s].abbr] = {
	                //fill: e.candidate_json[_].fields.color_hex
	                fill: r2h(_interpolateColor(h2r(campaignTrail_temp.margin_format),h2r(e.candidate_json[_].fields.color_hex), gradient(Math.log((d+1))*4.5, 0, 1)))
	            })/*: d > .051 ? {
	                fill: e.candidate_json[_].fields.secondary_color_hex
	            } : {
	                fill: "#C9C9C9" //alternate: #FFFFFF
	            })*/
	        }
	        var c = function(i, a) {
	        	total_v = 0
	        	cand_evs = []
	        	for (var s = 0; s < e.states_json.length; s++) {
	    			for (var n = [], l = 0; l < t.length; l++)
	                	if (t[l].abbr == e.states_json[s].fields.abbr) {
	                		npp = []
							for (var o = 0; o < t[l].result.length; o++) {n.push({
	                    		candidate: t[l].result[o].candidate,
		                		percent: t[l].result[o].percent
			                });
							npp.push(t[l].result[o].percent)}
							mvv = 0
							for (var lneff = 0; lneff < npp.length; lneff++) {
								if (Math.max(...npp) == npp[lneff]) {
									mvv = lneff
									break
								}
							}
							nef = 0
	    	                for (o = 0; o < e.candidate_json.length; o++)
	                    		if (e.candidate_json[o].pk == n[mvv].candidate) {
		                           	nef = o
		                            break
								}
							if (e.candidate_json[nef].evvs == null) {
								e.candidate_json[nef].evvs = e.states_json[s].fields.electoral_votes
							} else {
								e.candidate_json[nef].evvs += e.states_json[s].fields.electoral_votes
							}
							
						}
					P(n, "percent"), n.reverse();
					var _ = "";
					for (l = 0; l < n.length; l++) {
	                	var r = "",
	                    d = Math.floor(100 * n[l].percent)/100
	                    nef = 0
	                    for (o = 0; o < e.candidate_json.length; o++)
	                    	if (e.candidate_json[o].pk == n[l].candidate) {
								r = e.candidate_json[o].fields.last_name;
	                           	nef = o
	                            break
							}
						popv = campaignTrail_temp.states_json[s].fields.popular_votes*d
						if (e.candidate_json[nef].popvs == null) {
							e.candidate_json[nef].popvs = popv
						} else {
							e.candidate_json[nef].popvs += popv
						}
	                }
	                total_v += campaignTrail_temp.states_json[s].fields.popular_votes
	            }
	            	nnnn = []
	            	w = []
	            	vv = ""
	                for (o = 0; o < e.candidate_json.length; o++) {
	                    if (containsObject(e.candidate_json[o].pk,e.opponents_list) || e.candidate_json[o].pk == e.candidate_id) {
							e.candidate_json[o].pvp = e.candidate_json[o].popvs / total_v
							nnnn.push(copy(e.candidate_json[o]))
							w.push(e.candidate_json[o].pvp)
							cand_evs.push(e.candidate_json[o].evvs)
							e.candidate_json[o].popvs = 0
							e.candidate_json[o].evvs = 0
						}
					}

					w.sort((a, b) => b-a)
					nn2 = []
					nn3 = []
					for (vvvv in w) {
						for (vvvvv in nnnn) {
							if (w[vvvv] == nnnn[vvvvv].pvp) {
								nn2.push(nnnn[vvvvv])
								if (cand_evs[vvvvv] != null)
									nn3.push(cand_evs[vvvvv])
								else
									nn3.push(0)
							}
						}
					}

					nnn = ""

					for (zzz = 0; zzz < nn2.length; zzz++) {
						vv += "<b>"+nn2[zzz].fields.last_name+"</b> - "+(nn2[zzz].pvp*100).toFixed(1)+"%<br>"
						if (nn3[zzz] > 0) {
							nnn += "<b>"+nn2[zzz].fields.last_name+"</b> - "+nn3[zzz]+"<br>"
						}
					}

					rrr = vv
					evestt = 0

	                for (var s = 0; s < e.states_json.length; s++)
	                    if (e.states_json[s].fields.abbr == a.name) {
	                        for (var n = [], l = 0; l < t.length; l++)
	                            if (t[l].abbr == e.states_json[s].fields.abbr)
	                                for (var o = 0; o < t[l].result.length; o++) t[l].result[o].percent >= .1 && n.push({
	                                    candidate: t[l].result[o].candidate,
	                                    percent: t[l].result[o].percent
	                                });
	                        P(n, "percent"), n.reverse();
	                        var _ = "";
	                        for (l = 0; l < n.length; l++) {
	                            var r = "",
	                                d = Math.floor(100 * n[l].percent) + "%";
	                            for (o = 0; o < e.candidate_json.length; o++)
	                                if (e.candidate_json[o].pk == n[l].candidate) {
	                                    r = e.candidate_json[o].fields.last_name;
	                                    break
	                                } _ += "<b>" + r + "</b> - " + d + "<br>"
	                        }
	                        slrr = _
	                        var c = "<h3>ESTIMATED SUPPORT</h3>                    <ul id='switchingEst'>" + _ + "</ul>                    <button id='pvswitcher' onclick='switchPV()'>Switch to Popular Vote Estimate</button><button onclick='evest()' id='ev_est'>Electoral Vote Estimate</button>";
	                        $("#overall_result").html(c);
	                        var u = "";
	                        for (l = 0; l < e.state_issue_score_json.length; l++)
	                            if (e.state_issue_score_json[l].fields.state == e.states_json[s].pk)
	                                for (o = 0; o < e.issues_json.length; o++)
	                                    if (e.issues_json[o].pk == e.state_issue_score_json[l].fields.issue) {
	                                        if (e.state_issue_score_json[l].fields.state_issue_score <= e.global_parameter_json[0].fields.issue_stance_1_max) var v = e.issues_json[o].fields.stance_1;
	                                        else if (e.state_issue_score_json[l].fields.state_issue_score <= e.global_parameter_json[0].fields.issue_stance_2_max) v = e.issues_json[o].fields.stance_2;
	                                        else if (e.state_issue_score_json[l].fields.state_issue_score <= e.global_parameter_json[0].fields.issue_stance_3_max) v = e.issues_json[o].fields.stance_3;
	                                        else if (e.state_issue_score_json[l].fields.state_issue_score <= e.global_parameter_json[0].fields.issue_stance_4_max) v = e.issues_json[o].fields.stance_4;
	                                        else if (e.state_issue_score_json[l].fields.state_issue_score <= e.global_parameter_json[0].fields.issue_stance_5_max) v = e.issues_json[o].fields.stance_5;
	                                        else if (e.state_issue_score_json[l].fields.state_issue_score <= e.global_parameter_json[0].fields.issue_stance_6_max) v = e.issues_json[o].fields.stance_6;
	                                        else if (e.state_issue_score_json[l].fields.state_issue_score > e.global_parameter_json[0].fields.issue_stance_6_max) v = e.issues_json[o].fields.stance_7;
	                                        u += "<li>" + e.issues_json[o].fields.name + " -- " + v + "</li>"
	                                    } var f = "                    <h3>STATE SUMMARY</h3>                    <p>" + e.states_json[s].fields.name + "</p>                    <ul>" + u + "</ul>                    <p>Electoral Votes: " + e.states_json[s].fields.electoral_votes + "</p>"+"                    <p>Popular Votes: " + e.states_json[s].fields.popular_votes.toLocaleString() + "</p>";
	                        $("#state_info").html(f);
	                        break
	                    }
	            },
	            u = S(e.election_id);
	        if (0 == i) var v = {
	            stateStyles: {
	                fill: "#EAFDFF"
	            },
	            stateHoverStyles: {
	                fill: "#EAFDFF"
	            },
	            stateSpecificStyles: a,
	            stateSpecificHoverStyles: a,
	            click: c,
	            mouseover: c
	        };
	        if (1 == i) v = {
	            stateStyles: {
	                fill: "#EAFDFF"
	            },
	            stateHoverStyles: {
	                fill: "#EAFDFF"
	            },
	            stateSpecificStyles: a,
	            stateSpecificHoverStyles: a,
	            click: function(i, a) {
	                for (var s = 0; s < e.states_json.length; s++)
	                    if (e.states_json[s].fields.abbr == a.name) {
	                        var n = '                    <div class="overlay" id="visit_overlay"></div>    \t            <div class="overlay_window" id="visit_window">                    \t<div class="overlay_window_content" id="visit_content">                    \t<h3>Advisor Feedback</h3>                    \t<img src="' + e.election_json[u].fields.advisor_url + '" width="208" height="128"/>                    \t<p>You have chosen to visit ' + e.states_json[s].fields.name + ' -- is this correct?</p>                \t    </div>                    \t<div class="overlay_buttons" id="visit_buttons">                    \t<button id="confirm_visit_button">YES</button><br>                    \t<button id="no_visit_button">NO</button>                    \t</div>                \t</div>';
	                        $("#game_window").append(n), $("#confirm_visit_button").click(function() {
	                            e.player_visits.push(e.states_json[s].pk), o(t)
	                        }), $("#no_visit_button").click(function() {
	                            $("#visit_overlay").remove(), $("#visit_window").remove()
	                        });
	                        break
	                    }
	            },
	            mouseover: c
	        };
	        return v
	    }

	    function d() {
	        ! function() {
	            for (var t = u(), i = "", a = 0; a < t.length; a++) i += '            <li><span style="color:' + t[a].color + "; background-color: " + t[a].color + '">--</span> ' + t[a].last_name + ":  0</li>";
	            var s = S(e.election_id),
	                n = e.election_json[s].fields.winning_electoral_vote_number;
	            $("#game_window").html('        <div class="game_header">            <h2>NEW CAMPAIGN TRAIL</h2>        </div>        <div id="main_content_area">            <div id="map_container"></div>            <div id="menu_container">                <div id="overall_result_container">                    <div id="overall_result">                        <h3>ELECTORAL VOTES</h3>                        <ul>' + i + "</ul>                        <p>0% complete</br>" + n + ' to win</p>                    </div>                </div>                <div id="state_result_container">                    <div id="state_result">                        <h3>STATE RESULTS</h3>                        <p>Click on a state to view detailed results (once returns for that state arrive).</p>                    </div>                </div>            </div>        </div>        <div id="map_footer">        <button id="final_result_button">Go to Final Results</button>        </div>        <div class="overlay" id="election_night_overlay"></div>        <div class="overlay_window" id="election_night_window">            <div class="overlay_window_content" id="election_night_content">            <h3>Advisor Feedback</h3>            <img src="' + e.election_json[s].fields.advisor_url + '" width="208" height="128"/>            <p>Election night has arrived. Settle in and wait for the returns, however                 long it may take. Best of luck!</p>            </div>            <div class="overlay_buttons" id="election_night_buttons">            <button id="ok_button">OK</button><br>            </div>        </div>');
	            var l = function() {
	                for (var t = {}, i = 0; i < e.states_json.length; i++) t[e.states_json[i].fields.abbr] = {
	                    fill: "#C9C9C9"
	                };
	                return {
	                    stateStyles: {
	                        fill: "#EAFDFF"
	                    },
	                    stateHoverStyles: {
	                        fill: "#EAFDFF"
	                    },
	                    stateSpecificStyles: t,
	                    stateSpecificHoverStyles: t
	                }
	            }();
	            $("#map_container").usmap(l), $("#ok_button").click(function() {
	                $("#election_night_overlay").remove(), $("#election_night_window").remove()
	            }), $("#final_result_button").click(function() {
	                clearTimeout(results_timeout), $("#map_footer").html("<i>Processing Results, wait one moment...</i>");
	                //HELPFUL CODE HERE
	                //campaignTrail_temp.question_number = 0
	                //ee = A(return_type=2)
	            	//o(ee)
	                v(500);
	                m()
	            })
	        }();
	        e.final_overall_results = [];
	        for (var t = 0; t < e.final_state_results[0].result.length; t++) e.final_overall_results.push({
	            candidate: e.final_state_results[0].result[t].candidate,
	            electoral_votes: 0,
	            popular_votes: 0
	        });
	        ! function() {
	            for (var t = 0; t < e.final_state_results.length; t++) {
	                var i = R(e.final_state_results[t].state),
	                    a = c(e.final_state_results[t].result, e.states_json[i].fields.poll_closing_time);
	                e.final_state_results[t].result_time = a
	            }
	        }(), $("#ok_button").click(function() {
	            results_timeout = setTimeout(function() {
	                ! function t(i, a) {
	                    var s = [0, 0];
	                    for (var n = 0; n < e.final_overall_results.length; n++) e.final_overall_results[n].electoral_votes > s[0] && (s[0] = e.final_overall_results[n].electoral_votes);
	                	total_votes = 0
	                	for (iterator = 0; iterator < e.final_overall_results.length; iterator++) {
	                		total_votes += e.final_overall_results[iterator].popular_votes
	                	}
	                	pop_vs = []
	                	for (iterator = 0; iterator < e.final_overall_results.length; iterator++) {
	                		if (e.final_overall_results[iterator].popular_votes/total_votes > 0)
	                			pop_vs.push(e.final_overall_results[iterator].popular_votes/total_votes)
	                		else {
	                			pop_vs.push(0)
	                		}
	                	}
	                    var a = v(i);
	                    var l = S(e.election_id);
	                    var o = e.election_json[l].fields.winning_electoral_vote_number;
	                    var _ = u();
	                    var r = "";
	                    for (var n = 0; n < _.length; n++) {
	                        for (var d = 0; d < e.final_overall_results.length; d++)
	                            if (e.final_overall_results[d].candidate == _[n].candidate) { 
	                            	var c = e.final_overall_results[d].electoral_votes;
	                            	var popvthing = (pop_vs[d]*100).toFixed(1)
	                            }
	                        r += '            <span style="color:' + _[n].color + "; background-color: " + _[n].color + '">--</span> <b>' + _[n].last_name + "</b> -  " + c + " / " + popvthing  + "%<br>"
	                    }
	                    var p = f(i);
	                    var h = Math.floor(i / 480 * 100);
	                    var g = $("#state_result_container").html();
	                    $("#game_window").html("");
	                    $("#game_window").html('        <div class="game_header">            <h2>NEW CAMPAIGN TRAIL</h2>        </div>        <div id="main_content_area">            <div id="map_container"></div>            <div id="menu_container">                <div id="overall_result_container">                    <div id="overall_result">                        <h3>ELECTION TALLY</h3>                        <ul>' + r + "</ul>                        <p>" + h + "% complete</br>" + o + ' to win</p>                    </div>                </div>                <div id="state_result_container">' + g + '</div>            </div>        </div>        <div id="map_footer">        <button id="final_result_button">Go to Final Results</button>        </div>');
	                    $("#map_container").usmap(p);
	                    $("#final_result_button").click(function() {
	                        clearTimeout(results_timeout), $("#map_footer").html("<i>Processing Results, wait one moment...</i>");
	                        v(500);
	                        m()
	                    });
	                    for (var n = 0; n < e.final_overall_results.length; n++) e.final_overall_results[n].electoral_votes > s[1] && (s[1] = e.final_overall_results[n].electoral_votes);
	                    if (s[0] < o && s[1] >= o) {
	                        if (e.final_overall_results[0].candidate == e.candidate_id) var b = "Congratulations! You won this year's election! Click OK to view the                     rest of the returns, or skip straight to the final results. We hope                     you have a nice victory speech prepared for your supporters.";
	                        else if (e.final_overall_results[0].candidate != e.candidate_id) var b = "Sorry. You have lost the election this time. Click OK to view the                     rest of the returns, or skip straight to the final results. We hope                     you have a nice concession speech prepared.";
	                        $("#game_window").append('            <div class="overlay" id="election_night_overlay"></div>            <div class="overlay_window" id="election_night_window">                <div class="overlay_window_content" id="election_night_content">                <h3>Advisor Feedback</h3>                <img src="' + e.election_json[l].fields.advisor_url + '" width="208" height="128"/><p>' + b + '</p></div>                <div class="overlay_buttons" id="winner_buttons">                <button id="ok_button">OK</button><br>                <button id="overlay_result_button">Go to Final Results</button>                </div>            </div>'), $("#ok_button").click(function() {
	                            $("#election_night_overlay").remove(), $("#election_night_window").remove(), results_timeout = setTimeout(function() {
	                                t(i, a)
	                            }, 2e3)
	                        }), $("#overlay_result_button").click(function() {
	                            $("#election_night_overlay").remove(), $("#election_night_window").remove(), clearTimeout(results_timeout), $("#map_footer").html("<i>Processing Results, wait one moment...</i>");
	                            v(500);
	                            m()
	                        })
	                    } else i >= 480 || a >= e.states_json.length ? (h = 100, $("#overall_result").html("            <h3>ELECTION TALLY</h3>            <ul>" + r + "</ul>            <p>" + h + "% complete</br>" + o + " to win</p>")) : results_timeout = setTimeout(function() {
	                        t(i, a)
	                    }, 2e3);
	                    i += 10
	                }(0, 0)
	            }, 2e3)
	        })
	    }

	    function c(e, t) {
	        P(e, "votes"), e.reverse();
	        var i = (e[0].votes - e[1].votes) / (e[0].votes + e[1].votes);
	        return i < .0025 ? 480 : i < .005 ? 460 : i < .01 ? t > 200 ? 440 : t + 240 : i < .015 ? t > 260 ? 440 : t + 180 : i < .03 ? t > 270 ? 420 : t + 150 : i < .045 ? t > 300 ? 420 : t + 120 : i < .066 ? t > 330 ? 420 : t + 90 : i < .085 ? t > 340 ? 420 : t + 80 : i < .1 ? t > 350 ? 420 : t + 70 : i < .12 ? t > 360 ? 420 : t + 60 : i < .14 ? t > 370 ? 420 : t + 50 : i < .16 ? t > 380 ? 420 : t + 40 : i < .18 ? t > 390 ? 420 : t + 30 : i < .2 ? t > 400 ? 420 : t + 20 : i < .25 ? t > 410 ? 420 : t + 10 : t
	    }

	    function u() {
	        var t = [],
	            i = E(e.candidate_id);
	        t.push({
	            candidate: e.candidate_id,
	            priority: e.candidate_json[i].fields.priority,
	            color: e.candidate_json[i].fields.color_hex,
	            last_name: e.candidate_json[i].fields.last_name
	        });
	        for (var a = 0; a < e.opponents_list.length; a++) i = E(e.opponents_list[a]), t.push({
	            candidate: e.opponents_list[a],
	            priority: e.candidate_json[i].fields.priority,
	            color: e.candidate_json[i].fields.color_hex,
	            last_name: e.candidate_json[i].fields.last_name
	        });
	        return P(t, "priority"), t
	    }

	    function v(t) {
	        for (var i = 0, a = 0; a < e.final_overall_results.length; a++) e.final_overall_results[a].popular_votes = 0, e.final_overall_results[a].electoral_votes = 0;
	        for (a = 0; a < e.final_state_results.length; a++)
	            if (e.final_state_results[a].result_time <= t) {
	                i++;
	                for (var s = 0; s < e.final_state_results[a].result.length; s++)
	                    for (var n = 0; n < e.final_overall_results.length; n++) e.final_overall_results[n].candidate == e.final_state_results[a].result[s].candidate && (e.final_overall_results[n].popular_votes += e.final_state_results[a].result[s].votes, e.final_overall_results[n].electoral_votes += e.final_state_results[a].result[s].electoral_votes)
	            } var l = [];
	        for (a = 0; a < e.final_overall_results.length; a++) {
	            var o = [];
	            for (s = 0; s < e.final_overall_results.length; s++) {
	                var _ = 1;
	                for (n = 0; n < l.length; n++) l[n].candidate == e.final_overall_results[s].candidate && (_ = 0);
	                1 == _ && o.push(e.final_overall_results[s])
	            }
	            var r = 0,
	                d = 0;
	            for (s = 0; s < o.length; s++)
	                if (o[s].electoral_votes > d || o[s].electoral_votes == d && o[s].popular_votes >= r) {
	                    d = o[s].electoral_votes, r = o[s].popular_votes;
	                    var c = s
	                } l.push(o[c])
	        }
	        return e.final_overall_results = l, i
	    }

	    function f(t) {
	        for (var i = {}, a = 0; a < e.final_state_results.length; a++) {
	            var s = E(e.final_state_results[a].result[0].candidate);
	            e.final_state_results[a].result_time <= t ? i[e.final_state_results[a].abbr] = {
	                fill: e.candidate_json[s].fields.color_hex
	            } : i[e.final_state_results[a].abbr] = {
	                fill: "#C9C9C9"
	            }
	        }
	        return {
	            stateStyles: {
	                fill: "#EAFDFF"
	            },
	            stateHoverStyles: {
	                fill: "#EAFDFF"
	            },
	            stateSpecificStyles: i,
	            stateSpecificHoverStyles: i,
	            click: function(i, a) {
	                for (var s = 0; s < e.final_state_results.length; s++)
	                    if (e.final_state_results[s].abbr == a.name) {
	                        if (e.final_state_results[s].result_time > t) {
	                            var n = "                        <h3>STATE RESULTS</h3>                        <p>Returns for this state are not yet available!</p>";
	                            $("#state_result").html(n)
	                        } else {
	                            for (var l = 0; l < e.states_json.length; l++)
	                                if (e.states_json[l].fields.abbr == a.name) {
	                                    var o = l;
	                                    break
	                                } var _ = "";
	                            for (l = 0; l < Math.min(e.final_state_results[s].result.length, 4); l++)
	                                if (e.final_state_results[s].result[l].votes > 0) {
	                                    var r = E(e.final_state_results[s].result[l].candidate);
	                                    _ += '                                <li><span style="color:' + e.candidate_json[r].fields.color_hex + "; background-color: " + e.candidate_json[r].fields.color_hex + '">--</span> ' + e.candidate_json[r].fields.last_name + ":  " + (100 * e.final_state_results[s].result[l].percent).toFixed(1) + "%</li>"
	                                } n = "                        <h3>STATE RESULTS</h3>                        <p>" + e.states_json[o].fields.name + "</p>                        <p>Electoral Votes: " + e.states_json[o].fields.electoral_votes + "<ul>" + _ + "</ul>                        </p>", $("#state_result").html(n)
	                        }
	                        break
	                    }
	            }
	        }
	    }

	    function m() {
	        for (var t = JSON.stringify({
	                election_id: e.election_id,
	                candidate_id: e.candidate_id,
	                running_mate_id: e.running_mate_id,
	                difficulty_level_id: e.difficulty_level_id,
	                game_start_logging_id: e.game_start_logging_id,
	                game_type_id: e.game_type_id
	            }), i = [], a = 0; a < e.opponents_list.length; a++) i.push({
	            candidate_id: e.opponents_list[a]
	        });
	        i = JSON.stringify(i);
	        var s = [];
	        for (a = 0; a < e.player_answers.length; a++) s.push({
	            answer_id: e.player_answers[a]
	        });
	        s = JSON.stringify(s);
	        var n = [],
	            l = S(e.election_id),
	            o = e.election_json[l].fields.winning_electoral_vote_number;
	        for (a = 0; a < e.final_overall_results.length; a++) n.push({
	            candidate_id: e.final_overall_results[a].candidate,
	            electoral_votes: e.final_overall_results[a].electoral_votes,
	            popular_votes: e.final_overall_results[a].popular_votes,
	            player_candidate_flg: e.candidate_id == e.final_overall_results[a].candidate,
	            winning_candidate_flg: e.final_overall_results[a].electoral_votes >= o
	        });
	        n = JSON.stringify(n);
	        var _ = [];
	        for (a = 0; a < e.final_state_results.length; a++)
	            for (var r = 0; r < e.final_state_results[a].result.length; r++) _.push({
	                state_id: e.final_state_results[a].state,
	                candidate_id: e.final_state_results[a].result[r].candidate,
	                electoral_votes: e.final_state_results[a].result[r].electoral_votes,
	                popular_votes: e.final_state_results[a].result[r].votes,
	                player_candidate_flg: e.candidate_id == e.final_state_results[a].result[r].candidate,
	                winning_candidate_flg: 0 == r
	            });
	        _ = JSON.stringify(_);
	        var d = [];
	        for (temp_visit_counter = {}, a = 0; a < e.player_visits.length; ++a) temp_visit_counter[e.player_visits[a]] || (temp_visit_counter[e.player_visits[a]] = 0), temp_visit_counter[e.player_visits[a]] += 1;
	        for (a = 0; a < Object.keys(temp_visit_counter).length; a++) d.push({
	            candidate_id: e.candidate_id,
	            state_id: +Object.keys(temp_visit_counter)[a],
	            visit_count: temp_visit_counter[Object.keys(temp_visit_counter)[a]]
	        });
	        d = JSON.stringify(d);
	        var c = csrfToken();
	        $.ajax({
	            type: "POST",
	            url: "/campaign-trail/save-game-results/",
	            beforeSend: function(e) {
	                e.setRequestHeader("X-CSRFToken", c)
	            },
	            data: {
	                campaign_trail_game: t,
	                campaign_trail_game_opponent: i,
	                campaign_trail_game_answer: s,
	                campaign_trail_game_result: n,
	                campaign_trail_state_result: _,
	                campaign_trail_visit_counter: d
	            },
	            dataType: "text",
	            success: function(t) {
	                $("#game_window").append(t), e.historical_overall = campaignTrail_temp.historical_overall, e.percentile = campaignTrail_temp.percentile, e.game_results_url = campaignTrail_temp.game_results_url, p()
	            },
	            error: function(t) {
	                e.historical_overall = "None", e.percentile = "None", e.game_results_url = "None", p()
	            }
	        })
	    }

	    function p() {
	        var t = S(e.election_id),
	            i = E(e.candidate_id),
	            a = e.election_json[t].fields.winning_electoral_vote_number;
	        if (e.final_overall_results[0].candidate == e.candidate_id && e.final_overall_results[0].electoral_votes >= a) {
	            var s = e.candidate_json[i].fields.electoral_victory_message;
	            e.final_outcome = "win"
	        } else if (e.final_overall_results[0].candidate != e.candidate_id && e.final_overall_results[0].electoral_votes >= a) {
	            s = e.candidate_json[i].fields.electoral_loss_message;
	            e.final_outcome = "loss"
	        } else if (e.final_overall_results[0].electoral_votes < a) {
	            s = e.candidate_json[i].fields.no_electoral_majority_message;
	            e.final_outcome = "tie"
	        }
	        var n = E(e.final_overall_results[0].candidate);
	        if (e.final_overall_results[0].electoral_votes >= a) var l = e.candidate_json[n].fields.image_url;
	        else l = e.election_json[t].fields.no_electoral_majority_image;
	        for (var o = 0, _ = 0; _ < e.final_overall_results.length; _++) o += e.final_overall_results[_].popular_votes;
	        var r = "";

	    	if (important_info.indexOf("<html>") == -1 && important_info != "") {
				campaignTrail_temp.multiple_endings = true
			}

	    	if (campaignTrail_temp.multiple_endings) {

	    		n = 0
	    		for (i = 0; i < e.final_overall_results.length; i++) {
	    			if (e.final_overall_results[i].candidate == e.candidate_id){
	    				n = i;
	    				break
	    			}
	    		}
	    		quickstats = [e.final_overall_results[n].electoral_votes, e.final_overall_results[n].popular_votes / o * 100, e.final_overall_results[n].popular_votes] //format: electoral vote count, popular vote proportion, popular vote vote count
	        	a = endingPicker(e.final_outcome, o, e.final_overall_results, quickstats)
	        	if (a != false) {
	        		s = a
	        	}
	        
	        }

	        if (campaignTrail_temp.iamapoopybuttfaceandhavenolife) {
	        	setInterval(function(){
	        		try {
	        			document.getElementsByClassName("person_image")[0].style.aspectRatio=1.3
	        			document.getElementsByClassName("person_image")[0].style.filter="hue-rotate(180deg)"
	        		} catch {
	        			console.log("you are *such* a sussy baka")
	        		}
	        	}, 100);
	        }

	        aaaaaaaa = 0
	        if (Number((starting_mult - encrypted).toFixed(2)) != campaignTrail_temp.difficulty_level_multiplier.toFixed(2)) {
	        	aaaaaaaa = "Cheated difficulty"
	        } else {
	        	aaaaaaaa = campaignTrail_temp.difficulty_level_multiplier.toFixed(1)
	        }

	        rrrrr = "<div id='difficulty_mult'><br><b>Difficulty Multiplier:</b> "+aaaaaaaa+"</div><br>"

	        for (_ = 0; _ < e.final_overall_results.length; _++) {
	            i = E(e.final_overall_results[_].candidate);
	            var d = e.candidate_json[i].fields.color_hex;
	            r += '            <tr><td style="text-align: left;">            <span style="background-color: ' + d + "; color: " + d + ';">----</span> ' + (f = e.candidate_json[i].fields.first_name + " " + e.candidate_json[i].fields.last_name) + "</td><td> " + e.final_overall_results[_].electoral_votes + " </td><td> " + M(e.final_overall_results[_].popular_votes) + " </td><td> " + (e.final_overall_results[_].popular_votes / o * 100).toFixed(1) + "% </td></tr>"
	        }
	        if ("None" != e.game_results_url) var c = '<h4>Final Results: <a target="_blank" href="' + e.game_results_url + '">Game Link</a> (use link to view this result on its own page)</h4>';
	        else c = "";
	        var u = '        <div class="game_header">            <h2>NEW CAMPAIGN TRAIL</h2>        </div>        <div id="main_content_area">            <div id="results_container">                <img class="person_image" src="' + l + '"/>            <div id="final_results_description">' + s + '</div>'+rrrrr+'             <div id="overall_vote_statistics">' + c + '<table class="final_results_table">     <br>       <tr><th>Candidate</th><th>Electoral Votes</th>            <th>Popular Votes</th><th>Popular Vote %</th></tr>' + r + '</table>            </div>        </div>        </div>        <div id="map_footer">            <button class="final_menu_button" id="overall_results_button" disabled="disabled">                Final Election Results            </button>            <button class="final_menu_button" id="final_election_map_button">                Election Map            </button>            <button class="final_menu_button" id="state_results_button">                Results by State            </button>            <button class="final_menu_button" id="overall_details_button">                Overall Results Details            </button>              <button class="final_menu_button" id="play_again_button">                Play Again!            </button>        </div>';
	        $("#game_window").html(u);
	        prev = document.getElementById("difficulty_mult").innerHTML
			vvvv = setInterval(function(){
			    if (document.getElementById("difficulty_mult") != null) {
			        if (document.getElementById("difficulty_mult").innerHTML != prev) {
			        	location.reload()
			        	clearInterval(vvvv)
			        	document.body.innerHTML=""
			        }
			    }
			},100)
	        t = S(e.election_id), i = E(e.candidate_id);
	        var v = e.election_json[t].fields.year,
	            f = e.candidate_json[i].fields.first_name + " " + e.candidate_json[i].fields.last_name,
	            m = e.candidate_json[i].fields.description;
	        if (m = m.replace("</p><p>", " ").replace("<p>", "").replace("</p>", "").replace("<em>", "").replace("</em>", ""), "win" == e.final_outcome) var p = "I won the " + v + " election as " + f + ". How would you do?";
	        else if ("loss" == e.final_outcome) p = "I lost the " + v + " election as " + f + ". How would you do?";
	        else if ("tie" == e.final_outcome) p = "I deadlocked the " + v + " Electoral College as " + f + ". How would you do?";
	        $("#fb_share_button").click(function() {
	            FB.ui({
	                display: "popup",
	                method: "feed",
	                link: "https://www.americanhistoryusa.com" + e.game_results_url,
	                picture: "https://www.americanhistoryusa.com" + e.candidate_image_url,
	                name: p,
	                description: "Click to see the Electoral College map from my game, and then try it yourself!"
	            }, function(e) {})
	        }), $("#final_election_map_button").click(function() {
	            h()
	        }), $("#state_results_button").click(function() {
	            g()
	        }), $("#overall_details_button").click(function() {
	            b()
	        }), $("#recommended_reading_button").click(function() {
	            w()
	        }), $("#play_again_button").click(function() {
	            y()
	        })
	    }

	    function h() {
	        for (var t = f(500), i = u(), a = "", s = 0; s < i.length; s++) {
	            for (var n = 0; n < e.final_overall_results.length; n++)
	                if (e.final_overall_results[n].candidate == i[s].candidate) var l = e.final_overall_results[n].electoral_votes;
	            a += '            <li><span style="color:' + i[s].color + "; background-color: " + i[s].color + '">--</span> ' + i[s].last_name + ":  " + l + "</li>"
	        }
	        var o = S(e.election_id),
	            _ = '        <div class="game_header">            <h2>NEW CAMPAIGN TRAIL</h2>        </div>        <div id="main_content_area">          <div id="map_container"></div>            <div id="menu_container">                <div id="overall_result_container">                    <div id="overall_result">                        <h3>ELECTORAL VOTES</h3>                        <ul>' + a + "</ul><p>" + e.election_json[o].fields.winning_electoral_vote_number + ' to win</p>                    </div>                </div>                <div id="state_result_container">                    <div id="state_result">                    <h3>STATE RESULTS</h3>                    <p>Click on a state to view final results.</p>                    </div>                </div>            </div>        </div>        <div id="map_footer">            <button class="final_menu_button" id="overall_results_button">                Final Election Results            </button>            <button class="final_menu_button" id="final_election_map_button" disabled="disabled">                Election Map            </button>            <button class="final_menu_button" id="state_results_button">                Results by State            </button>            <button class="final_menu_button" id="overall_details_button">                Overall Results Details            </button>                        <button class="final_menu_button" id="play_again_button">                Play Again!            </button>        </div>';
	        $("#game_window").html(_), $("#map_container").usmap(t), $("#overall_results_button").click(function() {
	            p()
	        }), $("#state_results_button").click(function() {
	            g()
	        }), $("#overall_details_button").click(function() {
	            b()
	        }), $("#recommended_reading_button").click(function() {
	            w()
	        }), $("#play_again_button").click(function() {
	            y()
	        })
	    }

	    function g() {
	        for (var t = [], i = [], a = [], s = 0; s < e.final_state_results.length; s++) {
	            var n = R(e.final_state_results[s].state);
	            t.push({
	                state: e.states_json[n].pk,
	                name: e.states_json[n].fields.name
	            }), i.push({
	                state: e.states_json[n].pk,
	                name: e.states_json[n].fields.name,
	                electoral_votes: e.states_json[n].fields.electoral_votes
	            }), a.push({
	                state: e.states_json[n].pk,
	                name: e.states_json[n].fields.name,
	                pct_margin: e.final_state_results[s].result[0].percent - e.final_state_results[s].result[1].percent
	            })
	        }
	        P(t, "name"), P(i, "electoral_votes"), i.reverse(), P(a, "pct_margin");
	        var l = [],
	            o = [];
	        for (s = 0; s < e.final_overall_results.length; s++) {
	            for (var _ = e.final_overall_results[s].candidate, r = E(_), d = [], c = [], u = 0; u < e.final_state_results.length; u++) {
	                if (e.final_state_results[u].result[0].candidate == _) {
	                    var v = e.final_state_results[u].result[0].percent - e.final_state_results[u].result[1].percent;
	                    n = R(e.final_state_results[u].state);
	                    d.push({
	                        state: e.final_state_results[u].state,
	                        name: e.states_json[n].fields.name,
	                        pct_margin: v
	                    })
	                }
	                for (var f = 0; f < e.final_state_results[u].result.length; f++)
	                    if (e.final_state_results[u].result[f].candidate == _) {
	                        n = R(e.final_state_results[u].state);
	                        c.push({
	                            state: e.final_state_results[u].state,
	                            name: e.states_json[n].fields.name,
	                            vote_pct: e.final_state_results[u].result[f].percent
	                        })
	                    }
	            }
	            P(d, "pct_margin"), l.push({
	                candidate: _,
	                last_name: e.candidate_json[r].fields.last_name,
	                values: d
	            }), P(c, "vote_pct"), c.reverse(), o.push({
	                candidate: _,
	                last_name: e.candidate_json[r].fields.last_name,
	                values: c
	            })
	        }
	        var m = "";
	        for (s = 0; s < l.length; s++) l[s].values.length > 0 && (m += '<option value="' + (10 + s) + '">Closest ' + l[s].last_name + " Wins</option>");
	        var g = "";
	        for (s = 0; s < o.length; s++) g += '<option value="' + (20 + s) + '">Highest ' + o[s].last_name + " %</option>";
	        var j = '    <div class="game_header">    \t<h2>NEW CAMPAIGN TRAIL</h2>\t</div>\t<div id="main_content_area">\t<div id="results_container">\t\t<h3 class="title_h3">Election Results and Data by State</h3>\t\t<div id="drop_down_area_state">\t\t\t<div id="sort_tab_area">\t\t\t<p>View states by:\t\t\t<select id="sort_tab">\t\t\t<option value="1">Alphabetical</option>\t\t\t<option value="2">Most Electoral Votes</option>\t\t\t<option value="3">Closest States</option>' + m + g + '</select>\t\t\t</p>\t\t\t</div>\t\t\t<div id="state_tab_area">\t\t\t<p>Select a state:\t\t\t<select id="state_tab">' + k(t) + '</select>\t\t\t</p>\t\t\t</div>\t\t</div>\t\t<div id="state_result_data_summary">' + T(t[0].state) + '</div>\t</div>\t<div id="results_container_description">\t</div>\t</div>\t<div id="map_footer">\t\t<button class="final_menu_button" id="overall_results_button">Final Election Results</button>\t\t<button class="final_menu_button" id="final_election_map_button">Election Map</button>\t\t<button class="final_menu_button" id="state_results_button" disabled="disabled">Results by State</button>\t\t<button class="final_menu_button" id="overall_details_button">Overall Results Details</button>\t\t<button class="final_menu_button" id="play_again_button">Play Again!</button>\t</div>';
	        $("#game_window").html(j), $("#sort_tab").change(function() {
	            if (1 == sort_tab.value) var e = k(t);
	            else if (2 == sort_tab.value) e = k(i);
	            else if (3 == sort_tab.value) e = k(a);
	            else if (sort_tab.value >= 10 && sort_tab.value <= 19) {
	                var s = sort_tab.value - 10;
	                e = k(l[s].values)
	            } else s = sort_tab.value - 20, e = k(o[s].values);
	            $("#state_tab").html(e);
	            var n = T(state_tab.value);
	            $("#state_result_data_summary").html(n)
	        }), $("#state_tab").change(function() {
	            var e = T(state_tab.value);
	            $("#state_result_data_summary").html(e)
	        }), $("#overall_results_button").click(function() {
	            p()
	        }), $("#final_election_map_button").click(function() {
	            h()
	        }), $("#overall_details_button").click(function() {
	            b()
	        }), $("#recommended_reading_button").click(function() {
	            w()
	        }), $("#play_again_button").click(function() {
	            y()
	        })
	    }

	    function b() {
	        S(e.election_id);
	        for (var t = 0, i = 0; i < e.final_overall_results.length; i++) t += e.final_overall_results[i].popular_votes;
	        var a = "";
	        for (i = 0; i < e.final_overall_results.length; i++) {
	            var s = E(e.final_overall_results[i].candidate),
	                n = e.candidate_json[s].fields.color_hex;
	            a += '            <tr><td style="text-align: left;">            <span style="background-color: ' + n + "; color: " + n + ';">----</span> ' + (e.candidate_json[s].fields.first_name + " " + e.candidate_json[s].fields.last_name) + "</td><td> " + e.final_overall_results[i].electoral_votes + " </td><td> " + M(e.final_overall_results[i].popular_votes) + " </td><td> " + (e.final_overall_results[i].popular_votes / t * 100).toFixed(1) + "% </td></tr>"
	        }
	        if ("None" != e.percentile) var l = "<p>You have done better than approximately <strong>" + e.percentile + "%</strong> of the games that have been played with your candidate and difficulty level.</p>";
	        else l = "";
	        if ("None" != e.historical_overall) {
	            var o = "";
	            for (i = 0; i < e.historical_overall.length; i++) o += '<tr><td style="text-align: left;">                <span style="background-color: ' + e.historical_overall[i].color_hex + "; color: " + e.historical_overall[i].color_hex + ';">----</span>' + e.historical_overall[i].name + "</td><td>" + e.historical_overall[i].winning_pct.toFixed(2) + "</td><td>" + e.historical_overall[i].electoral_votes_avg.toFixed(1) + "</td><td>" + M(e.historical_overall[i].popular_votes_avg) + "</td><td>" + e.historical_overall[i].popular_vote_pct_avg.toFixed(2) + "</td><td>" + e.historical_overall[i].electoral_votes_min + " - " + e.historical_overall[i].electoral_votes_max + "</td><td>" + M(e.historical_overall[i].popular_votes_min) + " - " + M(e.historical_overall[i].popular_votes_max) + "</td></tr>";
	            var _ = '<div id="overall_stat_details">            <h4>Historical Results - Your Candidate and Difficulty Level</h4>            <table>            <tr><th>Candidate</th>                <th>Win %</th>                <th>EV Avg.</th>                <th>PV Avg.</th>                <th>PV % Avg.</th>                <th>EV Range</th>                <th>PV Range</th>            </tr>' + o + "</table>            </div>"
	        } else o = "", _ = "";
	        var r = '    <div class="game_header">\t<h2>NEW CAMPAIGN TRAIL</h2>\t</div>\t<div id="main_content_area">\t<div id="overall_details_container">\t\t<h3>Overall Election Details</h3>\t\t<div id="overall_election_details">\t\t<h4>Results - This Game</h4>\t\t<table>\t\t<tr><th>Candidate</th>\t\t<th>Electoral Votes</th>\t\t<th>Popular Votes</th>\t\t<th>Popular Vote %</th>\t\t</tr>' + a + "</table>" + l + "<br><br><button class='final_menu_button' onclick='exportResults()'>Export Results</button></div>" + _ + '</div>\t</div>\t<div id="map_footer">\t\t<button class="final_menu_button" id="overall_results_button">Final Election Results</button>\t\t<button class="final_menu_button" id="final_election_map_button">Election Map</button>\t\t<button class="final_menu_button" id="state_results_button">Results by State</button>\t\t<button class="final_menu_button" id="overall_details_button" disabled="disabled">Overall Results Details</button>\t\t<button class="final_menu_button" id="play_again_button">Play Again!</button>\t</div>';
	        $("#game_window").html(r), $("#overall_results_button").click(function() {
	            p()
	        }), $("#final_election_map_button").click(function() {
	            h()
	        }), $("#state_results_button").click(function() {
	            g()
	        }), $("#recommended_reading_button").click(function() {
	            w()
	        }), $("#play_again_button").click(function() {
	            y()
	        })
	    }

	    function w() {
	        var t = S(e.election_id),
	            i = '        <div class="game_header">            <h2>NEW CAMPAIGN TRAIL</h2>        </div>        <div id="main_content_area_reading">            <h3 class="results_tab_header">Recommended Reading</h3>        <p>Are you interested in exploring the ' + e.election_json[t].fields.year + ' election further?         This page contains some recommended reading to get you up to speed.</p>        <div id="recommended_reading_box">' + e.election_json[t].fields.recommended_reading + '</div>        </div>        <div id="map_footer">                <button class="final_menu_button" id="overall_results_button">                    Final Election Results                </button>                <button class="final_menu_button" id="final_election_map_button">                    Election Map                </button>                <button class="final_menu_button" id="state_results_button">                    Results by State                </button>                <button class="final_menu_button" id="overall_details_button">                    Overall Results Details                </button>                                <button class="final_menu_button" id="play_again_button">                    Play Again!                </button>            </div>';
	        $("#game_window").html(i), $("#overall_results_button").click(function() {
	            p()
	        }), $("#final_election_map_button").click(function() {
	            h()
	        }), $("#state_results_button").click(function() {
	            g()
	        }), $("#overall_details_button").click(function() {
	            b()
	        }), $("#play_again_button").click(function() {
	            y()
	        })
	    }

	    function y() {
	        var t = S(e.election_id);
	        $("#game_window").append('        <div class="overlay" id="new_game_overlay"></div>        <div class="overlay_window" id="new_game_window">            <div class="overlay_window_content" id="election_night_content">            <h3>Advisor Feedback</h3>            <img src="' + e.election_json[t].fields.advisor_url + '" width="208" height="128"/><p>            Are you sure you want to begin a new game?            </p></div>            <div class="overlay_buttons" id="new_game_buttons">            <button id="new_game_button">Yes</button><br>            <button id="cancel_button">No</button>            </div>        </div>'), $("#new_game_button").click(function() {
	            window.location.href = window.location.href
	        }), $("#cancel_button").click(function() {
	            $("#new_game_overlay").remove(), $("#new_game_window").remove()
	        })
	    }

	    function k(e) {
	        for (var t = "", i = 0; i < e.length; i++) t += '<option value="' + e[i].state + '">' + e[i].name + "</option>";
	        return t
	    }

	    function T(t) {
	        for (var i = "        <h4>Results - This Game</h4>        <table>\t    <tr><th>Candidate</th><th>Popular Votes</th>\t    <th>Popular Vote %</th><th>Electoral Votes</th></tr>", a = 0; a < e.final_state_results.length; a++)
	            if (e.final_state_results[a].state == t)
	                for (var s = 0; s < e.final_state_results[a].result.length; s++) {
	                    var n = E(e.final_state_results[a].result[s].candidate);
	                    i += "                    <tr><td>" + (e.candidate_json[n].fields.first_name + " " + e.candidate_json[n].fields.last_name) + "</td><td>" + M(e.final_state_results[a].result[s].votes) + "</td><td>" + (100 * e.final_state_results[a].result[s].percent).toFixed(2) + "</td><td>" + e.final_state_results[a].result[s].electoral_votes + "</td></tr>"
	                }
	        return i += "</table>"
	    }

	    function A(t) {
	        var i = [];
	        i.push(e.candidate_id);
	        for (var a = 0; a < e.opponents_list.length; a++) i.push(e.opponents_list[a]);
	        var s = [];
	        for (a = 0; a < i.length; a++) {
	            for (var n = [], l = 0, o = 0, _ = 0, r = 0; r < e.player_answers.length; r++)
	                for (var d = 0; d < e.answer_score_global_json.length; d++)
	                    if (e.answer_score_global_json[d].fields.answer == e.player_answers[r] && e.answer_score_global_json[d].fields.candidate == e.candidate_id && e.answer_score_global_json[d].fields.affected_candidate == i[a]) {
	                        n.push(e.answer_score_global_json[d].fields.global_multiplier);
	                        break
	                    } for (r = 0; r < n.length; r++) l += n[r];
	            if (o = i[a] == e.candidate_id && l < -.4 ? .6 : 1 + l, i[a] == e.candidate_id) var c = o * (1 + F() * e.global_parameter_json[0].fields.global_variance) * e.difficulty_level_multiplier;
	            else c = o * (1 + F() * e.global_parameter_json[0].fields.global_variance);
	            _ = 1 == isNaN(c) ? 1 : c, s.push({
	                candidate: i[a],
	                global_multiplier: _
	            })
	        }
	        var u = [];
	        for (a = 0; a < i.length; a++) {
	            var v = [];
	            for (r = 0; r < e.candidate_issue_score_json.length && (e.candidate_issue_score_json[r].fields.candidate != i[a] || (v.push({
	                    issue: e.candidate_issue_score_json[r].fields.issue,
	                    issue_score: e.candidate_issue_score_json[r].fields.issue_score
	                }), v.length != e.issues_json.length)); r++);
	            u.push({
	                candidate_id: i[a],
	                issue_scores: v
	            })
	        }
	        var f = [];
	        for (a = 0; a < i.length; a++) {
	            var m = [];
	            for (r = 0; r < e.candidate_state_multiplier_json.length; r++)
	                if (e.candidate_state_multiplier_json[r].fields.candidate == i[a]) {
	                    var p = e.candidate_state_multiplier_json[r].fields.state_multiplier * s[a].global_multiplier * (1 + F() * e.global_parameter_json[0].fields.global_variance);
	                    if (m.push({
	                            state: e.candidate_state_multiplier_json[r].fields.state,
	                            state_multiplier: p
	                        }), m.length == e.states_json.length) break;
	                    P(m, "state")
	                } f.push({
	                candidate_id: i[a],
	                state_multipliers: m
	            })
	        }
	        for (a = 0; a < u[0].issue_scores.length; a++) {
	            var h = -1;
	            for (r = 0; r < e.running_mate_issue_score_json.length; r++)
	                if (e.running_mate_issue_score_json[r].fields.issue == u[0].issue_scores[a].issue) {
	                    h = r;
	                    break
	                } var g = 0,
	                b = 0;
	            for (r = 0; r < e.player_answers.length; r++)
	                for (d = 0; d < e.answer_score_issue_json.length; d++) e.answer_score_issue_json[d].fields.issue == u[0].issue_scores[a].issue && e.answer_score_issue_json[d].fields.answer == e.player_answers[r] && (g += e.answer_score_issue_json[d].fields.issue_score * e.answer_score_issue_json[d].fields.issue_importance, b += e.answer_score_issue_json[d].fields.issue_importance);
	            u[0].issue_scores[a].issue_score = (u[0].issue_scores[a].issue_score * e.global_parameter_json[0].fields.candidate_issue_weight + e.running_mate_issue_score_json[h].fields.issue_score * e.global_parameter_json[0].fields.running_mate_issue_weight + g) / (e.global_parameter_json[0].fields.candidate_issue_weight + e.global_parameter_json[0].fields.running_mate_issue_weight + b)
	        }
	        for (a = 0; a < i.length; a++)
	            for (r = 0; r < f[a].state_multipliers.length; r++) {
	                var w = 0;
	                for (d = 0; d < e.player_answers.length; d++)
	                    for (var j = 0; j < e.answer_score_state_json.length; j++) e.answer_score_state_json[j].fields.state == f[a].state_multipliers[r].state && e.answer_score_state_json[j].fields.answer == e.player_answers[d] && e.answer_score_state_json[j].fields.candidate == e.candidate_id && e.answer_score_state_json[j].fields.affected_candidate == i[a] && (w += e.answer_score_state_json[j].fields.state_multiplier);
	                if (0 == a) {
	                    e.running_mate_state_id == f[a].state_multipliers[r].state && (w += .004 * f[a].state_multipliers[r].state_multiplier);
	                    for (d = 0; d < e.player_visits.length; d++) e.player_visits[d] == f[a].state_multipliers[r].state && (w += .005 * Math.max(.1, f[a].state_multipliers[r].state_multiplier))
	                }
	                f[a].state_multipliers[r].state_multiplier += w
	            }
	        var y = [];
	        for (a = 0; a < f[0].state_multipliers.length; a++) {
	            var k = [];
	            for (r = 0; r < i.length; r++) {
	                var $ = 0;
	                for (d = 0; d < u[r].issue_scores.length; d++) {
	                    var T = 0,
	                        A = 1;
	                    for (j = 0; j < e.state_issue_score_json.length; j++)
	                        if (e.state_issue_score_json[j].fields.state == f[0].state_multipliers[a].state && e.state_issue_score_json[j].fields.issue == u[0].issue_scores[d].issue) {
	                            T = e.state_issue_score_json[j].fields.state_issue_score, A = e.state_issue_score_json[j].fields.weight;
	                            break
	                        } var S = u[r].issue_scores[d].issue_score * Math.abs(u[r].issue_scores[d].issue_score),
	                        E = T * Math.abs(T);
	                    $ += e.global_parameter_json[0].fields.vote_variable - Math.abs((S - E) * A)
	                }
	                for (d = 0; d < f[r].state_multipliers.length; d++)
	                    if (f[r].state_multipliers[d].state == f[0].state_multipliers[a].state) var C = d;
	                $ *= f[r].state_multipliers[C].state_multiplier, $ = Math.max($, 0), k.push({
	                    candidate: i[r],
	                    result: $
	                })
	            }
	            y.push({
	                state: f[0].state_multipliers[a].state,
	                result: k
	            })
	        }
	        for (a = 0; a < y.length; a++)
	            for (r = 0; r < e.states_json.length; r++)
	                if (y[a].state == e.states_json[r].pk) {
	                    y[a].abbr = e.states_json[r].fields.abbr;
	                    break
	                } for (a = 0; a < y.length; a++) {
	            var M = 0;
	            for (r = 0; r < e.states_json.length; r++)
	                if (e.states_json[r].pk == y[a].state) {
	                    M = Math.floor(e.states_json[r].fields.popular_votes * (.95 + .1 * Math.random()));
	                    break
	                } var x = 0;
	            for (r = 0; r < y[a].result.length; r++) x += y[a].result[r].result;
	            for (r = 0; r < y[a].result.length; r++) {
	                var N = y[a].result[r].result / x;
	                y[a].result[r].percent = N, y[a].result[r].votes = Math.floor(N * M)
	            }
	        }
	        for (a = 0; a < y.length; a++) {
	            var I = R(y[a].state),
	                O = 0;
	            if (P(y[a].result, "percent"), y[a].result.reverse(), O = e.states_json[I].fields.electoral_votes, "1" == e.game_type_id)
	                if (1 == e.states_json[I].fields.winner_take_all_flg)
	                    for (r = 0; r < y[a].result.length; r++) y[a].result[r].electoral_votes = 0 == r ? O : 0;
	                else {
	                    O = e.states_json[I].fields.electoral_votes;
	                    var H = 0;
	                    for (r = 0; r < y[a].result.length; r++) H += y[a].result[r].votes;
	                    var L = Math.ceil(y[a].result[0].votes / H * O * 1.25),
	                        D = O - L;
	                    for (r = 0; r < y[a].result.length; r++) y[a].result[r].electoral_votes = 0 == r ? L : 1 == r ? D : 0
	                } if ("2" == e.game_type_id) {
	                var V = [];
	                for (r = 0; r < y[a].result.length; r++) V.push(y[a].result[r].percent);
	                var q = divideElectoralVotesProp(V, O);
	                for (r = 0; r < y[a].result.length; r++) y[a].result[r].electoral_votes = q[r]
	            }
	        }
	        if (1 == t) return y;
	        if (2 == t) {
	            for (a = 0; a < y.length; a++) {
	                for (r = 0; r < y[a].result.length; r++) {
	                    var G = 1 + F() * e.global_parameter_json[0].fields.global_variance;
	                    y[a].result[r].result *= G
	                }
	                for (M = 0, r = 0; r < e.states_json.length; r++)
	                    if (e.states_json[r].pk == y[a].state) {
	                        M = Math.floor(e.states_json[r].fields.popular_votes * (.95 + .1 * Math.random()));
	                        break
	                    } for (x = 0, r = 0; r < y[a].result.length; r++) x += y[a].result[r].result;
	                for (r = 0; r < y[a].result.length; r++) {
	                    N = y[a].result[r].result / x;
	                    y[a].result[r].percent = N, y[a].result[r].votes = Math.floor(N * M)
	                }
	            }
	            return y
	        }
	    }

	    function S(t) {
	        for (var i = -1, a = 0; a < e.election_json.length; a++)
	            if (e.election_json[a].pk == t) {
	                i = a;
	                break
	            } return i
	    }

	    function E(t) {
	        for (var i = -1, a = 0; a < e.candidate_json.length; a++)
	            if (e.candidate_json[a].pk == t) {
	                i = a;
	                break
	            } return i
	    }

	    function R(t) {
	        for (var i = -1, a = 0; a < e.states_json.length; a++)
	            if (e.states_json[a].pk == t) {
	                i = a;
	                break
	            } return i
	    }

	    function C(t) {
	        var i = S(t),
	            a = '    <div class="overlay" id="feedback_overlay"></div>    <div class="overlay_window" id="feedback_window">        <div class="overlay_window_content" id="feedback_content">        <h3>Advisor Feedback</h3>        <img src="' + e.election_json[i].fields.advisor_url + '" width="208" height="128"/>        <p>Please select an answer before continuing!</p>        </div>        <div id="visit_buttons">        <button id="ok_button">OK</button><br>        </div>    </div>';
	        $("#game_window").append(a), $("#ok_button").click(function() {
	            $("#feedback_overlay").remove(), $("#feedback_window").remove()
	        })
	    }

	    function F() {
	        var e, t, i;
	        do {
	            i = (e = 2 * Math.random() - 1) * e + (t = 2 * Math.random() - 1) * t
	        } while (i >= 1 || 0 == i);
	        return e * Math.sqrt(-2 * Math.log(i) / i)
	    }

	    function P(e, t) {
	        return e.sort(function(e, i) {
	            var a = e[t],
	                s = i[t];
	            return a < s ? -1 : a > s ? 1 : 0
	        })
	    }

	    function M(e) {
	        var t = e.toString().split(".");
	        return t[0] = t[0].replace(/\B(?=(\d{3})+(?!\d))/g, ","), t.join(".")
	    }
	    $("#game_start").click(function(a) {
	        a.preventDefault(),
	            function() {
	                for (var a = "", n = 0; n < e.temp_election_list.length; n++) 0 == e.temp_election_list[n].is_premium ? a += "<option value=" + e.temp_election_list[n].id + ">" + e.temp_election_list[n].display_year + "</option>" : 1 == e.show_premium ? a += "<option value=" + e.temp_election_list[n].id + ">" + e.temp_election_list[n].display_year + "</option>" : a += "<option value=" + e.temp_election_list[n].id + " disabled>" + e.temp_election_list[n].display_year + "</option>";
	                var l = '<div class="game_header">            <h2>NEW CAMPAIGN TRAIL</h2>        </div>        <div class="inner_window_w_desc" id="inner_window_2">            <div id="election_year_form">            <form name="election_year">            <p>                <h3>Please select the election you will run in:</h3>    \t\t    <select name="election_id" id="election_id" onChange=creatorChange()>' + a + '</select>            </p>            </form>            <div class="election_description_window" id="election_description_window">                <div id="election_image">                    <img src="' + e.election_json[0].fields.image_url + '" width="300" height="160"/>                </div>                <div id="election_summary">' + e.election_json[0].fields.summary + '</div>            </div>        </div>        <p><button id="election_id_button">Continue</button></p> <p id="creatorPara">This scenario was made by ' + e.credits + '.</p>';
	                $("#game_window").html(l), $("#election_id").change(function() {
	                    for (var t = -1, i = 0; i < e.election_json.length; i++)
	                        if (e.election_json[i].pk == election_id.value) {
	                            t = i;
	                            break
	                        } $("#election_description_window").html('<div id="election_image">            <img src="' + e.election_json[t].fields.image_url + '" width="300" height="160"/>            </div>            <div id="election_summary">' + e.election_json[t].fields.summary + "</div>")
	                }), $("#election_id_button").click(function(a) {
	                    a.preventDefault(),
	                        function(a) {
	                            for (var n = "", l = 0; l < e.candidate_json.length; l++) e.candidate_json[l].fields.election == a && 1 == e.candidate_json[l].fields.is_active && (n += "<option value=" + e.candidate_json[l].pk + ">" + e.candidate_json[l].fields.first_name + " " + e.candidate_json[l].fields.last_name + "</option>");
	                            var o = '<div class="game_header">        <h2>NEW CAMPAIGN TRAIL</h2>    </div>    <div class="inner_window_w_desc" id="inner_window_3">        <div id="candidate_form">        <form name="candidate">            <p>            <h3>Please select your candidate:</h3>            <select name="candidate_id" id="candidate_id">' + n + '</select>            </p>        </form>        </div>        <div class="person_description_window" id="candidate_description_window">        </div>        <p>            <button class="person_button" id="candidate_id_button">Continue</button>        </p>    </div>';
	                            $("#game_window").html(o), $("#candidate_id").ready(function() {
	                                t()
	                            }), $("#candidate_id").change(function() {
	                                t()
	                            }), $("#candidate_id_button").click(function(t) {
	                                t.preventDefault(),
	                                    function(t, a) {
	                                        for (var n = "", l = 0; l < e.running_mate_json.length; l++)
	                                            if (e.running_mate_json[l].fields.candidate == a) {
	                                                var o = e.running_mate_json[l].fields.running_mate,
	                                                    _ = -1;
	                                                for (j = 0; j < e.candidate_json.length; j++)
	                                                    if (o == e .candidate_json[j].pk) {
	                                                        _ = j;
	                                                        break
	                                                    } n += "<option value=" + e.candidate_json[_].pk + ">" + e.candidate_json[_].fields.first_name + " " + e.candidate_json[_].fields.last_name + "</option>"
	                                            } var r = '        <div class="game_header">        <h2>NEW CAMPAIGN TRAIL</h2>        </div>        <div class="inner_window_w_desc" id="inner_window_4">            <div id="running_mate_form">            <form name="running mate">            <p><h3>Please select your running mate:</h3>            <select name="running_mate_id" id="running_mate_id">' + n + '</select>            </p>            </form>            </div>            <div class="person_description_window" id="running_mate_description_window">            </div>        <p><button class="person_button" id="running_mate_id_button">Continue</button>        </p>        </div>';
	                                        $("#game_window").html(r), $("#running_mate_id").ready(function() {
	                                            i()
	                                        }), $("#running_mate_id").change(function() {
	                                            i()
	                                        }), $("#running_mate_id_button").click(function(e) {
	                                            e.preventDefault(), s(t, a, running_mate_id.value)
	                                        })
	                                    }(a, candidate_id.value)
	                            })
	                        }(election_id.value)
	                })
	            }()
	    }), $("#skip_to_final").click(function(t) {
	        e.final_state_results = A(1), d()
	    })
	}();

	// what did you expect?

	setInterval(function(){
		if (sussyroth() && localStorage.getItem("cheated") != "true") {
			console.log("You're gonna have to try a little harder than THAT.")
			setTimeout(function(){location.reload();},1000)
		}
	}, 100);

	//you're just a dirty modder, aren't you?
	//well, feel free to keep looking through at this, but it would be much cooler if you could actually find where this is in context.
	//bonus points if you can tell me (decstar) what this is referencing
	function nextPage() {
		document.getElementById("monologue").innerHTML = "<audio loop='true' autoplay='true' src='https://ia800103.us.archive.org/2/items/sansost/21%20Dogsong.mp3' style='display:none;'></audio>* it's been a while, huh?<br>* ...<br>* i'll be honest.<br>* i have no idea what happened for you to get here.<br>* this is actually some sort of error-handling message.<br>* so, if you're getting this ending...<br>* tell whoever made the mod, okay?<br>* they might fix it, or if it's a novel situation...<br>* they might even add another ending to the mod.<br>* chances are, though...<br><button onclick='nextPage2()'>Next Page</button>"
	}
	function nextPage2() {
		document.getElementById("monologue").innerHTML = "* you're just a dirty modder, aren't you?<br>* yeah, get outta here."
	}

	var dirtyhacker1, dirtyhacker2, dirtyhacker3
	document.addEventListener('keydown', function(event) {
		if(event.keyCode == 32) {
			if (document.getElementById("visit_overlay") != null && campaignTrail_temp.iamapoopybuttfaceandhavenolife != true && campaignTrail_temp.spacebarformods != true ) {
				// you're just a dirty hacker, aren't you?
				campaignTrail_temp.multiple_endings = true;
				dirtyhacker1 = function() {
					document.getElementById("monologue").innerHTML = "heh heh heh... that's your fault isn't it?<br>you can't understand how this feels.<br><button onclick='dirtyhacker2()'>Next Page</button>"
				}
				dirtyhacker2 = function() {
					document.getElementById("monologue").innerHTML = "knowing that one day, without any warning... it's all going to be reset.<br>look. i gave up trying to stop hacking a long time ago.<br>and stopping the spacebar glitch doesn't really appeal anymore, either.<br><button onclick='dirtyhacker3()'>Next Page</button>"
				}
				dirtyhacker3 = function() {
					document.getElementById("monologue").innerHTML = "cause even if we do... we'll just end up right back here, without any memory of it, right?<br>to be blunt... it makes it kind of hard to give it my all.<br>... or is that just a poor excuse for being lazy...? hell if i know."
				}
				endingPicker = function() {
					if (localStorage.getItem("???") == null) {
						localStorage.setItem("???", 0);
					} else {
						localStorage.setItem("???", Number(localStorage.getItem("???")+1));
					}
					if (Number(localStorage.getItem("???")) < 2) {
						return "<audio loop='true' autoplay='true' src='https://ia800103.us.archive.org/2/items/sansost/15%20Sans..mp3' style='display:none;'></audio><font id='monologue' face='Comic Sans MS'>our reports showed a massive anomaly in the gamespace continuum.<br>global multipliers jumping left and right, stopping and starting...<br>until suddenly, everything ends.<br><button onclick='dirtyhacker1()'>Next Page</button></font>"
					} else {
						secretsecretending = function() {
							document.getElementById("monologue").innerHTML = "* type 'bigshot' into the main page, press enter, type 'bigshot' again, press enter. now go into a game and look at the bottom of the page."
						}
						return "<font id='monologue' face='Comic Sans MS'>* heya<br>* is anyone there...?<br>* you must be sick of hearing this, huh?<br>* what if i told you there was another way...<br><button onclick='secretsecretending()'>Next Page</button></font>"
					}
				}
			} else if (document.getElementById("visit_overlay") != null && campaign_trail.spacebarformods) {
				campaignTrail_temp.spacebarUsed = true;
			}
		}

	});
