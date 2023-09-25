(function()
{
    return function()  
	{
        this.on_loadAppVariables = function()
        {		
            var obj = null;
			// global dataobject
		
            // global dataset

            
            // global variable

            
            obj = null;
        };
 
        // property, event, createMainFrame
        this.on_initApplication = function()
        {
            // properties
            this.set_id("Application_Desktop");
            this.set_screenid("Desktop_screen");
            this.set_licenseurl("NexacroN_client_license.xml");

            if (this._is_attach_childframe)
            	return;
        
            // frame
            var mainframe = this.createMainFrame("mainframe","0","0","1280","840",null,null,this);
            mainframe.set_showtitlebar("true");
            mainframe.set_showstatusbar("true");
            mainframe.set_titletext("Nexacro Education");
            mainframe.set_titlebarbuttongap("4");
            mainframe.set_titlebarbuttonsize("19 19");
            mainframe.set_statusbarheight("25");
            mainframe.set_titlebarheight("28");
            mainframe.on_createBodyFrame = this.mainframe_createBodyFrame;        
            // tray

        };
        
        this.loadPreloadList = function()
        {

        };
        
        this.mainframe_createBodyFrame = function()
        {
            var frame0 = new VFrameSet("VFrameSet0",null,null,null,null,null,null,this);
            frame0.set_separatesize("50,*");
            frame0.set_showtitlebar("false");
            this.addChild(frame0.name, frame0);
            this.frame=frame0;

            var frame1 = new ChildFrame("MainForm",null,null,"100.00",null,null,null,"FrameBase::Form_Login.xfdl",frame0);
            frame1.set_showtitlebar("false");
            frame1.set_openstatus("maximize");
            frame0.addChild(frame1.name, frame1);
            frame1.set_formurl("FrameBase::Form_Login.xfdl");
        };
        
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Application_onload,this);
            this.mainframe.VFrameSet0.MainForm.addEventHandler("onsize",this.mainframe_VFrameSet0_HFrameSet0_VFrameSet1_WorkFrame_MainForm_onsize,this);
        };
        
        // script Compiler
        this.registerScript("Application_Desktop.xadl", function() {
        this.av_WorkFrame = "";

        this.Application_onload = function(obj,e)
        {
        	this.fn_init(obj);
        };


        this.fn_init = function (obj)
        {
        	this.gds_menu.filter("MENU_FLAG == '1'");
        	this.av_WorkFrame = this.mainframe.VFrameSet0.HFrameSet0.VFrameSet1.WorkFrame;
        };


        this.App_Script = function ()
        {
        	return "App Script Desktop";
        };

        this.mainframe_VFrameSet0_HFrameSet0_VFrameSet1_WorkFrame_MainForm_onsize = function(obj,e)
        {
        	if(obj.openstatus == "maximize")
        	{
        		obj.set_showtitlebar(false);
        	}
        };



        });
        this.checkLicense("NexacroN_client_license.xml");
        
        this.loadPreloadList();

        this.loadIncludeScript("Application_Desktop.xadl");
    };
}
)();
