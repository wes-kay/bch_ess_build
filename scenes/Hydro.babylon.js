window.project = true;

// Project Shader Store


// Browser Window Services

//////////////////////////////////////////////
// Babylon Toolkit - Browser Window Services
//////////////////////////////////////////////

/** Firelight Audio Shims */
window.firelightAudio = 0;
window.firelightDebug = false;
if (window.firelightAudio === 1 || window.firelightAudio === 2) {
	var fmodjs = "scripts/fmodstudio.js";
	if (window.firelightDebug === true) {
		fmodjs = ("scripts/" + (window.firelightAudio === 1) ? "fmodstudioL.js" : "fmodL.js");
	} else {
		fmodjs = ("scripts/" + (window.firelightAudio === 1) ? "fmodstudio.js" : "fmod.js");
	}
	var script2 = document.createElement('script');
	script2.setAttribute("type","text/javascript");
	script2.setAttribute("src", fmodjs);
	if (document.head != null) {
		document.head.appendChild(script2);
	} else if (document.body != null) {
		document.body.appendChild(script2);
	}
}

/** Windows Launch Mode */
window.preferredLaunchMode = 0;
if (typeof Windows !== "undefined" && typeof Windows.UI !== "undefined" && typeof Windows.UI.ViewManagement !== "undefined" &&typeof Windows.UI.ViewManagement.ApplicationView !== "undefined") {
	Windows.UI.ViewManagement.ApplicationView.preferredLaunchWindowingMode = (window.preferredLaunchMode === 1) ? Windows.UI.ViewManagement.ApplicationViewWindowingMode.fullScreen : Windows.UI.ViewManagement.ApplicationViewWindowingMode.auto;
}

/** Xbox Full Screen Shims */
document.querySelector('style').textContent += "@media (max-height: 1080px) { @-ms-viewport { height: 1080px; } }";

/** Xbox Live Plugin Shims */
window.xboxLiveServices = false;
window.isXboxLivePluginEnabled = function() {
	var isXboxLive = (typeof Windows !== "undefined" && typeof Microsoft !== "undefined" && typeof Microsoft.Xbox !== "undefined" && typeof Microsoft.Xbox.Services !== "undefined");
	var hasToolkit = (typeof BabylonToolkit !== "undefined" && typeof BabylonToolkit.XboxLive !== "undefined" && typeof BabylonToolkit.XboxLive.Plugin !== "undefined");
	return (window.xboxLiveServices === true && isXboxLive === true && hasToolkit === true);
}

/** Generic Promise Shims */
window.createGenericPromise = function(resolveRejectHandler) {
	return new Promise(resolveRejectHandler);
}
window.resolveGenericPromise = function(resolveObject) {
    return Promise.resolve(resolveObject);
}


