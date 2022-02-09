//------------------------------------------------------------------------------
// <auto-generated>
//   This code was generated by a tool.
//
//    Umbraco.ModelsBuilder.Embedded v8.17.2
//
//   Changes to this file will be lost if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Web;
using Umbraco.Core.Models;
using Umbraco.Core.Models.PublishedContent;
using Umbraco.Web;
using Umbraco.ModelsBuilder.Embedded;

namespace Umbraco.Web.PublishedModels
{
	/// <summary>Crew member</summary>
	[PublishedModel("crewMember")]
	public partial class CrewMember : PublishedContentModel
	{
		// helpers
#pragma warning disable 0109 // new is redundant
		[global::System.CodeDom.Compiler.GeneratedCodeAttribute("Umbraco.ModelsBuilder.Embedded", "8.17.2")]
		public new const string ModelTypeAlias = "crewMember";
		[global::System.CodeDom.Compiler.GeneratedCodeAttribute("Umbraco.ModelsBuilder.Embedded", "8.17.2")]
		public new const PublishedItemType ModelItemType = PublishedItemType.Content;
		[global::System.CodeDom.Compiler.GeneratedCodeAttribute("Umbraco.ModelsBuilder.Embedded", "8.17.2")]
		public new static IPublishedContentType GetModelContentType()
			=> PublishedModelUtility.GetModelContentType(ModelItemType, ModelTypeAlias);
		[global::System.CodeDom.Compiler.GeneratedCodeAttribute("Umbraco.ModelsBuilder.Embedded", "8.17.2")]
		public static IPublishedPropertyType GetModelPropertyType<TValue>(Expression<Func<CrewMember, TValue>> selector)
			=> PublishedModelUtility.GetModelPropertyType(GetModelContentType(), selector);
#pragma warning restore 0109

		// ctor
		public CrewMember(IPublishedContent content)
			: base(content)
		{ }

		// properties

		///<summary>
		/// Autograph: Submit an image of the astronauts autograph,
		///</summary>
		[global::System.CodeDom.Compiler.GeneratedCodeAttribute("Umbraco.ModelsBuilder.Embedded", "8.17.2")]
		[ImplementPropertyType("autograph")]
		public virtual global::Umbraco.Core.Models.MediaWithCrops Autograph => this.Value<global::Umbraco.Core.Models.MediaWithCrops>("autograph");

		///<summary>
		/// Crew name: Enter the name of the crewmember.
		///</summary>
		[global::System.CodeDom.Compiler.GeneratedCodeAttribute("Umbraco.ModelsBuilder.Embedded", "8.17.2")]
		[ImplementPropertyType("crewName")]
		public virtual string CrewName => this.Value<string>("crewName");

		///<summary>
		/// Description: Enter a description of the crew member.
		///</summary>
		[global::System.CodeDom.Compiler.GeneratedCodeAttribute("Umbraco.ModelsBuilder.Embedded", "8.17.2")]
		[ImplementPropertyType("description")]
		public virtual string Description => this.Value<string>("description");

		///<summary>
		/// Image: Submit an image of the astronaut.
		///</summary>
		[global::System.CodeDom.Compiler.GeneratedCodeAttribute("Umbraco.ModelsBuilder.Embedded", "8.17.2")]
		[ImplementPropertyType("image")]
		public virtual global::Umbraco.Core.Models.MediaWithCrops Image => this.Value<global::Umbraco.Core.Models.MediaWithCrops>("image");

		///<summary>
		/// Role: Enter the role of the crew member.
		///</summary>
		[global::System.CodeDom.Compiler.GeneratedCodeAttribute("Umbraco.ModelsBuilder.Embedded", "8.17.2")]
		[ImplementPropertyType("role")]
		public virtual string Role => this.Value<string>("role");
	}
}
