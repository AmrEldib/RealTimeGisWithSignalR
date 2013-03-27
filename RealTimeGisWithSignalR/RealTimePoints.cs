using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNet.SignalR;

namespace RealTimeGisWithSignalR.Test
{
    public class RealTimePoints : Hub
    {
        private static int _ConnectionCount;

        // Dictionary of usernames identified by connection ID
        public static Dictionary<string, string> _UserNames = new Dictionary<string, string>();
        // Dictionary of layers  identified by connection ID
        public static Dictionary<string, string> _LayersLegend = new Dictionary<string, string>();

        public static List<string> _Colors = new List<string>() { "red", "blue", "green", "black", "grey", "purple", "fuchsia", "silver", "lime", "olive", "yellow", "navy", "teal", "aqua", "maroon" };

        // Public method callable from clients
        public void AddPoint(double x, double y)
        {
            // Notify clients to add point
            Clients.All.addPoint(Context.ConnectionId, x, y);
        }

        // Public method callable from clients
        public void AddPolyline(double[][][] paths)
        {
            // Notify clients to add line
            Clients.All.addPolyline(Context.ConnectionId, paths);
        }

        // Public method callable from clients
        public void AddPolygon(double[][][] rings)
        {
            // Notify clients to add polygon
            Clients.All.addPolygon(Context.ConnectionId, rings);
        }

        // Public method callable from clients
        public void UpdateUserName(string userName)
        {
            // Update username
            if (_UserNames.Keys.Contains(Context.ConnectionId))
            {
                _UserNames[Context.ConnectionId] = userName;
            }

            // Pass updates to all clients
            Clients.All.updataGraphicsLayersLegend(
                _UserNames.Values.ToArray(),
                _LayersLegend.Values.ToArray());
        }

        // Handle new clients connected
        public override System.Threading.Tasks.Task OnConnected()
        {
            // Add existing graphics layers to caller (new client)
            int counter = 0;
            foreach (string graphicsLayer in _UserNames.Keys)
            {
                string clr = _Colors[counter];
                Clients.Caller.addLayer(graphicsLayer, clr);
                counter += 1;
            }

            // Notify all clients (including new client) to add new graphics layer for new client.
            string color = _Colors[_ConnectionCount];
            Clients.All.addLayer(Context.ConnectionId, color);

            // Generate initial username
            string initialUserName = "user" + Context.ConnectionId.Substring(Context.ConnectionId.Length - 3);

            // Pass initial user name to caller
            Clients.Caller.updateOwnUserName(initialUserName);

            // Add username and color to legend
            _UserNames.Add(Context.ConnectionId, initialUserName);
            _LayersLegend.Add(Context.ConnectionId, color);

            // Notify all clients to update their legend.
            Clients.All.updataGraphicsLayersLegend(_UserNames.Values.ToArray(), _LayersLegend.Values.ToArray());

            // Update connections counter
            _ConnectionCount += 1;

            return base.OnConnected();
        }

        // Handle clients disconnected
        public override System.Threading.Tasks.Task OnDisconnected()
        {
            // Update connections counter
            _ConnectionCount -= 1;

            // Notify all clients to remove layer.
            Clients.All.removeLayer(Context.ConnectionId);

            // Remove client's info
            _UserNames.Remove(Context.ConnectionId);
            _LayersLegend.Remove(Context.ConnectionId);

            // Notify all clients to update their legend.
            Clients.All.updataGraphicsLayersLegend(
                _UserNames.Values.ToArray(),
                _LayersLegend.Values.ToArray());

            return base.OnDisconnected();
        }
    }
}