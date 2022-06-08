CREATE PROCEDURE [Sales].[spProductReviewDelete]
  @ProductReviewId AS INT
AS
BEGIN
  /*
   * This is automatically generated; any changes will be lost. 
   */

  SET NOCOUNT ON;

  BEGIN TRY
    -- Wrap in a transaction.
    BEGIN TRANSACTION

    -- Delete the record.
    DELETE [pr] FROM [Sales].[ProductReview] AS [pr]
      WHERE [pr].[ProductReviewId] = @ProductReviewId

    -- Commit the transaction.
    COMMIT TRANSACTION
  END TRY
  BEGIN CATCH
    -- Rollback transaction and rethrow error.
    IF @@TRANCOUNT > 0
      ROLLBACK TRANSACTION;

    THROW;
  END CATCH
END