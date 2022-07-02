"use strict";
/* Options:
Date: 2022-07-02 07:39:19
Version: 6.10
Tip: To override a DTO option, remove "//" prefix before updating
BaseUrl: https://localhost:5001

//GlobalNamespace:
//MakePropertiesOptional: False
//AddServiceStackTypes: True
//AddResponseStatus: False
//AddImplicitVersion:
//AddDescriptionAsComments: True
//IncludeTypes:
//ExcludeTypes:
//DefaultImports:
*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Register = exports.UnAssignRoles = exports.AssignRoles = exports.Authenticate = exports.PlayerSaveRequest = exports.GameSceneRequest = exports.RegisterResponse = exports.UnAssignRolesResponse = exports.AssignRolesResponse = exports.AuthenticateResponse = exports.PlayerSaveResponse = exports.GameSceneResponse = exports.ResponseStatus = exports.ResponseError = exports.PlayerSave = exports.Inventory = exports.GameScene = exports.Item = exports.FrameStartCondition = exports.SceneStartCondition = exports.Spot = exports.InventoryClickCondition = exports.ClickCondition = exports.MouseHoverCondition = exports.MouseSwipeCondition = exports.Condition = exports.MasksImageResult = exports.MovesToFrameResult = exports.SpriteSheetRefResult = exports.SpriteSheetRef = exports.Character = exports.CharacterPieceSpriteSheetReference = exports.RemoveCharacterPieceGroupResult = exports.UpdateCharacterPieceGroupResult = exports.AddCharacterPieceGroupResult = exports.Result = exports.SpriteSheet = exports.Scene = exports.Project = exports.Frame = void 0;
var Frame = /** @class */ (function () {
    function Frame(init) {
        Object.assign(this, init);
    }
    return Frame;
}());
exports.Frame = Frame;
var Project = /** @class */ (function () {
    function Project(init) {
        Object.assign(this, init);
    }
    return Project;
}());
exports.Project = Project;
var Scene = /** @class */ (function (_super) {
    __extends(Scene, _super);
    function Scene(init) {
        var _this = _super.call(this, init) || this;
        Object.assign(_this, init);
        return _this;
    }
    return Scene;
}(Frame));
exports.Scene = Scene;
var SpriteSheet = /** @class */ (function () {
    function SpriteSheet(init) {
        Object.assign(this, init);
    }
    return SpriteSheet;
}());
exports.SpriteSheet = SpriteSheet;
var Result = /** @class */ (function () {
    function Result(init) {
        Object.assign(this, init);
    }
    return Result;
}());
exports.Result = Result;
var AddCharacterPieceGroupResult = /** @class */ (function (_super) {
    __extends(AddCharacterPieceGroupResult, _super);
    function AddCharacterPieceGroupResult(init) {
        var _this = _super.call(this, init) || this;
        Object.assign(_this, init);
        return _this;
    }
    return AddCharacterPieceGroupResult;
}(Result));
exports.AddCharacterPieceGroupResult = AddCharacterPieceGroupResult;
var UpdateCharacterPieceGroupResult = /** @class */ (function (_super) {
    __extends(UpdateCharacterPieceGroupResult, _super);
    function UpdateCharacterPieceGroupResult(init) {
        var _this = _super.call(this, init) || this;
        Object.assign(_this, init);
        return _this;
    }
    return UpdateCharacterPieceGroupResult;
}(Result));
exports.UpdateCharacterPieceGroupResult = UpdateCharacterPieceGroupResult;
var RemoveCharacterPieceGroupResult = /** @class */ (function (_super) {
    __extends(RemoveCharacterPieceGroupResult, _super);
    function RemoveCharacterPieceGroupResult(init) {
        var _this = _super.call(this, init) || this;
        Object.assign(_this, init);
        return _this;
    }
    return RemoveCharacterPieceGroupResult;
}(Result));
exports.RemoveCharacterPieceGroupResult = RemoveCharacterPieceGroupResult;
var CharacterPieceSpriteSheetReference = /** @class */ (function () {
    function CharacterPieceSpriteSheetReference(init) {
        Object.assign(this, init);
    }
    return CharacterPieceSpriteSheetReference;
}());
exports.CharacterPieceSpriteSheetReference = CharacterPieceSpriteSheetReference;
var Character = /** @class */ (function () {
    function Character(init) {
        Object.assign(this, init);
    }
    return Character;
}());
exports.Character = Character;
var SpriteSheetRef = /** @class */ (function () {
    function SpriteSheetRef(init) {
        Object.assign(this, init);
    }
    return SpriteSheetRef;
}());
exports.SpriteSheetRef = SpriteSheetRef;
var SpriteSheetRefResult = /** @class */ (function (_super) {
    __extends(SpriteSheetRefResult, _super);
    function SpriteSheetRefResult(init) {
        var _this = _super.call(this, init) || this;
        Object.assign(_this, init);
        return _this;
    }
    return SpriteSheetRefResult;
}(Result));
exports.SpriteSheetRefResult = SpriteSheetRefResult;
var MovesToFrameResult = /** @class */ (function (_super) {
    __extends(MovesToFrameResult, _super);
    function MovesToFrameResult(init) {
        var _this = _super.call(this, init) || this;
        Object.assign(_this, init);
        return _this;
    }
    return MovesToFrameResult;
}(Result));
exports.MovesToFrameResult = MovesToFrameResult;
var MasksImageResult = /** @class */ (function (_super) {
    __extends(MasksImageResult, _super);
    function MasksImageResult(init) {
        var _this = _super.call(this, init) || this;
        Object.assign(_this, init);
        return _this;
    }
    return MasksImageResult;
}(Result));
exports.MasksImageResult = MasksImageResult;
var Condition = /** @class */ (function () {
    function Condition(init) {
        Object.assign(this, init);
    }
    return Condition;
}());
exports.Condition = Condition;
var MouseSwipeCondition = /** @class */ (function (_super) {
    __extends(MouseSwipeCondition, _super);
    function MouseSwipeCondition(init) {
        var _this = _super.call(this, init) || this;
        Object.assign(_this, init);
        return _this;
    }
    return MouseSwipeCondition;
}(Condition));
exports.MouseSwipeCondition = MouseSwipeCondition;
var MouseHoverCondition = /** @class */ (function (_super) {
    __extends(MouseHoverCondition, _super);
    function MouseHoverCondition(init) {
        var _this = _super.call(this, init) || this;
        Object.assign(_this, init);
        return _this;
    }
    return MouseHoverCondition;
}(Condition));
exports.MouseHoverCondition = MouseHoverCondition;
var ClickCondition = /** @class */ (function (_super) {
    __extends(ClickCondition, _super);
    function ClickCondition(init) {
        var _this = _super.call(this, init) || this;
        Object.assign(_this, init);
        return _this;
    }
    return ClickCondition;
}(Condition));
exports.ClickCondition = ClickCondition;
var InventoryClickCondition = /** @class */ (function (_super) {
    __extends(InventoryClickCondition, _super);
    function InventoryClickCondition(init) {
        var _this = _super.call(this, init) || this;
        Object.assign(_this, init);
        return _this;
    }
    return InventoryClickCondition;
}(ClickCondition));
exports.InventoryClickCondition = InventoryClickCondition;
var Spot = /** @class */ (function () {
    function Spot(init) {
        Object.assign(this, init);
    }
    return Spot;
}());
exports.Spot = Spot;
var SceneStartCondition = /** @class */ (function (_super) {
    __extends(SceneStartCondition, _super);
    function SceneStartCondition(init) {
        var _this = _super.call(this, init) || this;
        Object.assign(_this, init);
        return _this;
    }
    return SceneStartCondition;
}(Condition));
exports.SceneStartCondition = SceneStartCondition;
var FrameStartCondition = /** @class */ (function (_super) {
    __extends(FrameStartCondition, _super);
    function FrameStartCondition(init) {
        var _this = _super.call(this, init) || this;
        Object.assign(_this, init);
        return _this;
    }
    return FrameStartCondition;
}(Condition));
exports.FrameStartCondition = FrameStartCondition;
var Item = /** @class */ (function () {
    function Item(init) {
        Object.assign(this, init);
    }
    return Item;
}());
exports.Item = Item;
var GameScene = /** @class */ (function () {
    function GameScene(init) {
        Object.assign(this, init);
    }
    return GameScene;
}());
exports.GameScene = GameScene;
var Inventory = /** @class */ (function () {
    function Inventory(init) {
        Object.assign(this, init);
    }
    return Inventory;
}());
exports.Inventory = Inventory;
var PlayerSave = /** @class */ (function () {
    function PlayerSave(init) {
        Object.assign(this, init);
    }
    return PlayerSave;
}());
exports.PlayerSave = PlayerSave;
// @DataContract
var ResponseError = /** @class */ (function () {
    function ResponseError(init) {
        Object.assign(this, init);
    }
    return ResponseError;
}());
exports.ResponseError = ResponseError;
// @DataContract
var ResponseStatus = /** @class */ (function () {
    function ResponseStatus(init) {
        Object.assign(this, init);
    }
    return ResponseStatus;
}());
exports.ResponseStatus = ResponseStatus;
var GameSceneResponse = /** @class */ (function () {
    function GameSceneResponse(init) {
        Object.assign(this, init);
    }
    return GameSceneResponse;
}());
exports.GameSceneResponse = GameSceneResponse;
var PlayerSaveResponse = /** @class */ (function () {
    function PlayerSaveResponse(init) {
        Object.assign(this, init);
    }
    return PlayerSaveResponse;
}());
exports.PlayerSaveResponse = PlayerSaveResponse;
// @DataContract
var AuthenticateResponse = /** @class */ (function () {
    function AuthenticateResponse(init) {
        Object.assign(this, init);
    }
    return AuthenticateResponse;
}());
exports.AuthenticateResponse = AuthenticateResponse;
// @DataContract
var AssignRolesResponse = /** @class */ (function () {
    function AssignRolesResponse(init) {
        Object.assign(this, init);
    }
    return AssignRolesResponse;
}());
exports.AssignRolesResponse = AssignRolesResponse;
// @DataContract
var UnAssignRolesResponse = /** @class */ (function () {
    function UnAssignRolesResponse(init) {
        Object.assign(this, init);
    }
    return UnAssignRolesResponse;
}());
exports.UnAssignRolesResponse = UnAssignRolesResponse;
// @DataContract
var RegisterResponse = /** @class */ (function () {
    function RegisterResponse(init) {
        Object.assign(this, init);
    }
    return RegisterResponse;
}());
exports.RegisterResponse = RegisterResponse;
// @Route("/PlayerSave")
var GameSceneRequest = /** @class */ (function () {
    function GameSceneRequest(init) {
        Object.assign(this, init);
    }
    GameSceneRequest.prototype.getTypeName = function () { return 'GameSceneRequest'; };
    GameSceneRequest.prototype.getMethod = function () { return 'POST'; };
    GameSceneRequest.prototype.createResponse = function () { return new GameSceneResponse(); };
    return GameSceneRequest;
}());
exports.GameSceneRequest = GameSceneRequest;
// @Route("/PlayerSave")
var PlayerSaveRequest = /** @class */ (function () {
    function PlayerSaveRequest(init) {
        Object.assign(this, init);
    }
    PlayerSaveRequest.prototype.getTypeName = function () { return 'PlayerSaveRequest'; };
    PlayerSaveRequest.prototype.getMethod = function () { return 'POST'; };
    PlayerSaveRequest.prototype.createResponse = function () { return new PlayerSaveResponse(); };
    return PlayerSaveRequest;
}());
exports.PlayerSaveRequest = PlayerSaveRequest;
/**
* Sign In
*/
// @Route("/auth", "OPTIONS,GET,POST,DELETE")
// @Route("/auth/{provider}", "OPTIONS,GET,POST,DELETE")
// @Api(Description="Sign In")
// @DataContract
var Authenticate = /** @class */ (function () {
    function Authenticate(init) {
        Object.assign(this, init);
    }
    Authenticate.prototype.getTypeName = function () { return 'Authenticate'; };
    Authenticate.prototype.getMethod = function () { return 'POST'; };
    Authenticate.prototype.createResponse = function () { return new AuthenticateResponse(); };
    return Authenticate;
}());
exports.Authenticate = Authenticate;
// @Route("/assignroles", "POST")
// @DataContract
var AssignRoles = /** @class */ (function () {
    function AssignRoles(init) {
        Object.assign(this, init);
    }
    AssignRoles.prototype.getTypeName = function () { return 'AssignRoles'; };
    AssignRoles.prototype.getMethod = function () { return 'POST'; };
    AssignRoles.prototype.createResponse = function () { return new AssignRolesResponse(); };
    return AssignRoles;
}());
exports.AssignRoles = AssignRoles;
// @Route("/unassignroles", "POST")
// @DataContract
var UnAssignRoles = /** @class */ (function () {
    function UnAssignRoles(init) {
        Object.assign(this, init);
    }
    UnAssignRoles.prototype.getTypeName = function () { return 'UnAssignRoles'; };
    UnAssignRoles.prototype.getMethod = function () { return 'POST'; };
    UnAssignRoles.prototype.createResponse = function () { return new UnAssignRolesResponse(); };
    return UnAssignRoles;
}());
exports.UnAssignRoles = UnAssignRoles;
/**
* Sign Up
*/
// @Route("/register", "PUT,POST")
// @Api(Description="Sign Up")
// @DataContract
var Register = /** @class */ (function () {
    function Register(init) {
        Object.assign(this, init);
    }
    Register.prototype.getTypeName = function () { return 'Register'; };
    Register.prototype.getMethod = function () { return 'POST'; };
    Register.prototype.createResponse = function () { return new RegisterResponse(); };
    return Register;
}());
exports.Register = Register;
