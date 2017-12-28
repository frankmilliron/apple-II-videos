#target photoshop  //works under Photoshop CS6 & MacOS
// Helps to restart Photoshop between script runs so that it doesn't slow down


var destFolder, sourceFolder, files, fileType, sourceDoc, targetFile, psSaveOpts;


// Select the source folder.
sourceFolder = Folder.selectDialog( 'Select the folder with PNG frame files you want to convert:', '~/Desktop' );

// If a valid folder is selected
if ( sourceFolder != null )
{
	files = new Array();
	fileType = "*.png"   //prompt( 'Select type of Image files to you want to process. Eg: *.png', ' ' );
	
	// Get all files matching the pattern
	files = sourceFolder.getFiles( fileType );
	
	if ( files.length > 0 )
	{
		// Get the destination to save the files
		destFolder = Folder.selectDialog( 'Select the folder where you want to save the converted frames:', '~/Desktop' );
		for ( i = 0; i < files.length; i++ )
		{
			sourceDoc = app.open(files[i]); // returns the document object






// Run Conversion Action

//app.load(File("~/my-actions.atn"));
app.doAction("Apple II:DITHER no save","Apple 2 GR Photoshop Actions.atn");

//TODO convert action to javascript commands




									
			// Call function getNewName to get the new TIFF file's name
			targetFile = getNewName();
			
			// Call function getPSOptions get the PhotoshopSaveOptions for the files
			TiffSaveOpts = getTiffOptions();
			
			// Save as TIFF
			sourceDoc.saveAs( targetFile, TiffSaveOpts );
			
			sourceDoc.close();
		}
		alert( 'Files are saved in ' + destFolder );
	}
	else
	{
		alert( 'No matching files found' );
	}
}


function getNewName()
{
	var ext, docName, newName, saveInFile, docName;
	docName = sourceDoc.name;
	ext = '.tif'; // new extension for image file
	newName = "";

	saveInFile = new File( destFolder + '/' + docName );
	

	return saveInFile;
}


function getTiffOptions()
{
	// Create the psSaveOptions object to set the AI save options
	var TiffSaveOpts = new TiffSaveOptions();
	
TiffSaveOpts.alphaChannels = false;
TiffSaveOpts.annotations = false;
TiffSaveOpts.byteOrder.MACOS;
TiffSaveOpts.embedColorProfile = false;
TiffSaveOpts.imageCompression.NONE;
TiffSaveOpts.interleaveChannels = false;
TiffSaveOpts.layers = false;
TiffSaveOpts.saveImagePyramid = false;
TiffSaveOpts.spotColors = false;
TiffSaveOpts.transparency = false;

	return TiffSaveOpts;
}