// Hydro.ts
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// /* Babylon Mesh Component Template */
// module PROJECT {
//     export class hazard_Outlet extends BABYLON.MeshComponent {
//         public constructor(owner: BABYLON.AbstractMesh, scene: BABYLON.Scene, tick: boolean = true, propertyBag: any = {}) {
//             super(owner, scene, tick, propertyBag);
//             this.time = 60 * GameSystem.GameControls.difficulty; 
//             this.score = 100; 
//             this.achievement = "Child Safety Award"; 
//             this.description = "Make sure electrical outlets are childproof as they could get hurt.";
//             console.log("Inside");
//         }
//         score: number; 
//         award : string;
//         achievement: string; 
//         description: string;
//         time : number; 
//         isActive: boolean = false; 
//         protected ready() :void {
//             // Scene execute when ready
//         }
//         protected start() :void {
//         }
//         protected update() :void {
//             // Update render loop function
//         }
//         protected after() :void {
//             // After render loop function
//         }
//         protected destroy() :void {
//             // Destroy component function
//         }
//     }
// }
/* Babylon Mesh Component Template */
var PROJECT;
/* Babylon Mesh Component Template */
(function (PROJECT) {
    var hazard_tub = /** @class */ (function (_super) {
        __extends(hazard_tub, _super);
        function hazard_tub(owner, scene, tick, propertyBag) {
            if (tick === void 0) { tick = true; }
            if (propertyBag === void 0) { propertyBag = {}; }
            return _super.call(this, owner, scene, tick, propertyBag) || this;
        }
        hazard_tub.prototype.start = function () {
            this.scene.actionManager = new BABYLON.ActionManager(this.scene);
            var s = function (meshEvent) {
                var pickedMesh = meshEvent.meshUnderPointer;
                console.log(pickedMesh);
            };
        };
        hazard_tub.prototype.update = function () {
            // Update render loop function
        };
        hazard_tub.prototype.after = function () {
            // After render loop function
        };
        hazard_tub.prototype.destroy = function () {
            // Destroy component function
        };
        return hazard_tub;
    }(BABYLON.MeshComponent));
    PROJECT.hazard_tub = hazard_tub;
})(PROJECT || (PROJECT = {}));
/* Babylon Mesh Component Template */
var PROJECT;
/* Babylon Mesh Component Template */
(function (PROJECT) {
    var kite = /** @class */ (function (_super) {
        __extends(kite, _super);
        function kite(owner, scene, tick, propertyBag) {
            if (tick === void 0) { tick = true; }
            if (propertyBag === void 0) { propertyBag = {}; }
            var _this = _super.call(this, owner, scene, tick, propertyBag) || this;
            _this.score = 0;
            return _this;
        }
        kite.prototype.start = function () {
            this.difficulty = this.getProperty("difficulty", 1);
        };
        kite.prototype.update = function () {
            if (this.difficulty <= 1) {
                this.score = 1;
            }
            this.score -= this.difficulty;
        };
        kite.prototype.tap = function (n) {
            this.score += n;
        };
        return kite;
    }(BABYLON.MeshComponent));
    PROJECT.kite = kite;
})(PROJECT || (PROJECT = {}));
/* Babylon Mesh Component Template */
var PROJECT;
/* Babylon Mesh Component Template */
(function (PROJECT) {
    var Crash = /** @class */ (function (_super) {
        __extends(Crash, _super);
        function Crash(owner, scene, tick, propertyBag) {
            if (tick === void 0) { tick = true; }
            if (propertyBag === void 0) { propertyBag = {}; }
            var _this = _super.call(this, owner, scene, tick, propertyBag) || this;
            _this.hideCrashObject = [
                _this.GetMesh("powerline"),
                _this.GetMesh("powerlinewire1"),
                _this.GetMesh("powerlinewire2"),
            ];
            _this.showCrashObject = [
                _this.GetMesh("skidmarks"),
                _this.GetMesh("car"),
                _this.GetMesh("door1"),
                _this.GetMesh("door2"),
                _this.GetMesh("powerlineBroken"),
                _this.GetMesh("lineDown"),
                _this.GetMesh("bystander1"),
                _this.GetMesh("bystander2"),
                _this.GetMesh("npcInCar")
            ];
            PROJECT.GameSystem.crash = _this;
            _this.showCrashObject.forEach(function (element) {
                element.isVisible = false;
            });
            return _this;
        }
        Crash.prototype.ShowCrash = function () {
            this.hideCrashObject.forEach(function (element) {
                element.isVisible = false;
            });
            this.showCrashObject.forEach(function (element) {
                element.isVisible = true;
            });
        };
        Crash.prototype.GetMesh = function (s) {
            var mesh = this.getProperty(s, null);
            return this.scene.getMeshByID(mesh.id);
        };
        return Crash;
    }(BABYLON.MeshComponent));
    PROJECT.Crash = Crash;
})(PROJECT || (PROJECT = {}));
/* Babylon Mesh Component Template */
var PROJECT;
/* Babylon Mesh Component Template */
(function (PROJECT) {
    var Door = /** @class */ (function (_super) {
        __extends(Door, _super);
        function Door(owner, scene, tick, propertyBag) {
            if (tick === void 0) { tick = true; }
            if (propertyBag === void 0) { propertyBag = {}; }
            return _super.call(this, owner, scene, tick, propertyBag) || this;
        }
        Door.prototype.ready = function () {
            PROJECT.GameSystem.frontDoor = this.mesh;
        };
        return Door;
    }(BABYLON.MeshComponent));
    PROJECT.Door = Door;
})(PROJECT || (PROJECT = {}));
/* Babylon Mesh Component Template */
var PROJECT;
/* Babylon Mesh Component Template */
(function (PROJECT) {
    var EntityRotation = /** @class */ (function (_super) {
        __extends(EntityRotation, _super);
        function EntityRotation(owner, scene, tick, propertyBag) {
            if (tick === void 0) { tick = true; }
            if (propertyBag === void 0) { propertyBag = {}; }
            var _this = _super.call(this, owner, scene, tick, propertyBag) || this;
            var pos2 = _this.mesh.position.clone();
            pos2.y += 0.08;
            // Creates animation from the box current position to the picked position
            var keys = [];
            keys.push({
                frame: 0,
                value: _this.mesh.position
            });
            keys.push({
                frame: 120,
                value: _this.mesh.position
            });
            var animation = PROJECT.GameSystem.createAnimations(_this.mesh, pos2);
            scene.beginDirectAnimation(_this.mesh, animation, 0, 240, true);
            return _this;
            // protected update() :void {
            //     this.mesh.rotate(new BABYLON.Vector3(0,1, 0), 0.1);
            // }
        }
        return EntityRotation;
    }(BABYLON.MeshComponent));
    PROJECT.EntityRotation = EntityRotation;
})(PROJECT || (PROJECT = {}));
/* Babylon Mesh Component Template */
var PROJECT;
/* Babylon Mesh Component Template */
(function (PROJECT) {
    var Kite = /** @class */ (function (_super) {
        __extends(Kite, _super);
        function Kite(owner, scene, tick, propertyBag) {
            if (tick === void 0) { tick = true; }
            if (propertyBag === void 0) { propertyBag = {}; }
            var _this = _super.call(this, owner, scene, tick, propertyBag) || this;
            _this.kiteFlying = _this.mesh;
            _this.kiteDown = _this.GetMesh("kiteDown");
            _this.kiteDown.isVisible = false;
            PROJECT.GameSystem.kite = _this;
            return _this;
        }
        Kite.prototype.ToggleKite = function () {
            this.kiteFlying.isVisible = false;
            this.kiteDown.isVisible = true;
        };
        Kite.prototype.LowerKite = function () {
            this.kiteFlying.position.y -= 1.5;
        };
        Kite.prototype.GetMesh = function (s) {
            var mesh = this.getProperty(s, null);
            return this.scene.getMeshByID(mesh.id);
        };
        return Kite;
    }(BABYLON.MeshComponent));
    PROJECT.Kite = Kite;
})(PROJECT || (PROJECT = {}));
/* Babylon Mesh Component Template */
var PROJECT;
/* Babylon Mesh Component Template */
(function (PROJECT) {
    var Tolken = /** @class */ (function (_super) {
        __extends(Tolken, _super);
        function Tolken(owner, scene, tick, propertyBag) {
            if (tick === void 0) { tick = true; }
            if (propertyBag === void 0) { propertyBag = {}; }
            var _this = _super.call(this, owner, scene, tick, propertyBag) || this;
            _this.mesh.isVisible = _this.getProperty("visible", null);
            _this.mesh.actionManager = new BABYLON.ActionManager(_this.scene);
            _this.mesh.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger, function (event) {
                event.meshUnderPointer.dispose();
                PROJECT.GameGUI.scoreHud.setSmartToken();
                PROJECT.GameSystem.soundSystem.PS_Token.play();
            }));
            return _this;
        }
        Tolken.prototype.update = function () {
            this.mesh.rotate(new BABYLON.Vector3(0, 0, 1), 0.1);
        };
        return Tolken;
    }(BABYLON.MeshComponent));
    PROJECT.Tolken = Tolken;
})(PROJECT || (PROJECT = {}));
/* Babylon Typescript Class Template */
var PROJECT;
/* Babylon Typescript Class Template */
(function (PROJECT) {
    var Action = /** @class */ (function () {
        function Action() {
        }
        Action.trigger = function (mesh, action) {
            switch (mesh.name) {
                case "HairDryer": {
                    PROJECT.GameSystem._GameSystem.switchCamera("Hazard_TubCamera");
                    mesh.isVisible = false;
                    break;
                }
                // case "Toaster_pickup": {
                //     GameGUI.crashBox.ShowCard("That toaster is dangerously close to the sink. You should move it to the counter.");
                //     mesh.parent = GameSystem.mainCamera;
                //     mesh.position.z = 3;
                //     mesh.position.x = 0.5;
                //     break;
                // }
                case "Toaster_drop": {
                    this.toaster.parent = null;
                    this.toaster.position = new BABYLON.Vector3(5.7, 1.17, -2.73);
                    mesh.isVisible = false;
                    PROJECT.GameSystem.hasToaster = false;
                    PROJECT.GameGUI.achievment.SetAchievment(action);
                    PROJECT.scoreSystem.setScore(action.score);
                    break;
                }
                // case "Hazard_PowerOutlet (0)":{
                //     MeshObservable.highlightLayer.isEnabled = true;
                //     MeshObservable.outletLayer.isEnabled = true;
                //     MeshObservable.highlightLayer.removeMesh(<BABYLON.Mesh>mesh);
                //     GameGUI.GameTimerPopup.start();
                //     //MeshObservable.outletLayer.dispose();
                //     //myAdvancedDynamicTexture.SetCountDown();
                //     break;
                // }
                case "Hazard_Kite_Trigger": {
                    PROJECT.GameSystem._GameSystem.switchCamera("kiteCamera");
                    break;
                }
                case "Hazard_Transformer": {
                    PROJECT.GameGUI.multipleChoiceImage.setmultipleChoice(PROJECT.GameSystem.ActionSystemContainer.hazard_PlayItSafe);
                    break;
                }
                case "Hazard_Vacuum": {
                    PROJECT.GameGUI.multipleChoice.setmultipleChoice(action);
                    break;
                }
            }
        };
        // static display(meshToDisplay: BABYLON.AbstractMesh, action: ActionSystem, visible: boolean = true){
        //     meshToDisplay.isVisible = visible;
        //     GameGUI.multipleChoiceImage.setmultipleChoice(action);
        // }
        Action.swap = function (mesh, swap, action) {
            mesh.isVisible = false;
            swap.isVisible = true;
            if (mesh.name == "PowerBardCords_Plugged.001") {
                PROJECT.Particles.emitParticle(PROJECT.Particles.sparks, false);
            }
            PROJECT.scoreSystem.setScore(action.score);
            PROJECT.GameGUI.achievment.SetAchievment(action);
        };
        Action.swapPickup = function (mesh, swap, plug) {
            this.toaster = mesh;
            PROJECT.GameSystem.hasToaster = true;
            PROJECT.GameGUI.crashBox.ShowCard("That toaster is dangerously close to the sink.\nYou should move it to the counter on the left.");
            mesh.parent = PROJECT.GameSystem.mainCamera;
            mesh.position.z = 0.5;
            mesh.position.x = 0.3;
            mesh.position.y = -0.2;
            swap.isVisible = true;
            plug.isVisible = false;
        };
        Action.setObject = function (mesh) {
            this.currentOutlet += 1;
            PROJECT.scoreSystem.setScore(20);
            if (this.currentOutlet == 5) {
                PROJECT.GameSystem.ActionSystemContainer.hazard_Childproof.isCompleted = true;
                PROJECT.GameGUI.achievment.SetAchievment(PROJECT.GameSystem.ActionSystemContainer.hazard_Childproof);
            }
        };
        Action.currentOutlet = 0;
        return Action;
    }());
    PROJECT.Action = Action;
})(PROJECT || (PROJECT = {}));
/* Babylon Mesh Component Template */
var PROJECT;
/* Babylon Mesh Component Template */
(function (PROJECT) {
    var EquipMeshObservable = /** @class */ (function (_super) {
        __extends(EquipMeshObservable, _super);
        function EquipMeshObservable(owner, scene, tick, propertyBag) {
            if (tick === void 0) { tick = true; }
            if (propertyBag === void 0) { propertyBag = {}; }
            return _super.call(this, owner, scene, tick, propertyBag) || this;
        }
        return EquipMeshObservable;
    }(BABYLON.MeshComponent));
    PROJECT.EquipMeshObservable = EquipMeshObservable;
})(PROJECT || (PROJECT = {}));
/* Babylon Mesh Component Template */
var PROJECT;
/* Babylon Mesh Component Template */
(function (PROJECT) {
    var MeshButton = /** @class */ (function (_super) {
        __extends(MeshButton, _super);
        function MeshButton(owner, scene, tick, propertyBag) {
            if (tick === void 0) { tick = true; }
            if (propertyBag === void 0) { propertyBag = {}; }
            return _super.call(this, owner, scene, tick, propertyBag) || this;
        }
        MeshButton.prototype.start = function () {
            this.makePushButtons();
        };
        MeshButton.prototype.makePushButtons = function () {
            var color;
            //var newPushButton = this.pushButtonCore.clone(this.mesh);
            var colors = [{ r: 0.25, g: 0, b: 0 }, { r: 0, g: 0.25, b: 0 }, { r: 0, g: 0, b: 0.25 },
                { r: 0.25, g: 0.25, b: 0 }, { r: 0, g: 0.25, b: 0.25 }, { r: 0.25, g: 0, b: 0.25 }];
            color = new BABYLON.Color3(1, 2, 3);
            this.makePushButton(this.mesh, color);
        };
        MeshButton.prototype.makePushButton = function (mesh, hoverColor) {
            var manager = new BABYLON.GUI.GUI3DManager(this.scene);
            // var panel = new BABYLON.GUI.PlanePanel();
            // manager.addControl(panel);
            var cylinder = mesh.getChildMeshes(false, function (node) { return node.name.indexOf("top") !== -1; })[0];
            var cylinderMat = cylinder.material.clone();
            cylinderMat.albedoColor = new BABYLON.Color3(0.5, 0.19, 0);
            cylinder.material = cylinderMat;
            var pushButton = new BABYLON.GUI.MeshButton3D(mesh, this.mesh.name);
            pushButton.pointerEnterAnimation = function () {
                cylinder.material.albedoColor = hoverColor;
            };
            pushButton.pointerOutAnimation = function () {
                cylinder.material.albedoColor = new BABYLON.Color3(0.5, 0.19, 0);
            };
            pushButton.pointerDownAnimation = function () {
                cylinder.position.y = -0.02;
            };
            pushButton.pointerUpAnimation = function () {
                cylinder.position.y = 0;
            };
            pushButton.onPointerDownObservable.add(function () {
                console.log(pushButton.name + " pushed.");
            });
            pushButton.position = this.mesh.position;
            manager.addControl(pushButton);
        };
        return MeshButton;
    }(BABYLON.MeshComponent));
    PROJECT.MeshButton = MeshButton;
})(PROJECT || (PROJECT = {}));
/* Babylon Mesh Component Template */
var PROJECT;
/* Babylon Mesh Component Template */
(function (PROJECT) {
    var MeshObservable = /** @class */ (function (_super) {
        __extends(MeshObservable, _super);
        function MeshObservable(owner, scene, tick, propertyBag) {
            if (tick === void 0) { tick = true; }
            if (propertyBag === void 0) { propertyBag = {}; }
            return _super.call(this, owner, scene, tick, propertyBag) || this;
        }
        MeshObservable.prototype.start = function () {
            var _this = this;
            var highlightLayer = new BABYLON.HighlightLayer("highlightLayer", this.scene);
            var observ = {};
            observ[this.mesh.uniqueId] = true;
            var type = this.getProperty("type", "0");
            var actionType = this.getProperty("actionType", null);
            var interactType = this.getProperty("interactType", null);
            var actionSystem;
            var action;
            var secondAction;
            if (actionType != 0) {
                switch (actionType) {
                    case 0: {
                        return;
                    }
                    case 1: {
                        actionSystem = PROJECT.GameSystem.ActionSystemContainer.hazard_SafeSockets;
                        highlightLayer.addMesh(this.mesh, BABYLON.Color3.Blue());
                        break;
                    }
                    case 2: {
                        actionSystem = PROJECT.GameSystem.ActionSystemContainer.hazard_WaterWiz;
                        highlightLayer.addMesh(this.mesh, BABYLON.Color3.Blue());
                        break;
                    }
                    case 3: {
                        actionSystem = PROJECT.GameSystem.ActionSystemContainer.hazard_HeatHero;
                        highlightLayer.addMesh(this.mesh, BABYLON.Color3.Blue());
                        break;
                    }
                    case 4: {
                        actionSystem = PROJECT.GameSystem.ActionSystemContainer.hazard_ApplianceExpert;
                        highlightLayer.addMesh(this.mesh, BABYLON.Color3.Blue());
                        break;
                    }
                    case 5: {
                        actionSystem = PROJECT.GameSystem.ActionSystemContainer.hazard_BathtubSafety;
                        highlightLayer.addMesh(this.mesh, BABYLON.Color3.Blue());
                        break;
                    }
                    case 6: {
                        actionSystem = PROJECT.GameSystem.ActionSystemContainer.hazard_DamageDetective;
                        break;
                    }
                    case 8: {
                        actionSystem = PROJECT.GameSystem.ActionSystemContainer.hazard_PowerLineAvoider;
                        highlightLayer.addMesh(this.mesh, BABYLON.Color3.Blue());
                        break;
                    }
                    case 9: {
                        actionSystem = PROJECT.GameSystem.ActionSystemContainer.hazard_NoFly;
                        highlightLayer.addMesh(this.mesh, BABYLON.Color3.Blue());
                        break;
                    }
                    case 10: {
                        actionSystem = PROJECT.GameSystem.ActionSystemContainer.hazard_PlayItSafe;
                        highlightLayer.addMesh(this.mesh, BABYLON.Color3.Blue());
                        break;
                    }
                    case 11: {
                        actionSystem = PROJECT.GameSystem.ActionSystemContainer.hazard_PetProtectorII;
                        break;
                    }
                    case 12: {
                        actionSystem = PROJECT.GameSystem.ActionSystemContainer.hazard_Childproof;
                        highlightLayer.addMesh(this.mesh, BABYLON.Color3.Blue());
                        break;
                    }
                }
                var swap = this.getProperty("actionObject", null);
                if (swap != null) {
                    var meshid = swap.id;
                    var swapMesh = this.scene.getMeshByID(meshid);
                    swapMesh.isVisible = false;
                }
                if (type == "0") {
                }
                else if (type == "1") {
                    action = function () { return PROJECT.Action.trigger(_this.mesh, actionSystem); };
                }
                else if (type == "2") {
                    var meshid_1 = swap.id;
                    action = function () { return PROJECT.Action.swap(_this.mesh, _this.scene.getMeshByID(meshid_1), actionSystem); };
                }
                else if (type == "3") {
                    var meshid_2 = swap.id;
                    var remove_1 = this.getProperty("removeObject", null);
                    action = function () { return PROJECT.Action.swapPickup(_this.mesh, _this.scene.getMeshByID(meshid_2), _this.scene.getMeshByID(remove_1.id)); };
                }
                else if (type == "4") {
                    var meshid_3 = swap.id;
                    this.scene.getMeshByID(meshid_3).isVisible = false;
                    secondAction = function () { return _this.scene.getMeshByID(meshid_3).isVisible = true; };
                    action = function () { return PROJECT.Action.trigger(_this.mesh, actionSystem); };
                }
                this.scene.onPointerObservable.add(function (p) {
                    if (p.type == BABYLON.PointerEventTypes.POINTERDOWN) {
                        if (p.pickInfo.distance <= 5 && actionSystem.isCompleted == false && p.pickInfo.pickedMesh && (!PROJECT.GameSystem.hasToaster || p.pickInfo.pickedMesh.name == "Toaster_drop") && observ[p.pickInfo.pickedMesh.uniqueId]) {
                            if (secondAction) {
                                secondAction();
                            }
                            action();
                            PROJECT.GameSystem.soundSystem.Highlighted_Objects.play();
                            if (_this.mesh.name != "Toaster_pickup") {
                                actionSystem.isCompleted = true;
                            }
                            if (_this.mesh.name == "Hazard_Vacuum") {
                                PROJECT.GameSystem.soundSystem.Vacum_loop.stop(0);
                                PROJECT.GameSystem.soundSystem.Vacum_loop.dispose();
                            }
                            highlightLayer.removeMesh(_this.mesh);
                        }
                    }
                });
            }
            else if (interactType != 0) {
                var clicked = false;
                switch (interactType) {
                    case 0: {
                        return;
                    }
                    //Front door
                    case 1: {
                        highlightLayer.addMesh(this.mesh, BABYLON.Color3.Blue());
                        this.scene.onPointerObservable.add(function (p) {
                            if (clicked == false && p.type == BABYLON.PointerEventTypes.POINTERDOWN) {
                                if (p.pickInfo.pickedMesh && observ[p.pickInfo.pickedMesh.uniqueId]) {
                                    _this.mesh.rotation.y = 55;
                                    highlightLayer.removeMesh(_this.mesh);
                                    PROJECT.GameSystem.soundSystem.Door_Open.play();
                                }
                            }
                        });
                        break;
                    }
                    //Outlets
                    case 2: {
                        highlightLayer.addMesh(this.mesh, BABYLON.Color3.Blue());
                        action = function () { return PROJECT.Action.setObject(_this.mesh); };
                        this.scene.onPointerObservable.add(function (p) {
                            if (p.pickInfo.distance <= 5 && clicked == false && p.type == BABYLON.PointerEventTypes.POINTERDOWN) {
                                if (p.pickInfo.pickedMesh && observ[p.pickInfo.pickedMesh.uniqueId]) {
                                    if (!PROJECT.GameSystem.triggeredOutlets) {
                                        PROJECT.GameGUI.crashBox.ShowCard("Childproof the rest of the outlets to earn an achievement.");
                                        PROJECT.GameSystem.triggeredOutlets = true;
                                    }
                                    PROJECT.GameSystem.soundSystem.Correct_Answer.play();
                                    action();
                                    highlightLayer.removeMesh(_this.mesh);
                                    _this.mesh.dispose();
                                    clicked = true;
                                }
                            }
                        });
                        break;
                    }
                }
            }
        };
        return MeshObservable;
    }(BABYLON.MeshComponent));
    PROJECT.MeshObservable = MeshObservable;
})(PROJECT || (PROJECT = {}));
/* Babylon Mesh Component Template */
var PROJECT;
/* Babylon Mesh Component Template */
(function (PROJECT) {
    var npcController = /** @class */ (function (_super) {
        __extends(npcController, _super);
        function npcController(owner, scene, tick, propertyBag) {
            if (tick === void 0) { tick = true; }
            if (propertyBag === void 0) { propertyBag = {}; }
            var _this = _super.call(this, owner, scene, tick, propertyBag) || this;
            _this.isCatDone = false;
            _this.isDogDone = false;
            _this.isFrisbeeDone = false;
            return _this;
        }
        npcController.prototype.start = function () {
            var _this = this;
            var dogPlayerBefore = new BABYLON.SpriteManager("playerManager", "scenes/img/npc/dog/character_dog.png", 2, { width: 280, height: 347 }, this.scene);
            dogPlayerBefore.isPickable = true;
            this.dogPlayerSprite = new BABYLON.Sprite("dog", dogPlayerBefore);
            this.dogPlayerSprite.position.x = 10.64;
            this.dogPlayerSprite.position.y = -0.15;
            this.dogPlayerSprite.position.z = -8.1;
            this.dogPlayerSprite.isPickable = true;
            this.dogPlayerSprite.isPickable = true;
            this.dogPlayerSprite.playAnimation(0, 1, true, 300, null);
            var catPlayerBefore = new BABYLON.SpriteManager("playerManager", "./scenes/img/npc/cat/character_cat.png", 2, { width: 256, height: 256 }, this.scene);
            catPlayerBefore.isPickable = true;
            this.catPlayerSprite = new BABYLON.Sprite("cat", catPlayerBefore);
            this.catPlayerSprite.isPickable = true;
            this.catPlayerSprite.position.x = -1.97;
            this.catPlayerSprite.position.y = 0.893;
            this.catPlayerSprite.position.z = 6.02;
            this.catPlayerSprite.playAnimation(0, 1, true, 300, null);
            var frisbeePlayerBefore = new BABYLON.SpriteManager("playerManager", "./scenes/img/npc/child/character_boy-pointing.png", 2, { width: 270, height: 700 }, this.scene);
            frisbeePlayerBefore.isPickable = true;
            this.frisbeePlayerSprite = new BABYLON.Sprite("frisbeePlayer", frisbeePlayerBefore);
            this.frisbeePlayerSprite.position.x = -2.75;
            this.frisbeePlayerSprite.position.y = 0.2;
            this.frisbeePlayerSprite.position.z = -16.16;
            this.frisbeePlayerSprite.isPickable = true;
            this.frisbeePlayerSprite.height = 2;
            this.frisbeePlayerSprite.playAnimation(0, 1, true, 300, null);
            this.scene.preventDefaultOnPointerDown = false;
            this.scene.preventDefaultOnPointerUp = false;
            this.scene.onPointerDown = function (evt, pickResult) {
                //Lock player movement
                var pickResult = _this.scene.pickSprite(_this.scene.pointerX, _this.scene.pointerY);
                if (pickResult.hit && pickResult.distance < 3) {
                    _this.Clicked(pickResult.pickedSprite.name);
                }
                //Check if not a target mesh
                _this.engine.enterPointerlock();
            };
            this.scene.onPointerUp = function () {
                _this.engine.exitPointerlock();
            };
        };
        npcController.prototype.Clicked = function (spriteName) {
            switch (spriteName) {
                case "cat": {
                    if (!this.isCatDone) {
                        PROJECT.GameGUI.multipleChoice.setmultipleChoice(PROJECT.GameSystem.ActionSystemContainer.hazard_DamageDetective);
                        this.catPlayerSprite.dispose();
                        this.catPlayerSprite = new BABYLON.Sprite("catPlayer", new BABYLON.SpriteManager("playerManager", "./scenes/img/npc/cat/character_cat_mouse.png", 2, { width: 256, height: 256 }, this.scene));
                        this.catPlayerSprite.position.x = -1.97;
                        this.catPlayerSprite.position.y = 0.893;
                        this.catPlayerSprite.position.z = 6.02;
                        this.catPlayerSprite.playAnimation(0, 1, true, 300, null);
                        this.isCatDone = true;
                    }
                    break;
                }
                case "dog": {
                    if (!this.isDogDone) {
                        PROJECT.GameGUI.multipleChoice.setmultipleChoice(PROJECT.GameSystem.ActionSystemContainer.hazard_PetProtectorII);
                        this.dogPlayerSprite.dispose();
                        this.dogPlayerSprite = new BABYLON.Sprite("dogPlayer", new BABYLON.SpriteManager("playerManager", "./scenes/img/npc/dog/character_dog_bone.png", 1, { width: 256, height: 256 }, this.scene));
                        this.dogPlayerSprite.position.x = 10.64;
                        this.dogPlayerSprite.position.y = 0;
                        this.dogPlayerSprite.position.z = -8.1;
                        this.isDogDone = true;
                    }
                    break;
                }
                case "frisbeePlayer": {
                    if (!this.isFrisbeeDone) {
                        this.isFrisbeeDone = true;
                        PROJECT.GameGUI.multipleChoice.setmultipleChoice(PROJECT.GameSystem.ActionSystemContainer.hazard_PowerLineAvoider);
                        this.frisbeePlayerSprite.dispose();
                        this.frisbeePlayerSprite = new BABYLON.Sprite("frisbeePlayer", new BABYLON.SpriteManager("playerManager", "./scenes/img/npc/child/character_boy-frisbee.png", 2, { width: 270, height: 700 }, this.scene));
                        this.frisbeePlayerSprite.position.x = -2.75;
                        this.frisbeePlayerSprite.position.y = 0.2;
                        this.frisbeePlayerSprite.position.z = -16.16;
                        this.frisbeePlayerSprite.height = 2;
                        this.frisbeePlayerSprite.playAnimation(0, 1, true, 300, null);
                    }
                    break;
                }
            }
        };
        return npcController;
    }(BABYLON.MeshComponent));
    PROJECT.npcController = npcController;
})(PROJECT || (PROJECT = {}));
/* Babylon Typescript Class Template */
var PROJECT;
/* Babylon Typescript Class Template */
(function (PROJECT) {
    var Achievement = /** @class */ (function () {
        function Achievement(title, description) {
            this.title = title;
            this.description = description;
        }
        return Achievement;
    }());
    var AchievementsSystem = /** @class */ (function () {
        function AchievementsSystem() {
            this.Achievments = [
                new Achievement("Neat and Tidy", "Keep cords neat and tidy: Loose cords are a tripping hazard in walkways."),
                new Achievement("Safe Sockets", "Don’t overload power sockets: plugging too many appliances and electronics into one socket can lead to overheating."),
            ];
        }
        return AchievementsSystem;
    }());
    PROJECT.AchievementsSystem = AchievementsSystem;
})(PROJECT || (PROJECT = {}));
/* Babylon Typescript Class Template */
var PROJECT;
/* Babylon Typescript Class Template */
(function (PROJECT) {
    //TODO set toggle movement from here 
    var ActionSystem = /** @class */ (function () {
        function ActionSystem() {
            this.isCompleted = false;
            this.hazardNum = 0;
        }
        return ActionSystem;
    }());
    PROJECT.ActionSystem = ActionSystem;
    var hazard_NeatTidy = /** @class */ (function (_super) {
        __extends(hazard_NeatTidy, _super);
        function hazard_NeatTidy() {
            var _this = _super.call(this) || this;
            _this.score = 100;
            _this.achievement = "Neat & tidy";
            _this.description = "keep cords neat and tidy. Loose cords are a tripping hazard in walkways.";
            _this.image = "achv_neat-tidy_circle.png";
            return _this;
        }
        return hazard_NeatTidy;
    }(ActionSystem));
    PROJECT.hazard_NeatTidy = hazard_NeatTidy;
    var hazard_PetProtectorI = /** @class */ (function (_super) {
        __extends(hazard_PetProtectorI, _super);
        function hazard_PetProtectorI() {
            var _this = _super.call(this) || this;
            _this.score = 100;
            _this.achievement = "Pet Protector";
            _this.description = "Keep pets away from electrical cords. If they try to play they could get hurt.";
            _this.image = "achv_pet-protect_circle.png";
            return _this;
        }
        return hazard_PetProtectorI;
    }(ActionSystem));
    PROJECT.hazard_PetProtectorI = hazard_PetProtectorI;
    var hazard_DamageDetective = /** @class */ (function (_super) {
        __extends(hazard_DamageDetective, _super);
        function hazard_DamageDetective() {
            var _this = _super.call(this) || this;
            _this.conversation = "That cat is playing with the wrong kind of mouse. The computer mouse is now damaged, what should you do?";
            _this.choice = ["Pick it up and hide it from the pets.", "Tell an adult it needs to be disposed of."];
            _this.correctChoice = 1;
            _this.answer = ["That’s not safe, a damaged cord could harm someone.", "Never use damaged electrical cords."];
            _this.score = 100;
            _this.achievement = "Damage detective";
            _this.description = "Don’t use damaged electrical cords.\nLet an adult know if you see one.";
            _this.image = "achv_dam-detective_circle.png";
            return _this;
        }
        return hazard_DamageDetective;
    }(ActionSystem));
    PROJECT.hazard_DamageDetective = hazard_DamageDetective;
    var hazard_BathtubSafety = /** @class */ (function (_super) {
        __extends(hazard_BathtubSafety, _super);
        function hazard_BathtubSafety() {
            var _this = _super.call(this) || this;
            _this.score = 100;
            _this.achievement = "Bathtub safety";
            _this.description = "Never use electronic devices while in the bathtub\nor shower, you could be shocked or electrocuted.";
            _this.image = "achv_bathtub_circle.png";
            return _this;
        }
        return hazard_BathtubSafety;
    }(ActionSystem));
    PROJECT.hazard_BathtubSafety = hazard_BathtubSafety;
    var hazard_HeatHero = /** @class */ (function (_super) {
        __extends(hazard_HeatHero, _super);
        function hazard_HeatHero() {
            var _this = _super.call(this) || this;
            _this.score = 100;
            _this.achievement = "Heat hero";
            _this.description = "Heat and electricity don’t mix.\nKeep electronics away from heat sources.";
            _this.image = "achv_heat-hero_circle.png";
            return _this;
        }
        return hazard_HeatHero;
    }(ActionSystem));
    PROJECT.hazard_HeatHero = hazard_HeatHero;
    var hazard_WaterWiz = /** @class */ (function (_super) {
        __extends(hazard_WaterWiz, _super);
        function hazard_WaterWiz() {
            var _this = _super.call(this) || this;
            _this.score = 100;
            _this.achievement = "Water wiz";
            _this.description = "Keep electronic devices away from water. Water conducts electricity and that makes it dangerous.";
            _this.image = "achv_water-wiz_circle.png";
            return _this;
        }
        return hazard_WaterWiz;
    }(ActionSystem));
    PROJECT.hazard_WaterWiz = hazard_WaterWiz;
    var hazard_SafeSockets = /** @class */ (function (_super) {
        __extends(hazard_SafeSockets, _super);
        function hazard_SafeSockets() {
            var _this = _super.call(this) || this;
            _this.score = 100;
            _this.achievement = "Safe sockets";
            _this.description = "Don’t overload power sockets:\nplugging too many appliances and electronics\ninto one socket can lead to overheating.";
            _this.image = "achv_safe-sockets_circle.png";
            return _this;
        }
        return hazard_SafeSockets;
    }(ActionSystem));
    PROJECT.hazard_SafeSockets = hazard_SafeSockets;
    var hazard_ApplianceExpert = /** @class */ (function (_super) {
        __extends(hazard_ApplianceExpert, _super);
        function hazard_ApplianceExpert() {
            var _this = _super.call(this) || this;
            _this.conversation = "Someone left the vacuum running. What should you do?";
            _this.choice = ["Leave the vacuum alone.", "Turn off the vacuum and put it away."];
            _this.correctChoice = 1;
            _this.answer = ["That's a waste of energy.", "That’s right."];
            _this.score = 100;
            _this.achievement = "Appliance expert";
            _this.description = "Power off, unplug and store appliances when\nyou are finished using them. They can waste\nenergy or become a tripping hazard.";
            _this.image = "achv_appliance-expert_circle.png";
            return _this;
        }
        return hazard_ApplianceExpert;
    }(ActionSystem));
    PROJECT.hazard_ApplianceExpert = hazard_ApplianceExpert;
    var hazard_Childproof = /** @class */ (function (_super) {
        __extends(hazard_Childproof, _super);
        function hazard_Childproof() {
            var _this = _super.call(this) || this;
            _this.score = 100;
            _this.achievement = "Childproof";
            _this.description = "Make sure electrical outlets are childproof.\nBabies and young children could get hurt.";
            _this.image = "achv_childproof_circle.png";
            return _this;
        }
        return hazard_Childproof;
    }(ActionSystem));
    PROJECT.hazard_Childproof = hazard_Childproof;
    var hazard_PowerLineAvoider = /** @class */ (function (_super) {
        __extends(hazard_PowerLineAvoider, _super);
        function hazard_PowerLineAvoider() {
            var _this = _super.call(this) || this;
            _this.conversation = "My frisbee is stuck in the tree.\nCan you climb up there and get it?";
            _this.choice = ["Of course. Let’s climb up and get your frisbee back.", "The tree is next to a power line. It’s too dangerous. You can borrow my frisbee."];
            _this.correctChoice = 1;
            _this.answer = ["I wouldn’t do that, it’s not safe.", "Climbing trees next to power lines isn’t safe.\nYou can borrow my frisbee instead."];
            _this.score = 100;
            _this.achievement = "Power line avoider";
            _this.description = "Climbing trees near power lines can put you\nin harm’s way. Keep a safe distance.";
            _this.image = "achv_power-line_circle.png";
            return _this;
        }
        return hazard_PowerLineAvoider;
    }(ActionSystem));
    PROJECT.hazard_PowerLineAvoider = hazard_PowerLineAvoider;
    var hazard_PetProtectorII = /** @class */ (function (_super) {
        __extends(hazard_PetProtectorII, _super);
        function hazard_PetProtectorII() {
            var _this = _super.call(this) || this;
            _this.conversation = "Woof. The dog is digging near a buried electrical line marker. What should you do?";
            _this.choice = ["Play with the dog somewhere else.", "Help the dog dig an even deeper hole."];
            _this.correctChoice = 0;
            _this.answer = ["That’s right. Pay attention to electrical safety markers and never dig near them.", "That’s not safe."];
            _this.score = 100;
            _this.achievement = "Pet protector";
            _this.description = "Call BC One Call before you dig. Coming into contact with hidden underground power lines and other utilities can cause serious injury or death.";
            _this.image = "achv_pet-protect_circle.png";
            return _this;
        }
        return hazard_PetProtectorII;
    }(ActionSystem));
    PROJECT.hazard_PetProtectorII = hazard_PetProtectorII;
    var hazard_NoFly = /** @class */ (function (_super) {
        __extends(hazard_NoFly, _super);
        function hazard_NoFly() {
            var _this = _super.call(this) || this;
            _this.score = 100;
            _this.achievement = "No fly zone";
            _this.description = "Always fly kites in a big open space, far away from power lines.";
            _this.image = "achv_no-fly-zone_circle.png";
            return _this;
        }
        return hazard_NoFly;
    }(ActionSystem));
    PROJECT.hazard_NoFly = hazard_NoFly;
    var hazard_PlayItSafe = /** @class */ (function (_super) {
        __extends(hazard_PlayItSafe, _super);
        function hazard_PlayItSafe() {
            var _this = _super.call(this) || this;
            _this.conversation = "It looks like it's missing a sign.\n Can you pick the sign that fits best?";
            _this.choice = ["scenes/img/signs/sign-wrong-1.png", "scenes/img/signs/sign-wrong-2.png", "scenes/img/signs/sign-correct.png"];
            _this.correctChoice = 2;
            _this.answer = ["No outlets in there. Electric transformers should never be played with.", "That's not safe. Never play on pad-mounted transformers.", "Keep off pad-mounted transformers and electrical equipment."];
            _this.score = 100;
            _this.achievement = "Play it safe";
            _this.description = "Don’t play on pad-mounted transformers.\nIt’s dangerous.";
            _this.image = "achv_play-it-safe_circle.png";
            return _this;
        }
        return hazard_PlayItSafe;
    }(ActionSystem));
    PROJECT.hazard_PlayItSafe = hazard_PlayItSafe;
    var hazard_SafetyShuffle = /** @class */ (function (_super) {
        __extends(hazard_SafetyShuffle, _super);
        function hazard_SafetyShuffle() {
            var _this = _super.call(this) || this;
            _this.score = 100;
            _this.achievement = "Safety shuffle";
            _this.description = "Always shuffle with your feet together if you\nmust escape the area of a live power line.";
            _this.image = "achv_safety-shuffle_circle.png";
            return _this;
        }
        return hazard_SafetyShuffle;
    }(ActionSystem));
    PROJECT.hazard_SafetyShuffle = hazard_SafetyShuffle;
    var hazard_DownDangerDial = /** @class */ (function (_super) {
        __extends(hazard_DownDangerDial, _super);
        function hazard_DownDangerDial() {
            var _this = _super.call(this) || this;
            _this.score = 100;
            _this.achievement = "Down, danger, dial";
            _this.description = "Remember, if a power line is down, then it's a danger. Stay back 10 metres and dial 911.";
            _this.image = "achv_down-danger-dial_circle.png";
            return _this;
        }
        return hazard_DownDangerDial;
    }(ActionSystem));
    PROJECT.hazard_DownDangerDial = hazard_DownDangerDial;
    var hazard_StayBack = /** @class */ (function (_super) {
        __extends(hazard_StayBack, _super);
        function hazard_StayBack() {
            var _this = _super.call(this) || this;
            _this.conversation = "Wait here while my friend and I go over to help them.";
            _this.choice = ["Yes, go ahead. I’ll wait here and watch for danger.", "I don’t think that’s safe. \nWe should all stay back. Do you have a phone to call 911?"];
            _this.correctChoice = 1;
            _this.answer = ["That’s not safe. Never approach a downed power line,\neven if you see people need help.", "Let’s stay back.\nDo you have a phone to call 911?"];
            _this.score = 100;
            return _this;
        }
        return hazard_StayBack;
    }(ActionSystem));
    PROJECT.hazard_StayBack = hazard_StayBack;
    var hazard_StayOrGetOut = /** @class */ (function (_super) {
        __extends(hazard_StayOrGetOut, _super);
        function hazard_StayOrGetOut() {
            var _this = _super.call(this) || this;
            _this.conversation = "Should we get out or stay in?";
            _this.choice = ["Get out.", "Stay in."];
            _this.correctChoice = 1;
            _this.answer = ["It's safer to stay in the car until help arrives.", "You're right. We should wait for help to arrive."];
            _this.score = 100;
            return _this;
        }
        return hazard_StayOrGetOut;
    }(ActionSystem));
    PROJECT.hazard_StayOrGetOut = hazard_StayOrGetOut;
    var hazard_Smoke = /** @class */ (function (_super) {
        __extends(hazard_Smoke, _super);
        function hazard_Smoke() {
            var _this = _super.call(this) || this;
            _this.conversation = "That doesn't smell good. Should we get out or stay in?";
            _this.choice = ["Get out.", "Stay in."];
            _this.correctChoice = 0;
            _this.answer = ["Good thinking. We should get out before the smoke gets worse.", "It's no longer safe to stay in the car."];
            _this.score = 100;
            return _this;
        }
        return hazard_Smoke;
    }(ActionSystem));
    PROJECT.hazard_Smoke = hazard_Smoke;
    var hazard_TreasureHunter = /** @class */ (function (_super) {
        __extends(hazard_TreasureHunter, _super);
        function hazard_TreasureHunter() {
            var _this = _super.call(this) || this;
            _this.score = 100;
            _this.achievement = "Treasure hunter";
            _this.description = "You've found all of the hidden Power Smart tokens.";
            _this.image = "achv_teasure-hunter_circle.png";
            return _this;
        }
        return hazard_TreasureHunter;
    }(ActionSystem));
    PROJECT.hazard_TreasureHunter = hazard_TreasureHunter;
    var ActionSystemContainer = /** @class */ (function () {
        function ActionSystemContainer() {
            //hazard_NeatTidy = new hazard_NeatTidy();
            //hazard_PetProtectorI = new hazard_PetProtectorI();
            this.hazard_DamageDetective = new hazard_DamageDetective();
            this.hazard_BathtubSafety = new hazard_BathtubSafety();
            this.hazard_HeatHero = new hazard_HeatHero();
            this.hazard_WaterWiz = new hazard_WaterWiz();
            this.hazard_SafeSockets = new hazard_SafeSockets();
            this.hazard_ApplianceExpert = new hazard_ApplianceExpert();
            this.hazard_Childproof = new hazard_Childproof();
            this.hazard_PowerLineAvoider = new hazard_PowerLineAvoider();
            this.hazard_PetProtectorII = new hazard_PetProtectorII();
            this.hazard_NoFly = new hazard_NoFly();
            this.hazard_PlayItSafe = new hazard_PlayItSafe();
            this.hazard_SafetyShuffle = new hazard_SafetyShuffle();
            this.hazard_DownDangerDial = new hazard_DownDangerDial();
            this.hazard_TreasureHunter = new hazard_TreasureHunter();
            this.actionSystems = [
                //this.hazard_NeatTidy,
                //this.hazard_PetProtectorI,
                this.hazard_DamageDetective,
                this.hazard_BathtubSafety,
                this.hazard_HeatHero,
                this.hazard_WaterWiz,
                this.hazard_SafeSockets,
                this.hazard_ApplianceExpert,
                this.hazard_Childproof,
                this.hazard_PowerLineAvoider,
                this.hazard_PetProtectorII,
                this.hazard_NoFly,
                this.hazard_PlayItSafe,
                this.hazard_SafetyShuffle,
                this.hazard_DownDangerDial,
                this.hazard_TreasureHunter
            ];
        }
        return ActionSystemContainer;
    }());
    PROJECT.ActionSystemContainer = ActionSystemContainer;
})(PROJECT || (PROJECT = {}));
/* Babylon Typescript Class Template */
var PROJECT;
/* Babylon Typescript Class Template */
(function (PROJECT) {
    var AnimationSystem = /** @class */ (function () {
        function AnimationSystem() {
            this.frameRate = 24;
        }
        AnimationSystem.prototype.CameraMovement = function () {
            PROJECT.GameSystem._GameSystem.createRadius();
            var cameraMove = new BABYLON.Animation("movein", "position", this.frameRate, BABYLON.Animation.ANIMATIONTYPE_VECTOR3, BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT);
            var movein_keys = [];
            movein_keys.push({
                frame: 0,
                value: new BABYLON.Vector3(3, 1, 16)
            });
            movein_keys.push({
                frame: this.frameRate,
                value: new BABYLON.Vector3(1, 1, 18)
            });
            cameraMove.setKeys(movein_keys);
            PROJECT.GameSystem.gameScene.beginDirectAnimation(PROJECT.GameSystem.mainCameraSecondStage, [cameraMove], 0, 25 * this.frameRate, false).onAnimationEnd = function () { AnimationSystem.Bystandards(); };
        };
        AnimationSystem.Bystandards = function () {
            PROJECT.GameGUI.crashBox.InvokeHazard("Hey, don't come any closer. \nThere was a car accident and the power lines are down.", new PROJECT.hazard_StayBack(), AnimationSystem.Bystandards2);
        };
        AnimationSystem.Bystandards2 = function () {
            PROJECT.GameGUI.crashBox.SetText("Good thinking. We should stay back and call 911.", AnimationSystem.Phone);
        };
        AnimationSystem.Phone = function () {
            PROJECT.GameGUI.phone.isVisible = true;
        };
        AnimationSystem.Meters = function () {
            PROJECT.GameGUI.crashBox.SetText("Thank you for calling. \nEmergency services are on their way. Hold tight and get to safety. You must stay back at least 10 metres.", AnimationSystem.Circles);
        };
        AnimationSystem.Circles = function () {
            var cameraMove = new BABYLON.Animation("movein", "position", 24, BABYLON.Animation.ANIMATIONTYPE_VECTOR3, BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT);
            var movein_keys = [];
            movein_keys.push({
                frame: 0,
                value: new BABYLON.Vector3(1, 1, 18)
            });
            movein_keys.push({
                frame: 3 * 24,
                value: new BABYLON.Vector3(13, 50, 33)
            });
            cameraMove.setKeys(movein_keys);
            var rotate = new BABYLON.Animation("rotate", "rotation.x", 24, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT);
            var rotate_keys = [];
            rotate_keys.push({
                frame: 0,
                value: 0
            });
            rotate_keys.push({
                frame: 3 * 24,
                value: Math.PI / 2
            });
            rotate.setKeys(rotate_keys);
            PROJECT.GameSystem.gameScene.beginDirectAnimation(PROJECT.GameSystem.mainCameraSecondStage, [cameraMove, rotate], 0, 25 * 24, false).onAnimationEnd = function () { AnimationSystem.Radius(); };
        };
        AnimationSystem.Radius = function () {
            PROJECT.GameGUI.crashBox.SetText("Good work, but how far back is 10 metres?", AnimationSystem.Show);
        };
        AnimationSystem.Show = function () {
            PROJECT.GameSystem._GameSystem.showRadius(true);
        };
        AnimationSystem.SafeAndSound = function () {
            PROJECT.GameSystem._GameSystem.showRadius(false);
            PROJECT.GameGUI.crashBox.SetText("You are safe and sound but what about the people in the car?.", AnimationSystem.MoveInsideCar);
        };
        AnimationSystem.MoveInsideCar = function () {
            var cameraMove = new BABYLON.Animation("movein", "position", 24, BABYLON.Animation.ANIMATIONTYPE_VECTOR3, BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT);
            var movein_keys = [];
            movein_keys.push({
                frame: 0,
                value: new BABYLON.Vector3(13, 40, 33)
            });
            movein_keys.push({
                frame: 3 * 24,
                value: new BABYLON.Vector3(11, 0.3, 31.5)
            });
            cameraMove.setKeys(movein_keys);
            var rotate = new BABYLON.Animation("rotate", "rotation.x", 24, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT);
            var rotate_keys = [];
            rotate_keys.push({
                frame: 0,
                value: Math.PI / 2
            });
            rotate_keys.push({
                frame: 3 * 24,
                value: 0
            });
            rotate.setKeys(rotate_keys);
            var rotatey = new BABYLON.Animation("rotatey", "rotation.y", 24, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT);
            var rotatey_keys = [];
            rotatey_keys.push({
                frame: 0,
                value: 0
            });
            rotatey_keys.push({
                frame: 3 * 24,
                value: Math.PI / 4
            });
            rotatey.setKeys(rotatey_keys);
            PROJECT.GameSystem.gameScene.beginDirectAnimation(PROJECT.GameSystem.mainCameraSecondStage, [cameraMove, rotate, rotatey], 0, 25 * 24, false).onAnimationEnd = function () { AnimationSystem.ShouldWeLeave(); };
        };
        AnimationSystem.ShouldWeLeave = function () {
            PROJECT.GameGUI.crashBox.InvokeHazard("Oh no, what should we do?", new PROJECT.hazard_StayOrGetOut(), AnimationSystem.Smoke);
        };
        AnimationSystem.Smoke = function () {
            PROJECT.Particles.CarSmoke();
            PROJECT.GameGUI.crashBox.SetText("The car has started to smoke.", AnimationSystem.SmokeQuestion);
        };
        AnimationSystem.SmokeQuestion = function () {
            PROJECT.GameGUI.crashBox.InvokeHazard("Should we Get out or stay in?", new PROJECT.hazard_Smoke(), AnimationSystem.SmokeLeave);
        };
        AnimationSystem.SmokeLeave = function () {
            PROJECT.GameGUI.crashBox.SetText("In order to avoid being electrocuted, we should jump clear from the car without touching it and land with both feet together.", AnimationSystem.Jump);
        };
        AnimationSystem.Jump = function () {
            var cameraMove = new BABYLON.Animation("movein", "position", 24, BABYLON.Animation.ANIMATIONTYPE_VECTOR3, BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT);
            var movein_keys = [];
            movein_keys.push({
                frame: 0,
                value: new BABYLON.Vector3(11, 0.3, 31.5)
            });
            movein_keys.push({
                frame: 3 * 24,
                value: new BABYLON.Vector3(11, 1, 31.5)
            });
            cameraMove.setKeys(movein_keys);
            var rotatey = new BABYLON.Animation("rotatey", "rotation.y", 24, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT);
            var rotatey_keys = [];
            rotatey_keys.push({
                frame: 0,
                value: Math.PI / 4
            });
            rotatey_keys.push({
                frame: 3 * 24,
                value: Math.PI * 1.2
            });
            rotatey.setKeys(rotatey_keys);
            PROJECT.GameSystem.gameScene.beginDirectAnimation(PROJECT.GameSystem.mainCameraSecondStage, [cameraMove, rotatey], 0, 25 * 24, false).onAnimationEnd = function () { AnimationSystem.CarJump(); };
        };
        AnimationSystem.CarJump = function () {
            PROJECT.GameGUI.jump.isVisible = true;
        };
        AnimationSystem.Feet = function () {
            PROJECT.GameGUI.jumpFeet.isVisible = true;
        };
        AnimationSystem.EndScreen = function () {
            PROJECT.GameGUI.scoreHud.isVisible = false;
            PROJECT.GameSystem.soundSystem.s2_placeholder_loop.stop();
            PROJECT.GameSystem.soundSystem.s2_placeholder_loop.dispose();
            PROJECT.GameSystem.soundSystem.End_Outro.play();
            PROJECT.GameGUI.crashBox.SetText("You did an excellent job demonstrating home\nelectrical safety and learning how remembering\nDown, Danger, Dial can save your life.\nLet’s see how well you did.", AnimationSystem.EndScore);
        };
        AnimationSystem.EndScore = function () {
            PROJECT.GameGUI.scoreHud.isVisible = false;
            //GameGUI.achievmentsScreen.isVisible = true;
            PROJECT.GameGUI.mainscreen.endGameButton();
            PROJECT.GameGUI.powerSmartScreen.refresh();
            PROJECT.GameGUI.powerSmartScreen.show();
            PROJECT.GameGUI.crashBox.SetText("You should be proud of your Power Smarts.\nLet's see how well you did.");
        };
        return AnimationSystem;
    }());
    PROJECT.AnimationSystem = AnimationSystem;
})(PROJECT || (PROJECT = {}));
/* Babylon Scene Controller Template */
var PROJECT;
/* Babylon Scene Controller Template */
(function (PROJECT) {
    var GameControls = /** @class */ (function () {
        function GameControls() {
            this.difficulty = 1;
            this.sensitivity = 1.7;
            this.isPaused = false;
            //public secondLevel: boolean = false;
            this.gameFinished = false;
        }
        GameControls.prototype.SetPause = function (value) {
            this.isPaused = value;
            GameSystem._GameSystem.toggleMovement(value);
            PROJECT.GameGUI.mainscreen.setVisible(value);
        };
        GameControls.prototype.achievmentControl = function (value) {
            this.isPaused = !value;
            if (PROJECT.GameGUI.rightContainer != null) {
                PROJECT.GameGUI.rightContainer.isVisible = value;
            }
            if (PROJECT.GameGUI.scoreHud != null) {
                PROJECT.GameGUI.scoreHud.isVisible = value;
            }
            if (!GameSystem.firstStageComplete && PROJECT.GameGUI.timer != null) {
                PROJECT.GameGUI.timer.isVisible = value;
            }
        };
        GameControls.prototype.setSensitivity = function (n) {
            // if(n <= 0.0){
            //     n = 1;
            // }
            GameSystem.GameControls.sensitivity = n / 1000;
            GameSystem.mainCamera.angularSensibility = Math.abs(n - 4000);
        };
        GameControls.soundToggle = true;
        GameControls.musicToggle = true;
        return GameControls;
    }());
    var SoundSystem = /** @class */ (function () {
        function SoundSystem() {
        }
        SoundSystem.prototype.LoadSounds = function () {
            this.Achievement_Popup = new BABYLON.Sound("", "./scenes/sound/Achievement_Popup.mp3", GameSystem.gameScene);
            this.Bathtub = new BABYLON.Sound("", "./scenes/sound/Bathtub.mp3", GameSystem.gameScene);
            this.Car_Crash = new BABYLON.Sound("", "./scenes/sound/Car_Crash.mp3", GameSystem.gameScene);
            this.Correct_Answer = new BABYLON.Sound("", "./scenes/sound/Correct_Answer.mp3", GameSystem.gameScene);
            this.CountDown = new BABYLON.Sound("", "./scenes/sound/CountDown.mp3", GameSystem.gameScene);
            this.Door_Open = new BABYLON.Sound("", "./scenes/sound/Door_Open.mp3", GameSystem.gameScene);
            this.End_Outro = new BABYLON.Sound("", "./scenes/sound/End_Outro.mp3", GameSystem.gameScene);
            //this.Hardly_Working      = new BABYLON.Sound("", "./scenes/sound/Hardly_Working.mp3", GameSystem.gameScene);
            this.Highlighted_Objects = new BABYLON.Sound("", "./scenes/sound/Highlighted_Objects.mp3", GameSystem.gameScene);
            this.Menu_Butons = new BABYLON.Sound("", "./scenes/sound/Menu_Butons.mp3", GameSystem.gameScene);
            this.PS_Token = new BABYLON.Sound("", "./scenes/sound/PS_Token.mp3", GameSystem.gameScene);
            this.Wrong_Answer = new BABYLON.Sound("", "./scenes/sound/Wrong_Answer.mp3", GameSystem.gameScene);
            this.call = new BABYLON.Sound("", "./scenes/sound/phone-answer.mp3", GameSystem.gameScene);
            this.keytone = new BABYLON.Sound("", "./scenes/sound/phone-dial-tone.mp3", GameSystem.gameScene);
            this.Shuffle_left = new BABYLON.Sound("", "./scenes/sound/shuffle-left.mp3", GameSystem.gameScene);
            this.Shuffle_right = new BABYLON.Sound("", "./scenes/sound/shuffle-right.mp3", GameSystem.gameScene);
            this.Vacum_loop = new BABYLON.Sound("", "./scenes/sound/Vacuum-loop.mp3", GameSystem.gameScene, null, { loop: true, autoplay: true, spatialSound: true, distanceModel: "exponential", rolloffFactor: 2 });
            this.Menu_placeholder_loop = new BABYLON.Sound("", "./scenes/sound/menu-placeholder-loop.mp3", GameSystem.gameScene, null, { loop: true, autoplay: true });
            this.s1_placeholder_loop = new BABYLON.Sound("", "./scenes/sound/s1-placeholder-loop.mp3", GameSystem.gameScene, null, { loop: true, autoplay: false });
            this.s2_placeholder_loop = new BABYLON.Sound("", "./scenes/sound/s2-placeholder-loop.mp3", GameSystem.gameScene, null, { loop: true, autoplay: false });
        };
        SoundSystem.setSound = function (n) {
            BABYLON.Engine.audioEngine.masterGain.gain.value = n / 10;
        };
        SoundSystem.toggleSound = function () {
            GameSystem.gameScene.audioEnabled = !GameSystem.gameScene.audioEnabled;
        };
        return SoundSystem;
    }());
    PROJECT.SoundSystem = SoundSystem;
    var GameSystem = /** @class */ (function (_super) {
        __extends(GameSystem, _super);
        function GameSystem(owner, scene, tick, propertyBag) {
            if (tick === void 0) { tick = true; }
            if (propertyBag === void 0) { propertyBag = {}; }
            var _this = _super.call(this, owner, scene, tick, propertyBag) || this;
            // static hideCrashObject: BABYLON.AbstractMesh;
            // static showCrashObject: BABYLON.AbstractMesh[];
            _this.carCrashRad = [];
            _this.SetScene();
            return _this;
            //Don't know why I don't have access to the scene instance. 
            //BABYLON.SceneManager.GetInstance().enablePointerLock();
        }
        GameSystem.prototype.SetScene = function () {
            GameSystem.gameScene = this.scene;
        };
        GameSystem.prototype.GetScene = function () {
            if (GameSystem.gameScene == null) {
                this.SetScene();
            }
        };
        GameSystem.prototype.ready = function () {
            GameSystem._GameSystem = this;
            GameSystem.mainCamera = this.scene.activeCamera;
            GameSystem.playerSpeed = GameSystem.mainCamera.speed;
            this.scene.collisionsEnabled = true;
            GameSystem.mainCamera.checkCollisions = true;
            //GameSystem.mainCameraSecondStage = <BABYLON.TargetCamera>this.getProperty("mainCameraSecondStage", null);
            GameSystem.tubCamera = this.getProperty("Hazard_TubCamera", null);
            GameSystem.kiteCameraTransform = this.getProperty("Hazard_KiteCamera", null);
            GameSystem.soundSystem = new SoundSystem();
            GameSystem.soundSystem.LoadSounds();
            GameSystem.soundSystem.Vacum_loop.attachToMesh(this.scene.getMeshByID(this.getProperty("vacuum", null).id));
        };
        GameSystem.prototype.start = function () {
            GameSystem.titleCamera = new BABYLON.TargetCamera("titleCam", new BABYLON.Vector3(9, 2, 7), this.scene);
            this.scene.switchActiveCamera(GameSystem.titleCamera);
            PROJECT.Particles.Sparks();
        };
        GameSystem.prototype.update = function () {
            PROJECT.GameGUI.jump.image.metadata.distance += GameSystem.gameScene.getEngine().getDeltaTime() * 0.001 * PROJECT.GameGUI.jump.image.metadata.speed;
            PROJECT.GameGUI.jump.iconPos = (BABYLON.Scalar.PingPong(PROJECT.GameGUI.jump.image.metadata.distance, 2) - 1) * 400;
            PROJECT.GameGUI.jump.image.leftInPixels = PROJECT.GameGUI.jump.iconPos;
            // var value = 0;
            // BABYLON.Scalar.PingPong(value, 1);
            // console.log(value);
            // if(GameSystem.timeScoreStart){
            //     if(GameSystem.timeScore >= 0){
            //         GameSystem.timeScore -= 0.2;
            //     }
            // }
            //GameSystem.titleCamera.rotation.y += 0.001;
        };
        ///false turns on movement
        GameSystem.prototype.toggleMovement = function (value) {
            if (!value) {
                GameSystem.mainCamera.speed = GameSystem.playerSpeed;
            }
            else {
                GameSystem.mainCamera.speed = 0;
            }
        };
        //BABYLON.SceneManager.IsAndroid();
        GameSystem.createAnimations = function (obj, newPos) {
            var ret = [];
            var keys = [];
            var animation = new BABYLON.Animation("move", "position", 60, BABYLON.Animation.ANIMATIONTYPE_VECTOR3, BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);
            var startingPos = obj.position.clone();
            keys.push({
                frame: 0,
                value: startingPos
            });
            keys.push({
                frame: 120,
                value: newPos
            });
            keys.push({
                frame: 240,
                value: startingPos
            });
            animation.setKeys(keys);
            ret.push(animation);
            return ret;
        };
        ;
        GameSystem.prototype.switchCamera = function (cameraName) {
            switch (cameraName) {
                case "kiteCamera": {
                    var myCamera = new BABYLON.TargetCamera("kiteCam", new BABYLON.Vector3(GameSystem.kiteCameraTransform.position.x, GameSystem.kiteCameraTransform.position.y, GameSystem.kiteCameraTransform.position.z), this.scene);
                    myCamera.rotation.y = Math.PI;
                    this.scene.switchActiveCamera(myCamera);
                    GameSystem.tap = true;
                    PROJECT.GameGUI.kite.show(GameSystem.ActionSystemContainer.hazard_NoFly, "That kite is flying too close to the power line. \n Tap quickly to pull it down.");
                    break;
                }
                case "Hazard_TubCamera": {
                    var myCamera = new BABYLON.TargetCamera("tubCam", new BABYLON.Vector3(GameSystem.tubCamera.position.x, GameSystem.tubCamera.position.y, GameSystem.tubCamera.position.z), this.scene);
                    myCamera.rotation = GameSystem.tubCamera.rotation;
                    this.scene.switchActiveCamera(myCamera);
                    GameSystem.tap = true;
                    PROJECT.GameGUI.fullUI.show(GameSystem.ActionSystemContainer.hazard_BathtubSafety, "/scenes/tutorial_tub-plug-icon.png", "That hair dryer is too close to the bathwater. Tap quickly to drain the tub.");
                    GameSystem.soundSystem.Bathtub.play();
                    this.scene.getMeshByID(this.getProperty("bathWater", null).id).isVisible = false;
                    break;
                }
                case "mainCamera": {
                    this.scene.switchActiveCamera(GameSystem.mainCamera);
                    break;
                }
                case "secondCamera": {
                    GameSystem.mainCameraSecondStage = new BABYLON.TargetCamera("secondStage", new BABYLON.Vector3(3, 1, 16), this.scene);
                    this.scene.switchActiveCamera(GameSystem.mainCameraSecondStage);
                    break;
                }
                case "titleCamera": {
                    break;
                }
            }
        };
        GameSystem.ShowCrash = function () {
            GameSystem.crash.ShowCrash();
        };
        GameSystem.prototype.showRadius = function (b) {
            this.carCrashRad.forEach(function (element) {
                element.visibility = (b) ? 1 : 0;
            });
        };
        GameSystem.prototype.createRadius = function () {
            var m1 = new BABYLON.StandardMaterial("m1", this.scene);
            m1.diffuseColor = BABYLON.Color3.White();
            var m2 = new BABYLON.StandardMaterial("m2", this.scene);
            m2.diffuseColor = BABYLON.Color3.FromInts(80, 184, 72);
            var m3 = new BABYLON.StandardMaterial("m2", this.scene);
            m3.diffuseColor = BABYLON.Color3.FromInts(250, 70, 22);
            var radiusPosition = new BABYLON.Vector3(13, 0, 33);
            var t1 = BABYLON.MeshBuilder.CreateTorus("t2", { diameter: 7, thickness: 1, tessellation: 64, sideOrientation: BABYLON.Mesh.DOUBLESIDE }, this.scene);
            t1.scaling.y = .1;
            t1.material = m1;
            t1.position = radiusPosition;
            t1.actionManager = new BABYLON.ActionManager(this.scene);
            t1.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickUpTrigger, function () {
                t1.material = m3;
                GameSystem.soundSystem.Wrong_Answer.play();
                PROJECT.GameGUI.crashBox.SetText("That's closer than 10 metres.\nHint: It's about the length of a full size school bus.");
            }));
            this.carCrashRad.push(t1);
            var t2 = BABYLON.MeshBuilder.CreateTorus("t4", { diameter: 16, thickness: 1, tessellation: 64, sideOrientation: BABYLON.Mesh.DOUBLESIDE }, this.scene);
            t2.scaling.y = .1;
            t2.material = m1;
            t2.position = radiusPosition;
            t2.actionManager = new BABYLON.ActionManager(this.scene);
            t2.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickUpTrigger, function () {
                t2.material = m3;
                GameSystem.soundSystem.Wrong_Answer.play();
                PROJECT.GameGUI.crashBox.SetText("That's closer than 10 metres.\nHint: It's about the length of a full size school bus.");
            }));
            this.carCrashRad.push(t2);
            var t3 = BABYLON.MeshBuilder.CreateTorus("t4", { diameter: 25, thickness: 1, tessellation: 64, sideOrientation: BABYLON.Mesh.DOUBLESIDE }, this.scene);
            t3.scaling.y = .1;
            t3.material = m1;
            t3.position = radiusPosition;
            t3.actionManager = new BABYLON.ActionManager(this.scene);
            t3.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickUpTrigger, function () {
                t3.material = m3;
                GameSystem.soundSystem.Wrong_Answer.play();
                PROJECT.GameGUI.crashBox.SetText("That's closer than 10 metres.\nHint: It's about the length of a full size school bus.");
            }));
            this.carCrashRad.push(t3);
            var t4 = BABYLON.MeshBuilder.CreateTorus("t4", { diameter: 34, thickness: 1, tessellation: 64, sideOrientation: BABYLON.Mesh.DOUBLESIDE }, this.scene);
            t4.scaling.y = .1;
            t4.material = m1;
            t4.position = radiusPosition;
            t4.actionManager = new BABYLON.ActionManager(this.scene);
            t4.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickUpTrigger, function () {
                t4.material = m2;
                GameSystem.soundSystem.Correct_Answer.play();
                PROJECT.GameGUI.crashBox.SetText("That looks right. Remember that 10 metres is\nabout the length of a full size school bus.", PROJECT.AnimationSystem.SafeAndSound);
            }));
            this.carCrashRad.push(t4);
            this.showRadius(false);
        };
        GameSystem.GameControls = new GameControls();
        GameSystem.soundSystem = new SoundSystem();
        GameSystem.ActionSystemContainer = new PROJECT.ActionSystemContainer();
        GameSystem.firstStageComplete = false;
        //static timeScore = 0;
        GameSystem.tubClicks = 0;
        GameSystem.timeScoreStart = false;
        GameSystem.tap = false;
        GameSystem.triggeredOutlets = false;
        GameSystem.hasToaster = false;
        return GameSystem;
    }(BABYLON.MeshComponent));
    PROJECT.GameSystem = GameSystem;
})(PROJECT || (PROJECT = {}));
/* Babylon Typescript Class Template */
var PROJECT;
/* Babylon Typescript Class Template */
(function (PROJECT) {
    var token = /** @class */ (function () {
        function token() {
        }
        return token;
    }());
    var scoreSystem = /** @class */ (function () {
        function scoreSystem() {
        }
        scoreSystem.getScore = function () {
            return scoreSystem.score;
        };
        scoreSystem.setScore = function (n) {
            scoreSystem.score += n;
            PROJECT.GameGUI.scoreHud.updateScoreHud();
            if (scoreSystem.score >= 600 && !scoreSystem.hasShownCrash && !PROJECT.GameSystem.firstStageComplete) { //600
                PROJECT.GameGUI.StartCrash();
                scoreSystem.hasShownCrash = true;
            }
            if (scoreSystem.score >= 1100 && !PROJECT.GameSystem.firstStageComplete) { //1100
                PROJECT.GameGUI.ShowCrash();
            }
            scoreSystem.hazardsFound++;
        };
        scoreSystem.saftyScoreTally = function () {
            if (this.powerSmartScore < 40) {
                return "Oh no...";
            }
            if (this.IsBetween(this.powerSmartScore, 40, 59)) {
                return "Power Smart";
            }
            if (this.IsBetween(this.powerSmartScore, 50, 69)) {
                return "Super Power Smart";
            }
            if (this.IsBetween(this.powerSmartScore, 70, 89)) {
                return "Safety whiz";
            }
            if (this.IsBetween(this.powerSmartScore, 90, 99)) {
                return "Safety expert";
            }
            if (this.powerSmartScore >= 100) {
                return "Safety Super Star!";
            }
        };
        scoreSystem.IsBetween = function (x, y, z) {
            return x >= y && x <= z;
        };
        scoreSystem.score = 0;
        scoreSystem.hasShownCrash = false;
        scoreSystem.continued = false;
        scoreSystem.powerSmartScore = 0;
        scoreSystem.currentToken = 0;
        scoreSystem.hazardsFound = 0;
        scoreSystem.hazards = 0;
        return scoreSystem;
    }());
    PROJECT.scoreSystem = scoreSystem;
})(PROJECT || (PROJECT = {}));
/* Babylon Scene Controller Template */
var PROJECT;
/* Babylon Scene Controller Template */
(function (PROJECT) {
    var MainScreen = /** @class */ (function (_super) {
        __extends(MainScreen, _super);
        function MainScreen() {
            var _this = _super.call(this) || this;
            _this.textTitle = new BABYLON.GUI.TextBlock();
            _this.continue = BABYLON.GUI.Button.CreateSimpleButton("game", "Start Game");
            _this.achievments = BABYLON.GUI.Button.CreateSimpleButton("achievments", "Achievements");
            _this.joystickToggle = BABYLON.GUI.Button.CreateSimpleButton("JoyStickToggle", "Toggle joysticks");
            _this.joystickButton = BABYLON.GUI.Button.CreateImageButton("joystick", "Toggle Joystick on/off", "./scenes/icons/menu_joyticks.png");
            _this.showJoystick = false;
            _this.gameStarted = false;
            _this.soundToggle = false;
            _this.slider1 = new BABYLON.GUI.Slider();
            _this.slider2 = new BABYLON.GUI.Slider();
            _this.isVisible = false;
            _this.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
            _this.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER;
            _this.width = "100%";
            _this.height = "100%";
            _this.zIndex = 2;
            _this.alpha = 0.6;
            _this.background = "black";
            _this.isPointerBlocker = true;
            var parentStack = new BABYLON.GUI.StackPanel();
            parentStack.width = "100%";
            parentStack.height = "900px";
            parentStack.topInPixels = 80;
            parentStack.alpha = (1 / _this.alpha);
            var title = new BABYLON.GUI.Image("img", "./scenes/img/header/BCH_ESG_logo-hori.png");
            title.heightInPixels = 150;
            title.widthInPixels = 800;
            parentStack.addControl(title);
            _this.continue.widthInPixels = 500;
            _this.continue.heightInPixels = 130;
            _this.continue.thickness = 0;
            _this.continue.paddingBottom = "40px";
            _this.continue.fontSize = 40;
            _this.continue.cornerRadius = 15;
            _this.continue.background = "#51AD61";
            _this.continue.color = "white";
            _this.continue.onPointerDownObservable.add(function () {
                _this.isVisible = false;
                PROJECT.GameSystem.GameControls.SetPause(false);
                if (!_this.gameStarted) {
                    _this.gameStarted = true;
                    _this.continue.textBlock.text = "Continue";
                    PROJECT.GameSystem.soundSystem.Menu_Butons.play();
                    GameGUI.StartTutorial();
                    PROJECT.GameSystem.soundSystem.Menu_placeholder_loop.stop(0);
                    PROJECT.GameSystem.soundSystem.Menu_placeholder_loop.dispose();
                    PROJECT.GameSystem.soundSystem.s1_placeholder_loop.play(0);
                }
            });
            parentStack.addControl(_this.continue);
            _this.achievments.widthInPixels = 500;
            _this.achievments.heightInPixels = 130;
            _this.achievments.fontSize = 40;
            _this.achievments.paddingTop = "10px";
            _this.achievments.cornerRadius = 15;
            _this.achievments.paddingBottom = "40px";
            _this.achievments.background = "white";
            _this.achievments.color = "#10A3C8";
            _this.achievments.thickness = 6;
            _this.achievments.onPointerDownObservable.add(function () {
                _this.isVisible = false;
                GameGUI.achievmentsScreen.isVisible = true;
                GameGUI.achievmentsScreen.refreshCards();
            });
            parentStack.addControl(_this.achievments);
            _this.joystickToggle.widthInPixels = 500;
            _this.joystickToggle.paddingBottom = "20px";
            _this.joystickToggle.heightInPixels = 70;
            _this.joystickToggle.background = "white";
            _this.joystickToggle.fontSize = 40;
            _this.joystickToggle.color = "#10A3C8";
            _this.joystickToggle.cornerRadius = 15;
            if (_this.showJoystick) {
                _this.joystickToggle.color = "#10A3C8";
            }
            else {
                _this.joystickToggle.color = "grey";
            }
            _this.joystickToggle.onPointerDownObservable.add(function () {
                _this.showJoystick = !_this.showJoystick;
                GameGUI.thumb.Show(_this.showJoystick);
                if (_this.showJoystick) {
                    _this.joystickToggle.color = "#10A3C8";
                }
                else {
                    _this.joystickToggle.color = "grey";
                }
            });
            parentStack.addControl(_this.joystickToggle);
            var stack = new BABYLON.GUI.StackPanel();
            stack.width = "500px";
            stack.height = "100px";
            stack.isVertical = false;
            var icon = BABYLON.GUI.Button.CreateImageButton("but", "", "./scenes/menu_music.png");
            icon.widthInPixels = 100;
            icon.heightInPixels = 100;
            icon.image.widthInPixels = 100;
            icon.image.heightInPixels = 100;
            icon.thickness = 0;
            icon.onPointerDownObservable.add(function () {
                PROJECT.SoundSystem.toggleSound();
            });
            stack.addControl(icon);
            _this.slider1.background = "#10A3C8";
            _this.slider1.color = "white";
            _this.slider1.height = "50px";
            _this.slider1.onValueChangedObservable.add(function (value) {
                PROJECT.SoundSystem.setSound(value);
            });
            stack.addControl(_this.slider1);
            parentStack.addControl(stack);
            stack = new BABYLON.GUI.StackPanel();
            stack.width = "500px";
            stack.height = "100px";
            stack.isVertical = false;
            var sensitivity = new BABYLON.GUI.Image("img", "./scenes/img/icons/menu_mouse.png");
            sensitivity.widthInPixels = 100;
            sensitivity.heightInPixels = 100;
            stack.addControl(sensitivity);
            _this.slider2.background = "#10A3C8";
            _this.slider2.color = "white";
            _this.slider2.height = "50px";
            _this.slider2.minimum = 1000;
            _this.slider2.maximum = 3999;
            _this.slider2.value = 2500;
            _this.slider2.onValueChangedObservable.add(function (value) {
                PROJECT.GameSystem.GameControls.setSensitivity(value);
            });
            stack.addControl(_this.slider2);
            parentStack.addControl(stack);
            _this.addControl(parentStack);
            return _this;
        }
        MainScreen.prototype.endGameButton = function () {
            this.continue.textBlock.text = "Finish game";
            this.continue.onPointerDownObservable.add(function () {
                location.reload();
            });
        };
        MainScreen.prototype.setVisible = function (value) {
            this.isVisible = value;
        };
        return MainScreen;
    }(BABYLON.GUI.Rectangle));
    var Thumb = /** @class */ (function (_super) {
        __extends(Thumb, _super);
        function Thumb() {
            var _this = _super.call(this) || this;
            var adt = GameGUI._advancedDynamicTexture;
            var xAddPos = 0;
            var yAddPos = 0;
            var xAddRot = 0;
            var yAddRot = 0;
            var translateTransform;
            var leftPuckisDown = false;
            var rightPuckisDown = false;
            _this.leftThumbContainer = makeThumbArea("leftThumb", 2, "#10A3C8", null);
            _this.leftThumbContainer.height = "300px";
            _this.leftThumbContainer.width = "300px";
            _this.leftThumbContainer.isPointerBlocker = true;
            _this.leftThumbContainer.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
            _this.leftThumbContainer.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;
            _this.leftThumbContainer.alpha = 0.4;
            var leftInnerThumbContainer = makeThumbArea("leftInnterThumb", 4, "#10A3C8", null);
            leftInnerThumbContainer.height = "80px";
            leftInnerThumbContainer.width = "80px";
            leftInnerThumbContainer.isPointerBlocker = true;
            leftInnerThumbContainer.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
            leftInnerThumbContainer.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER;
            var leftPuck = makeThumbArea("leftPuck", 0, "#10A3C8", "#10A3C8");
            leftPuck.height = "60px";
            leftPuck.width = "60px";
            leftPuck.isPointerBlocker = true;
            leftPuck.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
            leftPuck.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER;
            _this.leftThumbContainer.onPointerDownObservable.add(function (coordinates) {
                leftPuck.isVisible = true;
                leftPuck.left = coordinates.x - (_this.leftThumbContainer._currentMeasure.width);
                leftPuck.top = adt.getSize().height - coordinates.y - (_this.leftThumbContainer._currentMeasure.height) * -1;
                leftPuckisDown = true;
                _this.leftThumbContainer.alpha = 0.9;
            });
            _this.leftThumbContainer.onPointerUpObservable.add(function (coordinates) {
                xAddPos = 0;
                yAddPos = 0;
                leftPuckisDown = false;
                leftPuck.isVisible = false;
                _this.leftThumbContainer.alpha = 0.4;
            });
            _this.leftThumbContainer.onPointerMoveObservable.add(function (coordinates) {
                if (leftPuckisDown) {
                    xAddPos = coordinates.x - (_this.leftThumbContainer._currentMeasure.width * .5);
                    yAddPos = adt.getSize().height - coordinates.y - (_this.leftThumbContainer._currentMeasure.height * .5);
                    leftPuck.left = xAddPos;
                    leftPuck.top = yAddPos * -1;
                }
            });
            adt.addControl(_this.leftThumbContainer);
            _this.leftThumbContainer.addControl(leftInnerThumbContainer);
            _this.leftThumbContainer.addControl(leftPuck);
            leftPuck.isVisible = false;
            _this.rightThumbContainer = makeThumbArea("rightThumb", 2, "#10A3C8", null);
            _this.rightThumbContainer.height = "300px";
            _this.rightThumbContainer.width = "300px";
            _this.rightThumbContainer.isPointerBlocker = true;
            _this.rightThumbContainer.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_RIGHT;
            _this.rightThumbContainer.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;
            _this.rightThumbContainer.alpha = 0.4;
            var rightInnerThumbContainer = makeThumbArea("rightInnterThumb", 4, "#10A3C8", null);
            rightInnerThumbContainer.height = "80px";
            rightInnerThumbContainer.width = "80px";
            rightInnerThumbContainer.isPointerBlocker = true;
            rightInnerThumbContainer.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
            rightInnerThumbContainer.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER;
            var rightPuck = makeThumbArea("rightPuck", 0, "#10A3C8", "#10A3C8");
            rightPuck.height = "60px";
            rightPuck.width = "60px";
            rightPuck.isPointerBlocker = true;
            rightPuck.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
            rightPuck.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER;
            _this.rightThumbContainer.onPointerDownObservable.add(function (coordinates) {
                rightPuck.isVisible = true;
                rightPuck.left = adt.getSize().width - coordinates.x - (_this.rightThumbContainer._currentMeasure.width) * -1;
                rightPuck.top = adt.getSize().height - coordinates.y - (_this.rightThumbContainer._currentMeasure.height * -1);
                rightPuckisDown = true;
                _this.rightThumbContainer.alpha = 0.9;
            });
            _this.rightThumbContainer.onPointerUpObservable.add(function (coordinates) {
                xAddRot = 0;
                yAddRot = 0;
                rightPuckisDown = false;
                rightPuck.isVisible = false;
                _this.rightThumbContainer.alpha = 0.4;
            });
            _this.rightThumbContainer.onPointerMoveObservable.add(function (coordinates) {
                if (rightPuckisDown) {
                    xAddRot = adt.getSize().width - coordinates.x - (_this.rightThumbContainer._currentMeasure.width * .5);
                    yAddRot = adt.getSize().height - coordinates.y - (_this.rightThumbContainer._currentMeasure.height * .5);
                    rightPuck.left = xAddRot * -1;
                    rightPuck.top = yAddRot * -1;
                }
            });
            adt.addControl(_this.rightThumbContainer);
            _this.rightThumbContainer.addControl(rightInnerThumbContainer);
            _this.rightThumbContainer.addControl(rightPuck);
            rightPuck.isVisible = false;
            PROJECT.GameSystem.gameScene.registerBeforeRender(function () {
                translateTransform = BABYLON.Vector3.TransformCoordinates(new BABYLON.Vector3(xAddPos / 1000, 0, yAddPos / 1000), BABYLON.Matrix.RotationY(PROJECT.GameSystem.mainCamera.rotation.y));
                PROJECT.GameSystem.mainCamera.cameraDirection.addInPlace(translateTransform);
                PROJECT.GameSystem.mainCamera.cameraRotation.y += (xAddRot * PROJECT.GameSystem.GameControls.sensitivity) / 10000 * -1;
                PROJECT.GameSystem.mainCamera.cameraRotation.x += (yAddRot * PROJECT.GameSystem.GameControls.sensitivity) / 10000 * -1;
            });
            function makeThumbArea(name, thickness, color, background) {
                var rect = new BABYLON.GUI.Ellipse();
                rect.name = name;
                rect.thickness = thickness;
                rect.color = color;
                rect.background = background;
                rect.paddingLeft = "0px";
                rect.paddingRight = "0px";
                rect.paddingTop = "0px";
                rect.paddingBottom = "0px";
                return rect;
            }
            return _this;
        }
        Thumb.prototype.Show = function (value) {
            this.rightThumbContainer.isVisible = value;
            this.leftThumbContainer.isVisible = value;
        };
        return Thumb;
    }(BABYLON.GUI.Ellipse));
    var GameTimer = /** @class */ (function (_super) {
        __extends(GameTimer, _super);
        function GameTimer(i) {
            var _this = _super.call(this) || this;
            _this.widthInPixels = 500;
            _this.heightInPixels = 150;
            _this.topInPixels = 4;
            _this.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
            _this.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
            _this.paddingLeftInPixels = 100;
            _this.isVertical = false;
            var image = new BABYLON.GUI.Image("GameTimerImage", "./scenes/img/hud_timer-bar.png");
            _this.addControl(image);
            var textBlock = new BABYLON.GUI.TextBlock("GameTimerTextBlock", new String(Math.floor(i / 60)) + ":00");
            textBlock.heightInPixels = 100;
            textBlock.widthInPixels = 400;
            textBlock.paddingLeftInPixels = 100;
            textBlock.fontSizeInPixels = 72;
            textBlock.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
            textBlock.color = "white";
            _this.addControl(textBlock);
            var handle = window.setInterval(function () {
                if (!PROJECT.GameSystem.GameControls.isPaused && !PROJECT.GameSystem.firstStageComplete) {
                    i--;
                    var minutes = Math.floor(i / 60);
                    var seconds = i - minutes * 60;
                    textBlock.text = new String(minutes) + ":" + new String(('0' + Math.floor(seconds % 60)).slice(-2));
                    if (i < 30) {
                        if (i < 10) {
                            textBlock.color = "red";
                        }
                        else {
                            textBlock.color = "yellow";
                        }
                    }
                    if (i === 0) {
                        if (PROJECT.scoreSystem.continued) {
                            GameGUI.ShowCrash();
                            window.clearInterval(handle);
                            _this.dispose();
                            return;
                        }
                        GameGUI.timeUp.isVisible = true;
                        window.clearInterval(handle);
                        _this.dispose();
                    }
                }
            }, 1000);
            return _this;
        }
        return GameTimer;
    }(BABYLON.GUI.StackPanel));
    var TimeUp = /** @class */ (function (_super) {
        __extends(TimeUp, _super);
        function TimeUp() {
            var _this = _super.call(this) || this;
            _this.isVisible = false;
            _this.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
            _this.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER;
            _this.width = "100%";
            _this.height = "100%";
            _this.isPointerBlocker = true;
            _this.topInPixels = 150;
            var timeupImage = new BABYLON.GUI.Image("TimeUpImage", "./scenes/img/alerts/times_up.png");
            timeupImage.widthInPixels = 600;
            timeupImage.heightInPixels = 100;
            timeupImage.paddingBottomInPixels = 25;
            _this.addControl(timeupImage);
            if (PROJECT.scoreSystem.continued) {
                GameGUI.ShowCrash();
                return _this;
            }
            if (PROJECT.scoreSystem.score <= 600) {
                var container = new BABYLON.GUI.Rectangle("TimeUpRectangle");
                container.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;
                container.paddingBottomInPixels = 200;
                container.widthInPixels = 1000;
                container.heightInPixels = 400;
                container.background = "black";
                container.alpha = 0.7;
                container.paddingBottom = "100px";
                container.cornerRadius = 10;
                container.color = "#10A3C8";
                container.thickness = 3;
                _this.addControl(container);
                var textblock = new BABYLON.GUI.TextBlock("TimeUpTextBlock", "Time's up. You need to earn at least 600 Power Smart Points to continue to stage 2. Try again?");
                textblock.textWrapping = true;
                textblock.widthInPixels = 800;
                textblock.heightInPixels = 400;
                textblock.fontSize = 42;
                textblock.color = "white";
                textblock.alpha = (1 / container.alpha);
                container.addControl(textblock);
                _this.addControl(container);
                var button1 = BABYLON.GUI.Button.CreateSimpleButton("ChooseTutorialButton", "Yes, try again.");
                button1.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER;
                button1.widthInPixels = 800;
                button1.heightInPixels = 100;
                button1.top = 100;
                button1.background = "white";
                button1.paddingBottom = "10px";
                button1.cornerRadius = 15;
                button1.color = "#10A3C8";
                button1.thickness = 3;
                button1.fontSize = 32;
                button1.onPointerClickObservable.add(function () {
                    this.isVisible = false;
                    location.reload();
                });
                _this.addControl(button1);
                var button2 = BABYLON.GUI.Button.CreateSimpleButton("ChooseTutorialButton", "No, Quit to menu.");
                button2.widthInPixels = 800;
                button2.heightInPixels = 100;
                button2.top = 100;
                button2.background = "white";
                button2.paddingBottom = "10px";
                button2.cornerRadius = 15;
                button2.color = "#10A3C8";
                button2.thickness = 3;
                button2.fontSize = 32;
                button2.onPointerClickObservable.add(function () {
                    this.isVisible = false;
                    location.reload();
                });
                _this.addControl(button2);
            }
            else {
                var container = new BABYLON.GUI.Rectangle("TimeUpRectangle");
                container.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;
                container.paddingBottomInPixels = 200;
                container.widthInPixels = 1000;
                container.heightInPixels = 400;
                container.background = "black";
                container.alpha = 0.7;
                container.paddingBottom = "100px";
                container.cornerRadius = 10;
                container.color = "#10A3C8";
                container.thickness = 3;
                _this.addControl(container);
                var textblock = new BABYLON.GUI.TextBlock("TimeUpTextBlock", "Times up, Nice Hazard hunting. Let's go explore that sound from outside.");
                textblock.textWrapping = true;
                textblock.widthInPixels = 800;
                textblock.heightInPixels = 400;
                textblock.fontSize = 42;
                textblock.color = "white";
                textblock.alpha = (1 / container.alpha);
                container.addControl(textblock);
                _this.onPointerDownObservable.add(function () {
                    GameGUI.ShowCrash();
                });
                _this.addControl(container);
            }
            return _this;
        }
        return TimeUp;
    }(BABYLON.GUI.StackPanel));
    var CrashScreen = /** @class */ (function (_super) {
        __extends(CrashScreen, _super);
        function CrashScreen() {
            var _this = _super.call(this) || this;
            _this.textblock = new BABYLON.GUI.TextBlock("TimeUpTextBlock", "That sounded like a car crash.\nDo you want to investigate or\ncontinue searching the house?");
            _this.button1 = BABYLON.GUI.Button.CreateSimpleButton("crash1", "Investigate the crashing sound.");
            _this.button2 = BABYLON.GUI.Button.CreateSimpleButton("crash2", "Continue searching until time runs out.");
            _this.isVisible = false;
            _this.isPointerBlocker = true;
            _this.paddingBottomInPixels = 200;
            _this.width = "100%";
            _this.height = "100%";
            _this.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER;
            _this.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
            _this.topInPixels = 150;
            var image = new BABYLON.GUI.Image("TimeUpImage", "/scenes/img/scene2_crash alert.png");
            image.heightInPixels = 300;
            image.widthInPixels = 800;
            image.alpha = (1 / _this.alpha);
            //this.addControl(image);
            var container = new BABYLON.GUI.Rectangle("CrashScrenUpRectangle");
            container.background = "black";
            container.alpha = 0.7;
            container.widthInPixels = 900;
            container.heightInPixels = 400;
            container.cornerRadius = 10;
            container.color = "#10A3C8";
            container.thickness = 3;
            _this.addControl(container);
            _this.textblock.textWrapping = true;
            _this.textblock.widthInPixels = 800;
            _this.textblock.heightInPixels = 400;
            _this.textblock.fontSize = 42;
            _this.textblock.alpha = (1 / _this.alpha);
            _this.textblock.color = "white";
            _this.textblock.alpha = (1 / container.alpha);
            container.addControl(_this.textblock);
            _this.addControl(container);
            _this.button1.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER;
            _this.button1.widthInPixels = 800;
            _this.button1.heightInPixels = 100;
            _this.button1.top = 100;
            _this.button1.background = "white";
            _this.button1.paddingBottom = "10px";
            _this.button1.cornerRadius = 15;
            _this.button1.color = "#10A3C8";
            _this.button1.thickness = 3;
            _this.button1.fontSize = 32;
            _this.button1.onPointerClickObservable.add(function () {
                PROJECT.GameSystem.firstStageComplete = true;
                GameGUI.timer.isVisible = false;
                GameGUI.crashScreen.isVisible = false;
                PROJECT.GameSystem._GameSystem.switchCamera("secondCamera");
                var animationSystem = new PROJECT.AnimationSystem();
                animationSystem.CameraMovement();
                PROJECT.GameSystem.ShowCrash();
                PROJECT.GameSystem.soundSystem.s1_placeholder_loop.stop(0);
                PROJECT.GameSystem.soundSystem.s2_placeholder_loop.play(0);
            });
            _this.addControl(_this.button1);
            _this.button2.widthInPixels = 800;
            _this.button2.heightInPixels = 100;
            _this.button2.top = 100;
            _this.button2.background = "white";
            _this.button2.paddingBottom = "10px";
            _this.button2.cornerRadius = 15;
            _this.button2.color = "#10A3C8";
            _this.button2.thickness = 3;
            _this.button2.fontSize = 32;
            _this.button2.onPointerClickObservable.add(function () {
                _this.removeControl(_this.button2);
                _this.SetText();
                PROJECT.scoreSystem.continued = true;
                GameGUI.crashScreen.isVisible = false;
                PROJECT.GameSystem.GameControls.isPaused = false;
                GameGUI.timer.isVisible = true;
            });
            _this.addControl(_this.button2);
            return _this;
        }
        CrashScreen.prototype.SetText = function () {
            this.textblock.text = "Great safety searching. Now let’s go explore that sound from outside.";
            this.button1.textBlock.text = "Yes, continue.";
        };
        return CrashScreen;
    }(BABYLON.GUI.StackPanel));
    var TutorialUI = /** @class */ (function (_super) {
        __extends(TutorialUI, _super);
        function TutorialUI() {
            var _this = _super.call(this) || this;
            _this.index = 0;
            _this.texblockText = [
                'Think you’re an electrical safety expert?',
                'We could use someone like you to help find all the electrical hazards \n inside this house.',
                'Try finding and fixing all the hazards in the house. The faster you go, the more points you can earn.'
            ];
            _this.container = new BABYLON.GUI.Rectangle("tutorialContainer");
            _this.textblock = new BABYLON.GUI.TextBlock("tutorialTextBlock", _this.texblockText[_this.index]);
            _this.width = "100%";
            _this.height = "100%";
            _this.isVisible = false;
            _this.isPointerBlocker = true;
            _this.onPointerDownObservable.add(function () {
                if (_this.index == _this.texblockText.length - 1) {
                    _this.isVisible = false;
                    GameGUI.ShowTutorial();
                    PROJECT.GameSystem.soundSystem.Menu_Butons.play();
                    return;
                }
                else {
                    _this.index += 1;
                    _this.DisplaySlide(_this.index);
                    PROJECT.GameSystem.soundSystem.Menu_Butons.play();
                }
            });
            var stack = new BABYLON.GUI.StackPanel();
            stack.topInPixels = 50;
            stack.widthInPixels = 900;
            stack.heightInPixels = 800;
            stack.paddingBottomInPixels = 200;
            _this.container.widthInPixels = 900;
            _this.container.heightInPixels = 450;
            _this.container.background = "black";
            _this.container.alpha = 0.7;
            _this.container.paddingBottom = "100px";
            _this.container.color = "#10A3C8";
            _this.container.cornerRadius = 10;
            _this.container.thickness = 3;
            stack.addControl(_this.container);
            _this.textblock.fontSize = 52;
            _this.textblock.widthInPixels = 850;
            _this.textblock.heightInPixels = 500;
            _this.textblock.color = "white";
            _this.textblock.alpha = (1 / _this.container.alpha);
            _this.textblock.textWrapping = true;
            _this.container.addControl(_this.textblock);
            var text = new BABYLON.GUI.TextBlock("text", "Click to continue");
            text.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;
            text.widthInPixels = 700;
            text.heightInPixels = 100;
            text.fontSize = 30;
            text.color = "white";
            _this.container.addControl(text);
            _this.addControl(stack);
            return _this;
        }
        TutorialUI.prototype.DisplaySlide = function (n) {
            this.textblock.text = this.texblockText[n];
        };
        return TutorialUI;
    }(BABYLON.GUI.Rectangle));
    var Tutorial = /** @class */ (function (_super) {
        __extends(Tutorial, _super);
        function Tutorial() {
            var _this = _super.call(this) || this;
            _this.index = 0;
            _this.webTutorialText = [
                'Use the W Key to\nmove forward.',
                'Use the A Key to\nmove left.',
                'Use the S Key to\nmove backward.',
                'Use the D Key to\nmove right.',
                'Hold click and drag your mouse in the desired direction to look around.',
                'If playing on a touch screen, joysticks are used instead of directional keys.',
                'The left stick controls\nmoving forward,\nbackward, left and right',
                'The right stick controls\nlooking up, down, left\nand right.',
                'Some objects like this front door can be interacted with.',
                "Click or tap on glowing\nobjects to interact\nwith them.",
                'Solving hazards will earn you achievements that contribute to your Power Smart score.',
                'Earn 600 points\nto continue to\nthe next activity.',
                'Your mission is to find as many hazards as you can before the timer runs out.',
                'Try to work quickly and keep your eyes peeled for hidden Power Smart tokens to earn bonus points.',
                'Power Smart tokens are tracked on your score bar. Find them all to earn a special achievement.',
                'Feeling ready to start your safety search?',
            ];
            _this.webTutorialImages = [
                './scenes/img/tutorial/tutorial_w.png',
                './scenes/img/tutorial/tutorial_a.png',
                './scenes/img/tutorial/tutorial_s.png',
                './scenes/img/tutorial/tutorial_d.png',
                './scenes/img/tutorial/tutorial_mouse-drag.png',
                './scenes/img/tutorial/tutorial_joy-toggle.png',
                './scenes/img/tutorial/tutorial_joy-left.png',
                './scenes/img/tutorial/tutorial_joy-right.png',
                './scenes/img/tutorial/tutorial_token-achievements.png',
                './scenes/img/tutorial/tutorial_mouse-tap.png',
                '',
                './scenes/img/tutorial/tutorial_600-points.png',
                './scenes/img/tutorial/tutorial_timer.png',
                './scenes/img/tutorial/tutorial_power-smart-token.png',
                './scenes/img/tutorial/tutorial_token-hud.png',
                './scenes/img/tutorial/tutorial_ready.png',
            ];
            _this.mobileTutorialText = [
                'Use the left joystick to move forward.',
                'Use the left joystick to move forward.',
                'Use the left joystick to move forward.',
                'Use the left joystick to move forward.',
                "Use the right joystick to look around",
                "Glowing objects can be interacted with.",
                "Tap a glowing object to interact with it.",
                'Try finding and fixing all 6 of the hazards in the house.'
            ];
            _this.mobileTutorialImages = [
                '/scenes/img/tutorial_w.png',
                '/scenes/img/tutorial_a.png',
                '/scenes/img/tutorial_s.png',
                '/scenes/img/tutorial_d.png',
                '/scenes/img/tutorial_mouse.png',
                '/scenes/img/hud_item-putdown.png',
                '/scenes/img/tutorial_mouse-click.png',
                '/scenes/img/countdown-go.png',
            ];
            _this.textblock = new BABYLON.GUI.TextBlock("TutorialTextBlock", _this.webTutorialText[_this.index]);
            _this.image = new BABYLON.GUI.Image("TutorialImage", _this.webTutorialImages[_this.index]);
            _this.isVisible = false;
            _this.background = "black";
            _this.alpha = 0.7;
            _this.isPointerBlocker = true;
            _this.width = "100%";
            _this.height = "100%";
            var stack = new BABYLON.GUI.StackPanel();
            stack.alpha = (1 / _this.alpha);
            stack.widthInPixels = 900;
            stack.heightInPixels = 800;
            stack.topInPixels = 35;
            stack.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER;
            stack.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
            _this.image.widthInPixels = 450;
            _this.image.heightInPixels = 250;
            stack.addControl(_this.image);
            _this.textblock.fontSize = 72;
            _this.textblock.widthInPixels = 900;
            _this.textblock.heightInPixels = 350;
            _this.textblock.color = "white";
            _this.textblock.textWrapping = true;
            stack.addControl(_this.textblock);
            var text = new BABYLON.GUI.TextBlock("text", "Click to continue");
            text.widthInPixels = 700;
            text.heightInPixels = 100;
            text.fontSize = 30;
            text.color = "white";
            stack.addControl(text);
            _this.addControl(stack);
            _this.onPointerDownObservable.add(function () {
                if (_this.index == _this.webTutorialText.length - 1) {
                    _this.isVisible = false;
                    GameGUI.StartGame();
                    PROJECT.GameSystem.soundSystem.Menu_Butons.play();
                    return;
                }
                else {
                    _this.index += 1;
                    _this.DisplaySlide(_this.index);
                    PROJECT.GameSystem.soundSystem.Menu_Butons.play();
                }
            });
            return _this;
        }
        Tutorial.prototype.DisplaySlide = function (n) {
            this.textblock.text = this.webTutorialText[n];
            this.image.source = this.webTutorialImages[n];
        };
        return Tutorial;
    }(BABYLON.GUI.Rectangle));
    var ClickToContinueTextBox = /** @class */ (function (_super) {
        __extends(ClickToContinueTextBox, _super);
        function ClickToContinueTextBox() {
            var _this = _super.call(this) || this;
            _this.textblock = new BABYLON.GUI.TextBlock("TutorialTextBlock", "");
            _this.isVisible = false;
            _this.isPointerBlocker = true;
            _this.width = "100%";
            _this.height = "100%";
            var stack = new BABYLON.GUI.StackPanel();
            stack.alpha = (1 / _this.alpha);
            stack.widthInPixels = 900;
            stack.heightInPixels = 800;
            stack.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER;
            stack.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
            _this.textblock.fontSize = 72;
            _this.textblock.widthInPixels = 900;
            _this.textblock.heightInPixels = 300;
            _this.textblock.color = "white";
            _this.textblock.textWrapping = true;
            stack.addControl(_this.textblock);
            var text = new BABYLON.GUI.TextBlock("text", "Click to continue");
            text.widthInPixels = 700;
            text.heightInPixels = 100;
            text.fontSize = 30;
            text.color = "white";
            stack.addControl(text);
            _this.addControl(stack);
            return _this;
        }
        ClickToContinueTextBox.prototype.SetText = function (s, hazard) {
            this.textblock.text = s;
            this.onPointerDownObservable.clear();
            this.onPointerDownObservable.add(function () {
                hazard();
                PROJECT.GameSystem.soundSystem.Menu_Butons.play();
            });
        };
        return ClickToContinueTextBox;
    }(BABYLON.GUI.Rectangle));
    var CrashBox = /** @class */ (function (_super) {
        __extends(CrashBox, _super);
        function CrashBox() {
            var _this = _super.call(this) || this;
            _this.textblock = new BABYLON.GUI.TextBlock("TutorialTextBlock", "");
            _this.multipleChoiceBlock = BABYLON.GUI.Button.CreateSimpleButton("but", "");
            _this.container = new BABYLON.GUI.Rectangle("tutorialContainer");
            _this.isVisible = false;
            _this.isPointerBlocker = true;
            _this.width = "100%";
            _this.height = "100%";
            _this.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER;
            _this.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
            var stack = new BABYLON.GUI.StackPanel();
            stack.alpha = (1 / _this.alpha);
            stack.widthInPixels = 900;
            stack.heightInPixels = 400;
            _this.container.widthInPixels = 900;
            _this.container.heightInPixels = 400;
            _this.container.background = "black";
            _this.container.alpha = 0.7;
            _this.container.paddingBottom = "100px";
            _this.container.color = "#10A3C8";
            _this.container.cornerRadius = 10;
            _this.container.thickness = 3;
            stack.addControl(_this.container);
            _this.textblock.fontSize = 30;
            _this.textblock.widthInPixels = 850;
            _this.textblock.heightInPixels = 450;
            _this.textblock.color = "white";
            _this.textblock.alpha = (1 / _this.container.alpha);
            _this.textblock.textWrapping = true;
            _this.container.addControl(_this.textblock);
            var text = new BABYLON.GUI.TextBlock("text", "Click to continue");
            text.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;
            text.widthInPixels = 700;
            text.heightInPixels = 100;
            text.fontSize = 20;
            text.color = "white";
            _this.container.addControl(text);
            _this.addControl(stack);
            return _this;
        }
        CrashBox.prototype.ShowCard = function (s) {
            var _this = this;
            this.isVisible = true;
            this.textblock.text = s;
            this.onPointerDownObservable.add(function () {
                PROJECT.GameSystem.soundSystem.Menu_Butons.play();
                _this.isVisible = false;
                _this.onPointerDownObservable.clear();
            });
        };
        CrashBox.prototype.InvokeHazard = function (s, a, invoke) {
            var _this = this;
            if (invoke === void 0) { invoke = null; }
            this.isVisible = true;
            this.textblock.text = s;
            this.onPointerDownObservable.add(function () {
                PROJECT.GameSystem.soundSystem.Menu_Butons.play();
                _this.isVisible = false;
                GameGUI.multipleChoice.setmultipleChoice(a, invoke);
                _this.onPointerDownObservable.clear();
            });
        };
        CrashBox.prototype.InvokeHazardFoot = function (s, a, invoke) {
            var _this = this;
            this.isVisible = true;
            this.textblock.text = s;
            this.onPointerDownObservable.add(function () {
                PROJECT.GameSystem.soundSystem.Menu_Butons.play();
                _this.isVisible = false;
                GameGUI.multipleChoice.setmultipleChoice(a, invoke);
                _this.onPointerDownObservable.clear();
            });
        };
        CrashBox.prototype.SetText = function (s, invoke) {
            var _this = this;
            if (invoke === void 0) { invoke = null; }
            this.isVisible = true;
            this.textblock.text = s;
            this.onPointerDownObservable.add(function () {
                _this.isVisible = false;
                if (invoke != null) {
                    invoke();
                }
                _this.onPointerDownObservable.clear();
            });
        };
        return CrashBox;
    }(BABYLON.GUI.Rectangle));
    var ChooseTutorial = /** @class */ (function (_super) {
        __extends(ChooseTutorial, _super);
        function ChooseTutorial() {
            var _this = _super.call(this) || this;
            _this.isPointerBlocker = true;
            _this.isVisible = false;
            _this.widthInPixels = 800;
            _this.heightInPixels = 300;
            _this.background = "white";
            _this.cornerRadius = 20;
            var stack = new BABYLON.GUI.StackPanel("ChooseTutorialStack");
            stack.widthInPixels = 800;
            stack.heightInPixels = 300;
            stack.background = "white";
            var textRect = new BABYLON.GUI.Rectangle("ChooseTutorialRect");
            textRect.widthInPixels = 800;
            textRect.heightInPixels = 60;
            textRect.background = "#10A3C8";
            var textBlock = new BABYLON.GUI.TextBlock("ChooseTutorialTextblock", "How to play");
            textBlock.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
            textBlock.widthInPixels = 400;
            textBlock.heightInPixels = 100;
            textBlock.fontSize = 32;
            textBlock.color = "white";
            textRect.addControl(textBlock);
            stack.addControl(textRect);
            var textBlock2 = new BABYLON.GUI.TextBlock("ChooseTutorialTextblock", "Recommended for first time players.");
            textBlock2.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
            textBlock2.fontSize = 32;
            textBlock2.widthInPixels = 600;
            textBlock2.heightInPixels = 100;
            textBlock2.color = "black";
            stack.addControl(textBlock2);
            var stack2 = new BABYLON.GUI.StackPanel("ChooseTutorialStack");
            stack2.widthInPixels = 800;
            stack2.heightInPixels = 100;
            stack2.isVertical = false;
            stack2.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER;
            var button1 = BABYLON.GUI.Button.CreateSimpleButton("ChooseTutorialButton", "Play tutorial");
            button1.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER;
            button1.widthInPixels = 350;
            button1.paddingLeft = 100;
            button1.heightInPixels = 75;
            button1.background = "green";
            button1.cornerRadius = 5;
            button1.color = "white";
            button1.fontSize = 32;
            button1.onPointerClickObservable.add(function () {
                _this.isVisible = false;
                GameGUI.DoTutorial();
                PROJECT.GameSystem.soundSystem.Menu_Butons.play();
            });
            stack2.addControl(button1);
            var button2 = BABYLON.GUI.Button.CreateSimpleButton("ChooseTutorialButton", "Skip tutorial");
            button2.widthInPixels = 350;
            button2.paddingLeft = 100;
            button2.heightInPixels = 75;
            button2.background = "white";
            button2.cornerRadius = 5;
            button2.color = "#10A3C8";
            button2.thickness = 7;
            button2.fontSize = 32;
            button2.onPointerClickObservable.add(function () {
                _this.isVisible = false;
                GameGUI.StartGame();
                PROJECT.GameSystem.soundSystem.Menu_Butons.play();
            });
            stack2.addControl(button2);
            stack.addControl(stack2);
            _this.addControl(stack);
            return _this;
        }
        return ChooseTutorial;
    }(BABYLON.GUI.Rectangle));
    var Achievment = /** @class */ (function (_super) {
        __extends(Achievment, _super);
        function Achievment() {
            var _this = _super.call(this) || this;
            _this.isVisible = false;
            _this.isPointerBlocker = true;
            _this.width = "100%";
            _this.height = "100%";
            _this.color = "#10A3C8";
            _this.background = "black";
            _this.alpha = 0.8;
            var panel = new BABYLON.GUI.Rectangle();
            panel.alpha = (1 / _this.alpha);
            panel.widthInPixels = 700;
            panel.heightInPixels = 320;
            panel.cornerRadius = 10;
            panel.thickness = 4;
            panel.color = "#10A3C8";
            panel.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER;
            panel.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
            panel.background = "white";
            _this.addControl(panel);
            var stackpannel = new BABYLON.GUI.StackPanel();
            stackpannel.alpha = (1 / _this.alpha);
            stackpannel.widthInPixels = 700;
            stackpannel.heightInPixels = 300;
            stackpannel.topInPixels = -20;
            stackpannel.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER;
            stackpannel.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
            var safteyHeader = new BABYLON.GUI.Rectangle();
            safteyHeader.alpha = (1 / _this.alpha);
            safteyHeader.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
            safteyHeader.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
            safteyHeader.widthInPixels = 700;
            safteyHeader.heightInPixels = 50;
            safteyHeader.background = "#10A3C8";
            safteyHeader.thickness = 0;
            var safetyHeaderText = new BABYLON.GUI.TextBlock("safteyHeader", "Safety achievement found");
            safetyHeaderText.alpha = (1 / _this.alpha);
            safetyHeaderText.widthInPixels = 700;
            safetyHeaderText.heightInPixels = 50;
            safetyHeaderText.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
            safteyHeader.color = "white";
            safteyHeader.addControl(safetyHeaderText);
            stackpannel.addControl(safteyHeader);
            _this.iconImage = new BABYLON.GUI.Image("icon image", "");
            _this.iconImage.widthInPixels = 100;
            _this.iconImage.heightInPixels = 100;
            _this.iconImage.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER;
            _this.iconImage.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
            stackpannel.addControl(_this.iconImage);
            _this.title = new BABYLON.GUI.TextBlock("title text", "");
            _this.title.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
            _this.title.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
            _this.title.fontStyle = "bold";
            _this.title.fontSize = 45;
            _this.title.heightInPixels = 50;
            _this.title.widthInPixels = 600;
            stackpannel.addControl(_this.title);
            _this.description = new BABYLON.GUI.TextBlock("description text", "");
            _this.description.fontSize = 25;
            _this.description.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER;
            _this.description.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
            _this.description.heightInPixels = 100;
            _this.description.widthInPixels = 600;
            _this.description.textWrapping = true;
            stackpannel.addControl(_this.description);
            _this.addControl(stackpannel);
            return _this;
        }
        Achievment.prototype.showAchiement = function (value) {
            this.isVisible = value;
        };
        Achievment.prototype.drop = function () {
            this.isVisible = true;
        };
        Achievment.prototype.raise = function () {
            this.isVisible = false;
        };
        Achievment.prototype.SetAchievment = function (actionSystem) {
            var _this = this;
            this.title.text = actionSystem.achievement;
            this.description.text = actionSystem.description;
            this.iconImage.source = "./scenes/img/achievement_icons/" + actionSystem.image;
            PROJECT.GameSystem.soundSystem.Achievement_Popup.play();
            actionSystem.isCompleted = true;
            this.drop();
            PROJECT.GameSystem.GameControls.achievmentControl(false);
            PROJECT.GameSystem._GameSystem.toggleMovement(true);
            setTimeout(function () {
                _this.raise();
                PROJECT.GameSystem.GameControls.achievmentControl(true);
                PROJECT.GameSystem._GameSystem.toggleMovement(false);
            }, 5000);
        };
        return Achievment;
    }(BABYLON.GUI.Rectangle));
    var GameTimerPopup = /** @class */ (function (_super) {
        __extends(GameTimerPopup, _super);
        function GameTimerPopup(images, options, callback) {
            var _this = _super.call(this) || this;
            _this.images = images;
            _this.callback = callback;
            _this.imageIndex = 0;
            _this.currentInterval = null;
            _this._options = {
                interval: 900,
                animate: false
            };
            _this.isPointerBlocker = false;
            _this.image = new BABYLON.GUI.Image();
            _this.image.isPointerBlocker = false;
            if (!options.width && !options.height) {
                _this.image.autoScale = true;
            }
            else {
                _this.image.widthInPixels = _this._options.width;
                _this.image.heightInPixels = _this._options.height;
            }
            _this.image.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER;
            _this.image.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
            _this.addControl(_this.image);
            return _this;
        }
        GameTimerPopup.prototype.createAnimations = function () {
            var ret = [];
            var keys = [];
            var scaleX = new BABYLON.Animation("scaleX", "scaleX", 60, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);
            var scaleY = new BABYLON.Animation("scaleY", "scaleY", 60, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);
            keys.push({
                frame: 0,
                value: 1
            });
            keys.push({
                frame: 60,
                value: 0
            });
            scaleX.setKeys(keys);
            scaleY.setKeys(keys);
            ret.push(scaleX, scaleY);
            return ret;
        };
        GameTimerPopup.prototype.nextImage = function () {
            this.image.scaleX = 1;
            this.image.scaleY = 1;
            this.image.source = this.images[this.imageIndex];
            this.image.isVisible = true;
            this.imageIndex++;
            if (this._options.animate) {
                PROJECT.GameSystem.gameScene.beginDirectAnimation(this.image, this.createAnimations(), 0, 60, false, (1000 / this._options.interval));
            }
        };
        GameTimerPopup.prototype.start = function () {
            var _this = this;
            this.isPointerBlocker = true;
            this.imageIndex = 0;
            if (this.currentInterval) {
                clearInterval(this.currentInterval);
            }
            PROJECT.GameSystem.soundSystem.CountDown.play();
            this.nextImage();
            this.currentInterval = setInterval(function () {
                if (_this.imageIndex > _this.images.length - 1) {
                    _this.callback();
                    _this.image.isVisible = false;
                    clearInterval(_this.currentInterval);
                    PROJECT.GameSystem.GameControls.SetPause(false);
                    GameGUI.scoreHud.isVisible = true;
                    GameGUI.rightContainer.isVisible = true;
                    GameGUI.mainscreen.isVisible = false;
                }
                else {
                    PROJECT.GameSystem.soundSystem.CountDown.play();
                    _this.nextImage();
                }
                ;
            }, this._options.interval);
            this.isPointerBlocker = false;
        };
        return GameTimerPopup;
    }(BABYLON.GUI.Rectangle));
    var RightContainer = /** @class */ (function (_super) {
        __extends(RightContainer, _super);
        function RightContainer() {
            var _this = _super.call(this) || this;
            _this.pauseButton = new pauseButton();
            _this.widthInPixels = 100;
            _this.heightInPixels = 150;
            _this.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
            _this.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_RIGHT;
            _this.isVertical = false;
            _this.addControl(_this.pauseButton);
            return _this;
        }
        return RightContainer;
    }(BABYLON.GUI.StackPanel));
    var scoreHud = /** @class */ (function (_super) {
        __extends(scoreHud, _super);
        function scoreHud() {
            var _this = _super.call(this) || this;
            _this.scoreText = new BABYLON.GUI.TextBlock("scoreHud", new String(0));
            var image = new BABYLON.GUI.Image("scoreImage", "./scenes/hud_score-bar.png");
            image.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
            image.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
            image.widthInPixels = 550;
            image.heightInPixels = 200;
            _this.addControl(image);
            _this.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
            _this.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
            _this.widthInPixels = 600;
            _this.heightInPixels = 200;
            _this.thickness = 0;
            _this.scoreText.widthInPixels = 600;
            _this.scoreText.heightInPixels = 75;
            _this.scoreText.fontSizeInPixels = 60;
            _this.scoreText.topInPixels = -10;
            _this.scoreText.paddingBottom = 25;
            _this.scoreText.color = "white";
            _this.scoreText.textHorizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
            _this.scoreText.paddingLeftInPixels = 120;
            _this.addControl(_this.scoreText);
            var panel3 = new BABYLON.GUI.StackPanel();
            panel3.name = "bottomHorzStack";
            panel3.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;
            panel3.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
            panel3.widthInPixels = 600;
            panel3.heightInPixels = 90;
            panel3.isVertical = false;
            panel3.paddingLeftInPixels = 150;
            _this.addControl(panel3);
            _this.tokens = [
                new BABYLON.GUI.Image("token", "./scenes/img/hud_score-bar_token.png"),
                new BABYLON.GUI.Image("token", "./scenes/img/hud_score-bar_token.png"),
                new BABYLON.GUI.Image("token", "./scenes/img/hud_score-bar_token.png"),
                new BABYLON.GUI.Image("token", "./scenes/img/hud_score-bar_token.png"),
                new BABYLON.GUI.Image("token", "./scenes/img/hud_score-bar_token.png")
            ];
            _this.tokens.forEach(function (element) {
                element.alpha = 0;
                element.widthInPixels = 55;
                element.heightInPixels = 55;
                panel3.addControl(element);
                var tokenSpacer1 = new BABYLON.GUI.Rectangle("tokenSpacer1");
                tokenSpacer1.widthInPixels = 22;
                tokenSpacer1.heightInPixels = 22;
                tokenSpacer1.thickness = 0;
                panel3.addControl(tokenSpacer1);
            });
            return _this;
        }
        scoreHud.prototype.updateScoreHud = function () {
            this.scoreText.text = new String(PROJECT.scoreSystem.getScore());
        };
        scoreHud.prototype.setSmartToken = function () {
            this.tokens[PROJECT.scoreSystem.currentToken].alpha = 1;
            PROJECT.scoreSystem.currentToken++;
            if (PROJECT.scoreSystem.currentToken >= 5) {
                PROJECT.GameSystem.ActionSystemContainer.hazard_TreasureHunter.isCompleted = true;
                GameGUI.achievment.SetAchievment(PROJECT.GameSystem.ActionSystemContainer.hazard_TreasureHunter);
            }
        };
        return scoreHud;
    }(BABYLON.GUI.Rectangle));
    var pauseButton = /** @class */ (function (_super) {
        __extends(pauseButton, _super);
        function pauseButton() {
            var _this = _super.call(this) || this;
            _this.heightInPixels = 100;
            _this.widthInPixels = 100;
            _this.thickness = 0;
            _this.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_RIGHT;
            _this.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
            _this.isPointerBlocker = true;
            var iconImage = new BABYLON.GUI.Image("pauseImg", "./scenes/hud_pause-btn.png");
            iconImage.stretch = BABYLON.GUI.Image.STRETCH_FILL;
            _this.onPointerDownObservable.add(function () {
                PROJECT.GameSystem.soundSystem.Menu_Butons.play();
                PROJECT.GameSystem.GameControls.SetPause(true);
            });
            _this.addControl(iconImage);
            return _this;
        }
        return pauseButton;
    }(BABYLON.GUI.Ellipse));
    var Kite = /** @class */ (function (_super) {
        __extends(Kite, _super);
        function Kite() {
            var _this = _super.call(this) || this;
            _this.textBlock = new BABYLON.GUI.TextBlock();
            _this.meter = new BABYLON.GUI.Rectangle();
            _this.clicks = 0;
            _this.isVisible = false;
            _this.width = "100%";
            _this.height = "100%";
            _this.background = "black";
            _this.alpha = 0.6;
            _this.isPointerBlocker = true;
            var container = new BABYLON.GUI.Rectangle();
            container.widthInPixels = 900;
            container.heightInPixels = 400;
            container.background = "black";
            container.alpha = (1 / _this.alpha);
            container.paddingBottom = "100px";
            container.color = "#10A3C8";
            container.cornerRadius = 10;
            container.thickness = 3;
            _this.addControl(container);
            _this.textBlock.widthInPixels = 900;
            _this.textBlock.heightInPixels = 300;
            _this.textBlock.textWrapping = true;
            _this.textBlock.color = "white";
            _this.textBlock.fontSize = 30;
            container.addControl(_this.textBlock);
            _this.meter.heightInPixels = 600;
            _this.meter.widthInPixels = 100;
            _this.meter.background = "#10A3C8";
            _this.meter.color = "white";
            _this.meter.thickness = 1;
            _this.meter.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
            _this.meter.leftInPixels = 200;
            _this.meter.alpha = (1 / _this.alpha);
            _this.addControl(_this.meter);
            return _this;
        }
        Kite.prototype.show = function (actionSystem, text) {
            var _this = this;
            if (text === void 0) { text = null; }
            this.isVisible = true;
            if (text != null) {
                this.textBlock.text = text;
            }
            this.onPointerDownObservable.add(function () {
                _this.meter.scaleY -= 0.1;
                //sphere.position.y -=1;
                _this.meter.transformCenterY = 1;
                PROJECT.GameSystem.kite.LowerKite();
                _this.clicks++;
                if (_this.clicks >= 10) {
                    _this.isVisible = false;
                    GameGUI.achievment.SetAchievment(actionSystem);
                    PROJECT.scoreSystem.setScore(100);
                    PROJECT.GameSystem.kite.ToggleKite();
                    PROJECT.GameSystem._GameSystem.switchCamera("mainCamera");
                }
            });
        };
        return Kite;
    }(BABYLON.GUI.Rectangle));
    var FullUI = /** @class */ (function (_super) {
        __extends(FullUI, _super);
        function FullUI() {
            var _this = _super.call(this) || this;
            _this.innerRect = new BABYLON.GUI.Rectangle();
            _this.textBlock = new BABYLON.GUI.TextBlock();
            _this.isVisible = false;
            _this.width = "100%";
            _this.height = "100%";
            _this.background = "black";
            _this.alpha = 0.6;
            _this.isPointerBlocker = true;
            var ellipseBorder = new BABYLON.GUI.Ellipse();
            ellipseBorder.widthInPixels = 300;
            ellipseBorder.heightInPixels = 300;
            ellipseBorder.color = "#10A3C8";
            ellipseBorder.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
            ellipseBorder.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER;
            var stackPannel = new BABYLON.GUI.StackPanel();
            stackPannel.widthInPixels = 900;
            stackPannel.heightInPixels = 600;
            stackPannel.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
            stackPannel.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER;
            stackPannel.isVertical = true;
            stackPannel.alpha = (1 / _this.alpha);
            _this.innerRect.widthInPixels = 400;
            _this.innerRect.heightInPixels = 310;
            _this.innerRect.thickness = 0;
            _this.innerRect.background = "#10A3C8";
            ellipseBorder.addControl(_this.innerRect);
            stackPannel.addControl(ellipseBorder);
            _this.textBlock.widthInPixels = 900;
            _this.textBlock.heightInPixels = 300;
            _this.textBlock.textWrapping = true;
            _this.textBlock.fontSize = "60px";
            _this.color = "white";
            stackPannel.addControl(_this.textBlock);
            _this.addControl(stackPannel);
            return _this;
        }
        FullUI.prototype.show = function (actionSystem, img, text) {
            var _this = this;
            if (img === void 0) { img = null; }
            if (text === void 0) { text = null; }
            this.isVisible = true;
            if (text != null) {
                this.textBlock.text = text;
            }
            this.onPointerDownObservable.add(function () {
                _this.innerRect.topInPixels += 40;
                PROJECT.GameSystem.tubClicks++;
                if (PROJECT.GameSystem.tubClicks >= 8) {
                    _this.isVisible = false;
                    GameGUI.achievment.SetAchievment(actionSystem);
                    PROJECT.scoreSystem.setScore(100);
                    PROJECT.GameSystem.tap = false;
                    PROJECT.GameSystem._GameSystem.switchCamera("mainCamera");
                    PROJECT.GameSystem.timeScoreStart = false;
                }
            });
        };
        return FullUI;
    }(BABYLON.GUI.Rectangle));
    PROJECT.FullUI = FullUI;
    var MultipleChoiceImage = /** @class */ (function (_super) {
        __extends(MultipleChoiceImage, _super);
        function MultipleChoiceImage() {
            var _this = _super.call(this) || this;
            _this.multipleChoiceBlock = BABYLON.GUI.Button.CreateSimpleButton("but", "");
            _this.buttons = [
                BABYLON.GUI.Button.CreateImageWithCenterTextButton("multipleChoiceButton1", "", ""),
                BABYLON.GUI.Button.CreateImageWithCenterTextButton("multipleChoiceButton2", "", ""),
                BABYLON.GUI.Button.CreateImageWithCenterTextButton("multipleChoiceButton3", "", "")
            ];
            _this.isVisible = false;
            _this.width = "100%";
            _this.height = "100%";
            _this.isPointerBlocker = true;
            var multipleChoiceContainer = new BABYLON.GUI.StackPanel();
            multipleChoiceContainer.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER;
            multipleChoiceContainer.width = "50%";
            multipleChoiceContainer.topInPixels = 150;
            multipleChoiceContainer.heightInPixels = 700;
            _this.multipleChoiceBlock.isEnabled = false;
            _this.multipleChoiceBlock.textBlock.color = "white";
            _this.multipleChoiceBlock.width = "100%";
            _this.multipleChoiceBlock.heightInPixels = 150;
            _this.multipleChoiceBlock.fontSize = "34px";
            _this.multipleChoiceBlock.paddingBottom = "30px";
            _this.multipleChoiceBlock.background = "black";
            _this.multipleChoiceBlock.color = "#10A3C8";
            _this.multipleChoiceBlock.alpha = 0.6;
            _this.multipleChoiceBlock.textBlock.alpha = (1 / _this.multipleChoiceBlock.alpha);
            _this.multipleChoiceBlock.cornerRadius = 20;
            _this.multipleChoiceBlock.onPointerClickObservable.add(function () {
                _this.Reset();
            });
            multipleChoiceContainer.addControl(_this.multipleChoiceBlock);
            _this.buttons[0].width = "100%";
            _this.buttons[0].heightInPixels = 150;
            _this.buttons[0].textBlock.fontSize = "34px";
            _this.buttons[0].color = "#10A3C8";
            _this.buttons[0].background = "white";
            _this.buttons[0].cornerRadius = 20;
            _this.buttons[0].paddingBottom = "20px";
            _this.buttons[0].image.widthInPixels = 350;
            _this.buttons[0].image.heightInPixels = 100;
            multipleChoiceContainer.addControl(_this.buttons[0]);
            _this.buttons[1].width = "100%";
            _this.buttons[1].heightInPixels = 150;
            _this.buttons[1].textBlock.fontSize = "34px";
            _this.buttons[1].color = "#10A3C8";
            _this.buttons[1].background = "white";
            _this.buttons[1].cornerRadius = 20;
            _this.buttons[1].paddingBottom = "20px";
            _this.buttons[1].image.widthInPixels = 350;
            _this.buttons[1].image.heightInPixels = 100;
            multipleChoiceContainer.addControl(_this.buttons[1]);
            _this.buttons[2].width = "100%";
            _this.buttons[2].heightInPixels = 150;
            _this.buttons[2].textBlock.fontSize = "34px";
            _this.buttons[2].color = "#10A3C8";
            _this.buttons[2].background = "white";
            _this.buttons[2].cornerRadius = 20;
            _this.buttons[2].paddingBottom = "20px";
            _this.buttons[2].image.widthInPixels = 350;
            _this.buttons[2].image.heightInPixels = 100;
            multipleChoiceContainer.addControl(_this.buttons[2]);
            _this.addControl(multipleChoiceContainer);
            return _this;
        }
        MultipleChoiceImage.prototype.setmultipleChoice = function (actionSystem) {
            var _this = this;
            this.Reset();
            this.isVisible = true;
            this.multipleChoiceBlock.textBlock.text = actionSystem.conversation;
            var _loop_1 = function (i) {
                this_1.buttons[i].image.source = actionSystem.choice[i];
                this_1.buttons[i].onPointerClickObservable.add(function () {
                    if (actionSystem.correctChoice == i) {
                        _this.buttons[0].isEnabled = false;
                        _this.buttons[1].isEnabled = false;
                        _this.buttons[2].isEnabled = false;
                        _this.multipleChoiceBlock.textBlock.text = "Continue";
                        _this.multipleChoiceBlock.isEnabled = true;
                        PROJECT.scoreSystem.setScore(actionSystem.score);
                        _this.buttons[i].background = "#50b848";
                        _this.buttons[i].color = "white";
                        _this.buttons[i].image.source = "";
                        _this.buttons[i].textBlock.text = actionSystem.answer[i];
                        GameGUI.achievment.SetAchievment(actionSystem);
                        PROJECT.GameSystem.soundSystem.Correct_Answer.play();
                    }
                    else {
                        _this.buttons[i].isEnabled = false;
                        _this.buttons[i].image.source = "";
                        _this.buttons[i].background = "#fa4616";
                        _this.buttons[i].color = "white";
                        PROJECT.GameSystem.soundSystem.Wrong_Answer.play();
                    }
                    _this.buttons[i].textBlock.text = actionSystem.answer[i];
                });
            };
            var this_1 = this;
            for (var i = 0; i < 3; i++) {
                _loop_1(i);
            }
        };
        MultipleChoiceImage.prototype.Reset = function () {
            this.isVisible = false;
            this.multipleChoiceBlock.isEnabled = false;
            this.buttons[0].isEnabled = true;
            this.buttons[0].background = "white";
            this.buttons[0].color = "#10A3C8";
            this.buttons[1].isEnabled = true;
            this.buttons[1].background = "white";
            this.buttons[1].color = "#10A3C8";
            this.buttons[2].isEnabled = true;
            this.buttons[2].background = "white";
            this.buttons[2].color = "#10A3C8";
        };
        return MultipleChoiceImage;
    }(BABYLON.GUI.Rectangle));
    var MultipleChoice = /** @class */ (function (_super) {
        __extends(MultipleChoice, _super);
        function MultipleChoice() {
            var _this = _super.call(this) || this;
            _this.multipleChoiceBlock = BABYLON.GUI.Button.CreateSimpleButton("but", "");
            _this.buttons = [BABYLON.GUI.Button.CreateSimpleButton("but", ""), BABYLON.GUI.Button.CreateSimpleButton("but", "")];
            _this.isVisible = false;
            _this.width = "100%";
            _this.height = "100%";
            _this.isPointerBlocker = true;
            var multipleChoiceContainer = new BABYLON.GUI.StackPanel();
            multipleChoiceContainer.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;
            multipleChoiceContainer.width = "50%";
            multipleChoiceContainer.heightInPixels = 450;
            _this.multipleChoiceBlock.isEnabled = false;
            _this.multipleChoiceBlock.textBlock.color = "white";
            _this.multipleChoiceBlock.width = "100%";
            _this.multipleChoiceBlock.heightInPixels = 150;
            _this.multipleChoiceBlock.fontSize = "34px";
            _this.multipleChoiceBlock.paddingBottom = "30px";
            _this.multipleChoiceBlock.background = "black";
            _this.multipleChoiceBlock.color = "#10A3C8";
            _this.multipleChoiceBlock.alpha = 0.6;
            _this.multipleChoiceBlock.textBlock.alpha = (1 / _this.multipleChoiceBlock.alpha);
            _this.multipleChoiceBlock.cornerRadius = 20;
            _this.multipleChoiceBlock.onPointerClickObservable.add(function () {
                _this.Reset();
            });
            multipleChoiceContainer.addControl(_this.multipleChoiceBlock);
            _this.buttons[0].width = "100%";
            _this.buttons[0].heightInPixels = 150;
            _this.buttons[0].textBlock.fontSize = "34px";
            _this.buttons[0].color = "#10A3C8";
            _this.buttons[0].background = "white";
            _this.buttons[0].cornerRadius = 20;
            _this.buttons[0].paddingBottom = "20px";
            multipleChoiceContainer.addControl(_this.buttons[0]);
            _this.buttons[1].width = "100%";
            _this.buttons[1].heightInPixels = 150;
            _this.buttons[1].textBlock.fontSize = "34px";
            _this.buttons[1].color = "#10A3C8";
            _this.buttons[1].background = "white";
            _this.buttons[1].cornerRadius = 20;
            _this.buttons[1].paddingBottom = "20px";
            multipleChoiceContainer.addControl(_this.buttons[1]);
            _this.addControl(multipleChoiceContainer);
            return _this;
        }
        MultipleChoice.prototype.setmultipleChoice = function (actionSystem, callback) {
            var _this = this;
            if (callback === void 0) { callback = null; }
            this.Reset();
            this.isVisible = true;
            PROJECT.GameSystem._GameSystem.toggleMovement(true);
            this.multipleChoiceBlock.textBlock.text = actionSystem.conversation;
            this.callback = callback;
            var _loop_2 = function (i) {
                this_2.buttons[i].textBlock.text = actionSystem.choice[i];
                this_2.buttons[i].onPointerClickObservable.add(function () {
                    if (actionSystem.correctChoice == i) {
                        _this.buttons[0].isEnabled = false;
                        _this.buttons[1].isEnabled = false;
                        _this.multipleChoiceBlock.textBlock.text = "Click to continue";
                        _this.multipleChoiceBlock.isEnabled = true;
                        PROJECT.scoreSystem.setScore(actionSystem.score);
                        _this.buttons[i].background = "#50b848";
                        _this.buttons[i].color = "white";
                        if (actionSystem.achievement != null) {
                            GameGUI.achievment.SetAchievment(actionSystem);
                        }
                        _this.buttons[0].onPointerClickObservable.clear();
                        _this.buttons[1].onPointerClickObservable.clear();
                        PROJECT.GameSystem.soundSystem.Correct_Answer.play();
                    }
                    else {
                        _this.buttons[i].isEnabled = false;
                        _this.buttons[i].background = "#fa4616";
                        _this.buttons[i].color = "white";
                        PROJECT.GameSystem.soundSystem.Wrong_Answer.play();
                    }
                    _this.buttons[i].textBlock.text = actionSystem.answer[i];
                });
            };
            var this_2 = this;
            for (var i = 0; i < 2; i++) {
                _loop_2(i);
            }
        };
        MultipleChoice.prototype.Reset = function () {
            this.isVisible = false;
            PROJECT.GameSystem._GameSystem.toggleMovement(false);
            this.multipleChoiceBlock.isEnabled = false;
            this.buttons[0].isEnabled = true;
            this.buttons[0].background = "white";
            this.buttons[0].color = "#10A3C8";
            this.buttons[1].isEnabled = true;
            this.buttons[1].background = "white";
            this.buttons[1].color = "#10A3C8";
            if (this.callback != null) {
                this.callback();
                this.callback = null;
            }
        };
        return MultipleChoice;
    }(BABYLON.GUI.Rectangle));
    var Phone = /** @class */ (function (_super) {
        __extends(Phone, _super);
        function Phone() {
            var _this = _super.call(this) || this;
            _this.isVisible = false;
            var phoneCase = new BABYLON.GUI.Rectangle();
            phoneCase.widthInPixels = 450;
            phoneCase.heightInPixels = 750;
            phoneCase.background = "black";
            phoneCase.cornerRadius = 30;
            var rect = new BABYLON.GUI.StackPanel();
            rect.widthInPixels = 400;
            rect.heightInPixels = 700;
            rect.background = "#333333";
            _this.addControl(rect);
            var paddingRect = new BABYLON.GUI.Rectangle();
            paddingRect.heightInPixels = 100;
            paddingRect.widthInPixels = 10;
            paddingRect.thickness = 0;
            rect.addControl(paddingRect);
            var numbers = new BABYLON.GUI.TextBlock();
            numbers.widthInPixels = 300;
            numbers.heightInPixels = 100;
            numbers.fontSize = 90;
            numbers.color = "#ffffff";
            numbers.text = "";
            rect.addControl(numbers);
            var stack = new BABYLON.GUI.Rectangle();
            stack.widthInPixels = 300;
            stack.heightInPixels = 300;
            stack.color = "#808080";
            stack.thickness = 0;
            var arr = [9, 1, 1];
            var currentKey = 0;
            var buttonArray = new Array(10);
            var key1, key9;
            var hasPressed9 = false;
            var _loop_3 = function (i) {
                var button1_1 = BABYLON.GUI.Button.CreateSimpleButton("but1", String(i));
                buttonArray[i] = button1_1;
                button1_1.parent = stack;
                button1_1.widthInPixels = 100;
                button1_1.heightInPixels = 100;
                button1_1.textBlock.fontSize = 55;
                button1_1.color = "#808080";
                button1_1.textBlock.color = "#ffffff";
                button1_1.thickness = 1;
                if (i == 1 || i == 4 || i == 7) {
                    button1_1.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
                }
                else if (i == 2 || i == 5 || i == 8) {
                    button1_1.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
                }
                else if (i == 3 || i == 6 || i == 9) {
                    button1_1.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_RIGHT;
                }
                if (i == 1 || i == 2 || i == 3) {
                    button1_1.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
                }
                else if (i == 4 || i == 5 || i == 6) {
                    button1_1.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER;
                }
                else if (i == 7 || i == 8 || i == 9) {
                    button1_1.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;
                }
                if (i == 1) {
                    key1 = button1_1;
                }
                else if (i == 9) {
                    key9 = button1_1;
                }
                wrong = new BABYLON.Animation("wrong", "diffuseColor", 60, BABYLON.Animation.ANIMATIONTYPE_COLOR3, BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);
                keys = [
                    { frame: 0, value: new BABYLON.Color3(0, 1, 0) },
                    { frame: 20, value: new BABYLON.Color3(1, 0, 0) },
                    { frame: 30, value: new BABYLON.Color3(0.5, 0, 0) },
                    { frame: 40, value: new BABYLON.Color3(1, 0, 0) },
                    { frame: 60, value: new BABYLON.Color3(0, 1, 0) },
                ];
                wrong.setKeys(keys);
                button1_1.onPointerUpObservable.add(function () {
                    if (button1_1.textBlock.text == String(arr[currentKey])) {
                        numbers.text = numbers.text + String(arr[currentKey]);
                        currentKey += 1;
                        if (currentKey == 3) {
                        }
                        PROJECT.GameSystem.soundSystem.keytone.play();
                    }
                    else {
                        PROJECT.GameSystem.soundSystem.Wrong_Answer.play();
                    }
                });
                stack.addControl(button1_1);
            };
            var wrong, keys;
            for (var i = 1; i < 10; i++) {
                _loop_3(i);
            }
            var stack2 = new BABYLON.GUI.Rectangle();
            stack2.widthInPixels = 100;
            stack2.heightInPixels = 100;
            stack2.thickness = 0;
            var button1 = BABYLON.GUI.Button.CreateSimpleButton("but1", String(0));
            button1.parent = stack2;
            button1.widthInPixels = 100;
            button1.heightInPixels = 100;
            button1.textBlock.fontSize = 55;
            button1.textBlock.color = "#ffffff";
            button1.color = "#808080";
            button1.thickness = 2;
            button1.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
            button1.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;
            stack2.addControl(button1);
            var stack3 = new BABYLON.GUI.Rectangle();
            stack3.widthInPixels = 300;
            stack3.heightInPixels = 100;
            stack3.thickness = 0;
            var button = BABYLON.GUI.Button.CreateImageButton("but", "", "./scenes/img/icons/phone-dial-btn.png");
            button.image.widthInPixels = 300;
            button.heightInPixels = 50;
            button.thickness = 0;
            button.onPointerUpObservable.add(function () {
                if (currentKey == 3) {
                    GameGUI.phone.isVisible = false;
                    GameGUI.achievment.SetAchievment(PROJECT.GameSystem.ActionSystemContainer.hazard_DownDangerDial);
                    PROJECT.AnimationSystem.Meters();
                    PROJECT.GameSystem.soundSystem.call.play();
                }
            });
            stack3.addControl(button);
            rect.addControl(stack);
            rect.addControl(stack2);
            rect.addControl(stack3);
            phoneCase.addControl(rect);
            _this.addControl(phoneCase);
            return _this;
        }
        return Phone;
    }(BABYLON.GUI.Rectangle));
    PROJECT.Phone = Phone;
    var Jump = /** @class */ (function (_super) {
        __extends(Jump, _super);
        function Jump() {
            var _this = _super.call(this) || this;
            _this.iconPos = 0;
            _this.isVisible = false;
            _this.width = "100%";
            _this.height = "100%";
            _this.background = "black";
            _this.alpha = 0.6;
            _this.isPointerBlocker = true;
            _this.thickness = 0;
            _this.onPointerDownObservable.add(function () {
                if (_this.iconPos >= -100 && _this.iconPos <= 100) {
                    console.log(_this.iconPos);
                    GameGUI.jump.isVisible = false;
                    GameGUI.jumpFeet.isVisible = true;
                    PROJECT.GameSystem.mainCameraSecondStage.position = PROJECT.GameSystem.mainCameraSecondStage.position.add(new BABYLON.Vector3(-0.9, 0, -1));
                    PROJECT.GameSystem.soundSystem.Correct_Answer.play();
                }
                else {
                    PROJECT.GameSystem.soundSystem.Wrong_Answer.play();
                }
            });
            var stack = new BABYLON.GUI.StackPanel();
            _this.addControl(stack);
            stack.alpha = (1 / _this.alpha);
            stack.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
            stack.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER;
            stack.widthInPixels = 900;
            stack.heightInPixels = 250;
            var rectheight = 30;
            var rectangle = new BABYLON.GUI.Rectangle();
            rectangle.widthInPixels = 800;
            rectangle.heightInPixels = rectheight;
            rectangle.cornerRadius = 30;
            rectangle.background = "#FA4616";
            rectangle.thickness = 0;
            var rec2 = new BABYLON.GUI.Rectangle();
            rec2.widthInPixels = 400;
            rec2.heightInPixels = rectheight;
            rec2.background = "white";
            rec2.thickness = 0;
            rectangle.addControl(rec2);
            var rec3 = new BABYLON.GUI.Rectangle();
            rec3.widthInPixels = 200;
            rec3.heightInPixels = rectheight;
            rec3.background = "#50B848";
            rec3.thickness = 0;
            rectangle.addControl(rec3);
            _this.image = new BABYLON.GUI.Image("jumpImg", "./scenes/img/icons/hazard-jumping.png");
            _this.image.widthInPixels = 100;
            _this.image.heightInPixels = 100;
            _this.image.metadata = { speed: 1, distance: -1 };
            stack.addControl(_this.image);
            var textStack = new BABYLON.GUI.Rectangle();
            textStack.widthInPixels = 700;
            textStack.heightInPixels = 34;
            textStack.thickness = 0;
            stack.addControl(rectangle);
            var strong = new BABYLON.GUI.TextBlock("strong", "Jump too weak");
            strong.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
            strong.widthInPixels = 300;
            strong.heightInPixels = 34;
            strong.fontSize = 30;
            strong.color = "white";
            textStack.addControl(strong);
            var strong2 = new BABYLON.GUI.TextBlock("strong", "Jump too strong");
            strong2.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_RIGHT;
            strong2.widthInPixels = 300;
            strong2.heightInPixels = 34;
            strong2.fontSize = 30;
            strong2.color = "white";
            textStack.addControl(strong2);
            stack.addControl(textStack);
            return _this;
        }
        return Jump;
    }(BABYLON.GUI.Rectangle));
    PROJECT.Jump = Jump;
    var JumpFeet = /** @class */ (function (_super) {
        __extends(JumpFeet, _super);
        function JumpFeet() {
            var _this = _super.call(this) || this;
            _this.isVisible = false;
            _this.background = "black";
            _this.alpha = 0.6;
            var stack = new BABYLON.GUI.StackPanel();
            stack.alpha = (1 / _this.alpha);
            stack.isVertical = false;
            var isRight = true;
            var steps = 0;
            _this.addControl(stack);
            var buttonL = BABYLON.GUI.Button.CreateImageButton("but", "", "./scenes/img/icons/shoe-icon-left.png");
            var buttonR = BABYLON.GUI.Button.CreateImageButton("but", "", "./scenes/img/icons/shoe-icon-right.png");
            buttonL.thickness = 3;
            buttonL.widthInPixels = 200;
            buttonL.heightInPixels = 400;
            buttonL.image.widthInPixels = 198;
            buttonL.image.heightInPixels = 398;
            buttonL.cornerRadius = 10;
            stack.addControl(buttonL);
            buttonL.onPointerUpObservable.add(function () {
                if (!isRight) {
                    if (steps < 7) {
                        buttonL.color = "red";
                        buttonR.color = "green";
                        buttonL.isEnabled = false;
                        buttonR.isEnabled = true;
                        isRight = true;
                        steps += 1;
                        PROJECT.GameSystem.mainCameraSecondStage.position = PROJECT.GameSystem.mainCameraSecondStage.position.add(new BABYLON.Vector3(-0.9, 0, -1));
                    }
                    else {
                        GameGUI.jumpFeet.isVisible = false;
                        GameGUI.achievment.SetAchievment(PROJECT.GameSystem.ActionSystemContainer.hazard_SafetyShuffle);
                        PROJECT.AnimationSystem.EndScreen();
                    }
                }
            });
            var space = new BABYLON.GUI.Rectangle();
            space.widthInPixels = 50;
            space.heightInPixels = 1;
            space.thickness = 0;
            stack.addControl(space);
            buttonR.thickness = 3;
            buttonR.widthInPixels = 200;
            buttonR.heightInPixels = 400;
            buttonR.image.widthInPixels = 198;
            buttonR.image.heightInPixels = 398;
            buttonR.cornerRadius = 10;
            stack.addControl(buttonR);
            buttonR.onPointerUpObservable.add(function () {
                if (isRight) {
                    if (steps < 8) {
                        buttonL.color = "green";
                        buttonR.color = "red";
                        buttonL.isEnabled = true;
                        buttonR.isEnabled = false;
                        isRight = false;
                        steps += 1;
                        PROJECT.GameSystem.mainCameraSecondStage.position = PROJECT.GameSystem.mainCameraSecondStage.position.add(new BABYLON.Vector3(-0.9, 0, -1));
                    }
                    else {
                        GameGUI.jumpFeet.isVisible = false;
                        PROJECT.AnimationSystem.EndScreen();
                    }
                }
            });
            if (isRight) {
                buttonL.color = "red";
                buttonR.color = "green";
                buttonL.isEnabled = false;
                buttonR.isEnabled = true;
            }
            else {
                buttonL.color = "green";
                buttonR.color = "red";
                buttonL.isEnabled = true;
                buttonR.isEnabled = false;
            }
            return _this;
        }
        return JumpFeet;
    }(BABYLON.GUI.Rectangle));
    PROJECT.JumpFeet = JumpFeet;
    //Continue button then show achievements. 
    var PowerSmartScreen = /** @class */ (function (_super) {
        __extends(PowerSmartScreen, _super);
        function PowerSmartScreen() {
            var _this = _super.call(this) || this;
            _this.headerScore = new BABYLON.GUI.TextBlock("score", PROJECT.scoreSystem.score + " PTS");
            _this.hazardsFoundDesc = new BABYLON.GUI.TextBlock("personalBestDesc", PROJECT.scoreSystem.hazardsFound + "  /18");
            _this.powerSmartFoundDesc = new BABYLON.GUI.TextBlock("personalBestDesc", "" + PROJECT.scoreSystem.currentToken + "/5");
            _this.isVisible = false;
            _this.width = "80%";
            _this.heightInPixels = 400;
            _this.background = "#10A3C8";
            _this.cornerRadius = 15;
            var headerStack = new BABYLON.GUI.StackPanel();
            headerStack.isVertical = true;
            headerStack.heightInPixels = 300;
            headerStack.width = "100%";
            var headerTitleRect = new BABYLON.GUI.Rectangle();
            headerTitleRect.background = "white";
            headerTitleRect.width = "95%";
            headerTitleRect.heightInPixels = 50;
            headerTitleRect.cornerRadius = 5;
            var headerTitle = new BABYLON.GUI.TextBlock("title", "Power Smart score:");
            headerTitle.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
            headerTitle.widthInPixels = 400;
            headerTitle.color = "#10A3C8";
            headerTitle.fontSize = "40px";
            headerTitleRect.addControl(headerTitle);
            headerStack.addControl(headerTitleRect);
            _this.addControl(headerStack);
            var scoreStack = new BABYLON.GUI.StackPanel();
            scoreStack.width = "100%";
            scoreStack.heightInPixels = 100;
            scoreStack.isVertical = false;
            _this.headerScore.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
            _this.headerScore.widthInPixels = 500;
            _this.headerScore.heightInPixels = 100;
            _this.headerScore.color = "white";
            _this.headerScore.fontSize = 70;
            scoreStack.addControl(_this.headerScore);
            var headerScoreDesc = new BABYLON.GUI.TextBlock("score", "");
            headerScoreDesc.widthInPixels = 300;
            headerScoreDesc.heightInPixels = 100;
            headerScoreDesc.fontSize = 45;
            headerScoreDesc.color = "white";
            scoreStack.addControl(headerScoreDesc);
            headerStack.addControl(scoreStack);
            var headerHazardsStack = new BABYLON.GUI.StackPanel();
            headerHazardsStack.isVertical = false;
            headerHazardsStack.width = "100%";
            headerHazardsStack.heightInPixels = 50;
            var hazardsFound = new BABYLON.GUI.TextBlock("personalBest", "Hazards found:");
            hazardsFound.widthInPixels = 410;
            hazardsFound.heightInPixels = 50;
            hazardsFound.fontSize = 30;
            hazardsFound.color = "white";
            headerHazardsStack.addControl(hazardsFound);
            _this.hazardsFoundDesc.widthInPixels = 500;
            _this.hazardsFoundDesc.heightInPixels = 50;
            _this.hazardsFoundDesc.fontSize = 30;
            _this.hazardsFoundDesc.color = "white";
            _this.hazardsFoundDesc.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_RIGHT;
            headerHazardsStack.addControl(_this.hazardsFoundDesc);
            headerStack.addControl(headerHazardsStack);
            var powerSmartStack = new BABYLON.GUI.StackPanel();
            powerSmartStack.isVertical = false;
            powerSmartStack.width = "100%";
            powerSmartStack.heightInPixels = 50;
            var powerSmartFound = new BABYLON.GUI.TextBlock("personalBest", "Power Smart tokens:");
            powerSmartFound.widthInPixels = 480;
            powerSmartFound.heightInPixels = 50;
            powerSmartFound.fontSize = 30;
            powerSmartFound.color = "white";
            powerSmartStack.addControl(powerSmartFound);
            _this.powerSmartFoundDesc.widthInPixels = 380;
            _this.powerSmartFoundDesc.heightInPixels = 50;
            _this.powerSmartFoundDesc.fontSize = 30;
            _this.powerSmartFoundDesc.color = "white";
            powerSmartStack.addControl(_this.powerSmartFoundDesc);
            headerStack.addControl(powerSmartStack);
            var button = BABYLON.GUI.Button.CreateSimpleButton("achievements", "Show Achievments");
            button.textBlock.color = "#10A3C8";
            button.background = "white";
            button.widthInPixels = 500;
            button.heightInPixels = 100;
            button.onPointerDownObservable.add(function () {
                _this.isVisible = false;
                GameGUI.achievmentsScreen.refreshCards();
                GameGUI.achievmentsScreen.isVisible = true;
            });
            powerSmartStack.addControl(button);
            return _this;
        }
        PowerSmartScreen.prototype.show = function () {
            this.isVisible = true;
        };
        PowerSmartScreen.prototype.refresh = function () {
            this.headerScore.text = PROJECT.scoreSystem.score + " PTS";
            this.hazardsFoundDesc.text = PROJECT.scoreSystem.hazardsFound + "  /18";
            this.powerSmartFoundDesc.text = "" + PROJECT.scoreSystem.currentToken + "/5";
        };
        return PowerSmartScreen;
    }(BABYLON.GUI.Rectangle));
    PROJECT.PowerSmartScreen = PowerSmartScreen;
    var AchievmentsScreen = /** @class */ (function (_super) {
        __extends(AchievmentsScreen, _super);
        function AchievmentsScreen() {
            var _this = _super.call(this) || this;
            _this.achievementCards = [];
            _this.isVisible = false;
            _this.width = "100%";
            _this.height = "100%";
            _this.background = "black";
            _this.alpha = 0.6;
            _this.thickness = 0;
            _this.isPointerBlocker = true;
            var scroll = new BABYLON.GUI.ScrollViewer();
            scroll.alpha = (1 / _this.alpha);
            scroll.widthInPixels = 900;
            scroll.heightInPixels = 600;
            scroll.thickness = 0;
            scroll.barColor = "#10A3C8";
            scroll.barBackground = "white";
            _this.addControl(scroll);
            _this.stack = new BABYLON.GUI.StackPanel();
            _this.stack.isVertical = true;
            scroll.addControl(_this.stack);
            var achievmentTitleRect = new BABYLON.GUI.Rectangle();
            achievmentTitleRect.background = "white";
            achievmentTitleRect.width = "95%";
            achievmentTitleRect.heightInPixels = 50;
            achievmentTitleRect.cornerRadius = 5;
            var achievmentheaderTitle = new BABYLON.GUI.TextBlock("title", "Achievements:");
            achievmentheaderTitle.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
            achievmentheaderTitle.widthInPixels = 300;
            achievmentheaderTitle.color = "#10A3C8";
            achievmentheaderTitle.fontSize = "40px";
            achievmentheaderTitle.fontWeight = "bold";
            achievmentTitleRect.addControl(achievmentheaderTitle);
            _this.stack.addControl(achievmentTitleRect);
            PROJECT.GameSystem.ActionSystemContainer.actionSystems.forEach(function (element) {
                var card = new AchievementCard(element);
                _this.stack.addControl(card);
                _this.achievementCards.push(card);
            });
            var button = BABYLON.GUI.Button.CreateImageButton("click to back", "", "./scenes/img/icons/hud_x-btn.png");
            button.alpha = (1 / _this.alpha);
            button.thickness = 0;
            button.widthInPixels = 100;
            button.heightInPixels = 100;
            button.leftInPixels = -50;
            button.topInPixels = 50;
            button.image.widthInPixels = 100;
            button.image.heightInPixels = 100;
            button.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_RIGHT;
            button.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
            button.onPointerDownObservable.add(function () {
                _this.isVisible = false;
                GameGUI.mainscreen.isVisible = true;
            });
            _this.addControl(button);
            return _this;
        }
        AchievmentsScreen.prototype.refreshCards = function () {
            this.achievementCards.forEach(function (element) {
                element.show();
            });
        };
        return AchievmentsScreen;
    }(BABYLON.GUI.Rectangle));
    PROJECT.AchievmentsScreen = AchievmentsScreen;
    var AchievementCard = /** @class */ (function (_super) {
        __extends(AchievementCard, _super);
        function AchievementCard(actionSystem) {
            var _this = _super.call(this) || this;
            _this._actionSystem = actionSystem;
            _this.width = "100%";
            _this.heightInPixels = 120;
            if (actionSystem.isCompleted) {
                _this.background = "#10A3C8";
            }
            else {
                _this.background = "#d2d3d4";
            }
            _this.cornerRadius = 15;
            _this.paddingBottomInPixels = 5;
            var achievmentStack = new BABYLON.GUI.StackPanel();
            achievmentStack.isVertical = true;
            achievmentStack.heightInPixels = 90;
            achievmentStack.width = "90%";
            achievmentStack.isVertical = false;
            _this.icon = new BABYLON.GUI.Image("icon", "./scenes/img/achievement_icons/noicon.png");
            if (actionSystem.isCompleted) {
                _this.icon.source = "./scenes/img/achievement_icons/" + actionSystem.image;
            }
            _this.icon.widthInPixels = 90;
            _this.icon.heightInPixels = 90;
            achievmentStack.addControl(_this.icon);
            var tempAchievmentStack = new BABYLON.GUI.StackPanel();
            var achievmentCardTitle = new BABYLON.GUI.TextBlock("desc", actionSystem.achievement);
            achievmentCardTitle.fontStyle = "bold";
            achievmentCardTitle.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
            achievmentCardTitle.widthInPixels = 300;
            achievmentCardTitle.heightInPixels = 30;
            achievmentCardTitle.fontSize = 25;
            achievmentCardTitle.color = "white";
            tempAchievmentStack.addControl(achievmentCardTitle);
            var achievmentCardDesc = new BABYLON.GUI.TextBlock("desc", actionSystem.description);
            achievmentCardDesc.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
            achievmentCardDesc.fontSize = 17;
            achievmentCardDesc.color = "white";
            achievmentCardDesc.textWrapping = true;
            achievmentCardDesc.widthInPixels = 600;
            achievmentCardDesc.heightInPixels = 60;
            tempAchievmentStack.addControl(achievmentCardDesc);
            achievmentStack.addControl(tempAchievmentStack);
            _this.addControl(achievmentStack);
            return _this;
        }
        AchievementCard.prototype.show = function () {
            if (this._actionSystem.isCompleted) {
                this.background = "#10A3C8";
            }
            else {
                this.background = "#d2d3d4";
            }
            if (this._actionSystem.isCompleted) {
                this.icon.source = "./scenes/img/achievement_icons/" + this._actionSystem.image;
            }
        };
        return AchievementCard;
    }(BABYLON.GUI.Rectangle));
    var TitleScreen = /** @class */ (function (_super) {
        __extends(TitleScreen, _super);
        function TitleScreen() {
            var _this = _super.call(this) || this;
            _this.width = "100%";
            _this.height = "400px";
            _this.background = "#10A3C8";
            _this.cornerRadius = 15;
            var stack = new BABYLON.GUI.StackPanel();
            stack.isVertical = true;
            var rectTitle = new BABYLON.GUI.Rectangle();
            rectTitle.background = "white";
            rectTitle.width = "95%";
            rectTitle.height = "50px";
            rectTitle.cornerRadius = 5;
            var title = new BABYLON.GUI.TextBlock("title", "Power Smart score:");
            title.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
            title.width = "400px";
            title.color = "#10A3C8";
            title.fontSize = "40px";
            rectTitle.addControl(title);
            stack.addControl(rectTitle);
            var tempScore = "10,000";
            var score = new BABYLON.GUI.TextBlock("score", tempScore + " PTS");
            score.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
            score.width = "500px";
            score.height = "100px";
            score.color = "white";
            score.fontSize = "70px";
            stack.addControl(score);
            var best = new BABYLON.GUI.TextBlock("PersonalBest", "Personal Best");
            best.color = "white";
            best.height = "30px";
            stack.addControl(best);
            var best2 = new BABYLON.GUI.TextBlock("PersonalBest", "10,000");
            best2.color = "white";
            best2.height = "30px";
            stack.addControl(best2);
            var best3 = new BABYLON.GUI.TextBlock("PersonalBest", "Hazards found");
            best3.color = "white";
            best3.height = "30px";
            stack.addControl(best3);
            _this.addControl(stack);
            return _this;
        }
        return TitleScreen;
    }(BABYLON.GUI.Rectangle));
    PROJECT.TitleScreen = TitleScreen;
    var EndScoreScreen = /** @class */ (function (_super) {
        __extends(EndScoreScreen, _super);
        function EndScoreScreen() {
            var _this = _super.call(this) || this;
            _this.isActive = false;
            _this.background = "black";
            _this.alpha = 0.6;
            _this.isPointerBlocker = true;
            _this.width = "100%";
            _this.height = "100%";
            var scroll = new BABYLON.GUI.ScrollViewer();
            scroll.alpha = (1 / _this.alpha);
            scroll.height = "700px";
            scroll.width = "80%";
            scroll.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER;
            scroll.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
            var title = new TitleScreen();
            scroll.addControl(title);
            _this.addControl(scroll);
            return _this;
        }
        return EndScoreScreen;
    }(BABYLON.GUI.Rectangle));
    PROJECT.EndScoreScreen = EndScoreScreen;
    var GameGUI = /** @class */ (function () {
        function GameGUI() {
            GameGUI._advancedDynamicTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("UI");
            GameGUI._advancedDynamicTexture.addControl(GameGUI.mainscreen);
            this.ShowTitleHud();
            GameGUI._advancedDynamicTexture.addControl(GameGUI.GameTimerPopup);
            GameGUI._advancedDynamicTexture.addControl(GameGUI.rightContainer);
            GameGUI._advancedDynamicTexture.addControl(GameGUI.scoreHud);
            GameGUI._advancedDynamicTexture.addControl(GameGUI.multipleChoice);
            GameGUI._advancedDynamicTexture.addControl(GameGUI.multipleChoiceImage);
            GameGUI._advancedDynamicTexture.addControl(GameGUI.fullUI);
            GameGUI._advancedDynamicTexture.addControl(GameGUI.kite);
            GameGUI._advancedDynamicTexture.addControl(GameGUI.tutorialUI);
            GameGUI._advancedDynamicTexture.addControl(GameGUI.ChooseTutorial);
            GameGUI._advancedDynamicTexture.addControl(GameGUI.crashBox);
            GameGUI._advancedDynamicTexture.addControl(GameGUI.timeUp);
            GameGUI._advancedDynamicTexture.addControl(GameGUI.phone);
            GameGUI._advancedDynamicTexture.addControl(GameGUI.jump);
            GameGUI._advancedDynamicTexture.addControl(GameGUI.jumpFeet);
            GameGUI._advancedDynamicTexture.addControl(GameGUI.tutorial);
            GameGUI._advancedDynamicTexture.addControl(GameGUI.crashScreen);
            GameGUI._advancedDynamicTexture.addControl(GameGUI.powerSmartScreen);
            GameGUI._advancedDynamicTexture.addControl(GameGUI.achievmentsScreen);
            GameGUI._advancedDynamicTexture.addControl(GameGUI.clickToContiue);
            GameGUI._advancedDynamicTexture.addControl(GameGUI.achievment);
            GameGUI.thumb = new Thumb();
            GameGUI.thumb.Show(false);
        }
        GameGUI.StartTutorial = function () {
            PROJECT.GameSystem._GameSystem.toggleMovement(true);
            PROJECT.GameSystem._GameSystem.switchCamera("mainCamera");
            GameGUI.tutorialUI.isVisible = true;
        };
        GameGUI.ShowTutorial = function () {
            GameGUI.ChooseTutorial.isVisible = true;
        };
        GameGUI.DoTutorial = function () {
            GameGUI.tutorial.isVisible = true;
        };
        GameGUI.ResumeGame = function () {
            PROJECT.GameSystem.GameControls.SetPause(false);
        };
        GameGUI.StartGame = function () {
            if (BABYLON.SceneManager.IsMobile() || BABYLON.SceneManager.IsIPAD() || BABYLON.SceneManager.IsIPHONE()) {
                GameGUI.thumb.Show(true);
                GameGUI._advancedDynamicTexture.idealWidth = 1800;
            }
            GameGUI.GameTimerPopup.start();
        };
        GameGUI.StartCrash = function () {
            PROJECT.GameSystem.soundSystem.Car_Crash.play();
            PROJECT.GameSystem.GameControls.isPaused = true;
            GameGUI.timer.isVisible = false;
            GameGUI.multipleChoice.isVisible = false;
            GameGUI.multipleChoiceImage.isVisible = false;
            GameGUI.crashScreen.isVisible = true;
        };
        GameGUI.ShowCrash = function () {
            GameGUI.timer.isVisible = false;
            GameGUI.multipleChoice.isVisible = false;
            GameGUI.multipleChoiceImage.isVisible = false;
            GameGUI.crashScreen.isVisible = true;
        };
        GameGUI.prototype.ShowTitleHud = function () {
            GameGUI.scoreHud.isVisible = false;
            GameGUI.rightContainer.isVisible = false;
            GameGUI.mainscreen.isVisible = true;
        };
        GameGUI.prototype.TimesUp = function () {
        };
        GameGUI.mainscreen = new MainScreen();
        GameGUI.scoreHud = new scoreHud();
        GameGUI.rightContainer = new RightContainer();
        GameGUI.achievment = new Achievment();
        GameGUI.multipleChoice = new MultipleChoice();
        GameGUI.multipleChoiceImage = new MultipleChoiceImage();
        GameGUI.fullUI = new FullUI();
        GameGUI.kite = new Kite();
        GameGUI.tutorialUI = new TutorialUI();
        GameGUI.ChooseTutorial = new ChooseTutorial();
        GameGUI.crashBox = new CrashBox();
        GameGUI.timeUp = new TimeUp();
        GameGUI.phone = new Phone();
        GameGUI.jump = new Jump();
        GameGUI.jumpFeet = new JumpFeet();
        GameGUI.tutorial = new Tutorial();
        GameGUI.crashScreen = new CrashScreen();
        GameGUI.powerSmartScreen = new PowerSmartScreen();
        GameGUI.achievmentsScreen = new AchievmentsScreen();
        GameGUI.clickToContiue = new ClickToContinueTextBox();
        GameGUI.GameTimerPopup = new GameTimerPopup([
            'https://i.imgur.com/cvpslxc.png',
            'https://i.imgur.com/zeIIXaN.png',
            'https://i.imgur.com/m6aQnhh.png',
            'https://i.imgur.com/MdRcYzW.png'
        ], {}, function () {
            GameGUI.timer = new GameTimer(600); //Game time
            GameGUI._advancedDynamicTexture.addControl(GameGUI.timer);
        });
        return GameGUI;
    }());
    PROJECT.GameGUI = GameGUI;
    var UIController = /** @class */ (function (_super) {
        __extends(UIController, _super);
        function UIController(owner, scene, tick, propertyBag) {
            if (tick === void 0) { tick = true; }
            if (propertyBag === void 0) { propertyBag = {}; }
            return _super.call(this, owner, scene, tick, propertyBag) || this;
        }
        UIController.prototype.start = function () {
            UIController.singleton = this;
            this.GameGUI = new GameGUI();
        };
        UIController.prototype.update = function () {
        };
        return UIController;
    }(BABYLON.MeshComponent));
    PROJECT.UIController = UIController;
})(PROJECT || (PROJECT = {}));
/* Babylon Camera Component Template */
var PROJECT;
/* Babylon Camera Component Template */
(function (PROJECT) {
    var camcomp = /** @class */ (function (_super) {
        __extends(camcomp, _super);
        function camcomp(owner, scene, tick, propertyBag) {
            if (tick === void 0) { tick = true; }
            if (propertyBag === void 0) { propertyBag = {}; }
            var _this = _super.call(this, owner, scene, tick, propertyBag) || this;
            _this.f = new BABYLON.Vector3(0, 0, 1);
            return _this;
        }
        camcomp.prototype.ready = function () {
            // Scene execute when ready
        };
        camcomp.prototype.start = function () {
        };
        camcomp.prototype.update = function () {
            // Update render loop function
            this.castRay();
        };
        camcomp.prototype.after = function () {
            // After render loop function
        };
        camcomp.prototype.destroy = function () {
            // Destroy component function
        };
        camcomp.prototype.vecToLocal = function (vector, mesh) {
            var m = mesh.getWorldMatrix();
            var v = BABYLON.Vector3.TransformCoordinates(vector, m);
            return v;
        };
        camcomp.prototype.castRay = function () {
            this.camPos = this.camera.position;
            var forward = new BABYLON.Vector3(0, 0, 1);
            forward = this.vecToLocal(forward, this.camera);
            var direction = forward.subtract(this.camPos);
            direction = BABYLON.Vector3.Normalize(direction);
            var length = 100;
            var ray = new BABYLON.Ray(this.camPos, direction, length);
            var rayHelper = new BABYLON.RayHelper(ray);
            var hit = this.scene.pickWithRay(ray);
            if (hit.pickedMesh) {
                console.log(hit);
            }
        };
        return camcomp;
    }(BABYLON.CameraComponent));
    PROJECT.camcomp = camcomp;
})(PROJECT || (PROJECT = {}));
/* Babylon Typescript Class Template */
var PROJECT;
/* Babylon Typescript Class Template */
(function (PROJECT) {
    var Particles = /** @class */ (function () {
        function Particles() {
        }
        Particles.emitParticle = function (particles, b) {
            if (b) {
                particles.start();
            }
            else {
                particles.stop();
            }
        };
        Particles.Sparks = function () {
            Particles.sparks = new BABYLON.ParticleSystem("particles", 48, PROJECT.GameSystem.gameScene);
            Particles.sparks.particleTexture = new BABYLON.Texture("./scenes/img/vfx/Spark.png", PROJECT.GameSystem.gameScene);
            Particles.sparks.emitter = new BABYLON.Vector3(10.3, 0.4, 10.5);
            Particles.sparks.minEmitBox = new BABYLON.Vector3(0.01, 0.01, 0.01);
            Particles.sparks.maxEmitBox = new BABYLON.Vector3(0.01, 0.01, 0.01);
            Particles.sparks.color1 = new BABYLON.Color4(0.93, 1, 0);
            Particles.sparks.color2 = new BABYLON.Color4(0.94, 0.92, 0);
            Particles.sparks.colorDead = new BABYLON.Color4(0, 0, 0.2, 0.0);
            Particles.sparks.minSize = 0.01;
            Particles.sparks.maxSize = 0.05;
            Particles.sparks.minLifeTime = 0.05;
            Particles.sparks.maxLifeTime = 0.1;
            Particles.sparks.emitRate = 48;
            Particles.sparks.blendMode = BABYLON.ParticleSystem.BLENDMODE_ONEONE;
            Particles.sparks.gravity = new BABYLON.Vector3(0, -10, 0);
            Particles.sparks.direction1 = new BABYLON.Vector3(-7, 8, 3);
            Particles.sparks.direction2 = new BABYLON.Vector3(7, 8, -3);
            Particles.sparks.minAngularSpeed = 0;
            Particles.sparks.maxAngularSpeed = Math.PI;
            Particles.sparks.minEmitPower = 0.5;
            Particles.sparks.maxEmitPower = 1;
            Particles.sparks.updateSpeed = 0.005;
            Particles.sparks.start();
        };
        Particles.CarSmoke = function () {
            Particles.carSmoke = new BABYLON.ParticleSystem("particles", 16, PROJECT.GameSystem.gameScene);
            Particles.carSmoke.particleTexture = new BABYLON.Texture("./scenes/img/vfx/Cloud.png", PROJECT.GameSystem.gameScene);
            Particles.carSmoke.emitter = new BABYLON.Vector3(14.5, 0.4, 34);
            Particles.carSmoke.color1 = new BABYLON.Color4(0.13, 0.14, 0.14);
            Particles.carSmoke.color2 = new BABYLON.Color4(0.49, 0.51, 0.53);
            Particles.carSmoke.colorDead = new BABYLON.Color4(0.36, 0.36, 0.41, 0);
            Particles.carSmoke.minSize = 1;
            Particles.carSmoke.maxSize = 2;
            Particles.carSmoke.minLifeTime = 0.03;
            Particles.carSmoke.maxLifeTime = 0.5;
            Particles.carSmoke.emitRate = 16;
            Particles.carSmoke.blendMode = BABYLON.ParticleSystem.BLENDMODE_ONEONE;
            Particles.carSmoke.gravity = new BABYLON.Vector3(0, -1, 0);
            Particles.carSmoke.direction1 = new BABYLON.Vector3(-1, 8, 1);
            Particles.carSmoke.direction2 = new BABYLON.Vector3(1, 8, -1);
            Particles.carSmoke.minAngularSpeed = 0;
            Particles.carSmoke.maxAngularSpeed = Math.PI;
            Particles.carSmoke.minEmitPower = 1;
            Particles.carSmoke.maxEmitPower = 3;
            Particles.carSmoke.updateSpeed = 0.005;
            Particles.carSmoke.start();
        };
        return Particles;
    }());
    PROJECT.Particles = Particles;
})(PROJECT || (PROJECT = {}));


